/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var apiNlescGraphQLAPIIdOutput = process.env.API_NLESC_GRAPHQLAPIIDOUTPUT
var apiNlescGraphQLAPIEndpointOutput = process.env.API_NLESC_GRAPHQLAPIENDPOINTOUTPUT

Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

exports.handler = async (event, context) => {
    if (event.source !== 'aws.batch') {
        throw new Error("Function only supports input from events with a source type of: aws.batch");
    }
    console.log(JSON.stringify(event.detail));
    // determine project id based on job name
    const jobName = event.detail.jobName;
    const jobId = event.detail.jobId;
    const state = event.detail.status;

    console.log(`State changed to ${state} for job id ${jobId} with name ${jobName}`);
    const table = 'Job-' + process.env.API_NLESC_GRAPHQLAPIIDOUTPUT + '-' + process.env.ENV;

    const item = await dynamodb.getItem({
        TableName: table,
        Key: { id: { S: jobId } },
        ExpressionAttributeNames: { '#S': "status" },
        ProjectionExpression: '#S'
    }).promise();
    if (!item) {
        context.done(`Job ${jobId} not found`, null);
        return;
    }
    const status = item.Item.status;
    const now = new Date().toISOString()
    status.M.state = { S: state };
    status.M.updatedAt = { S: now };
    if (state === 'SUCCEEDED' || state === 'FAILED') {
        // TODO use event.detail.stoppedAt field instead of now, but gives error when passed to new Date
        status.M.completedAt = { S: new Date().toISOString() };
    }
    if (state === 'FAILED') {
        status.M.error = { S: event.detail.statusReason };
    }
    console.log(`Updating ${table} table entry ${jobId}`);

    await dynamodb.updateItem({
        TableName: table,
        Key: { id: { S: jobId } },
        UpdateExpression: 'SET #S = :s',
        ExpressionAttributeNames: { "#S": "status" },
        ExpressionAttributeValues: { ":s": status }
      }).promise();
      console.log('Updated item');
      
      context.done(null, 'AWS Batch event processed'); // SUCCESS with message
};
