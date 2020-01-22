/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var apiNlescGraphQLAPIIdOutput = process.env.API_NLESC_GRAPHQLAPIIDOUTPUT
var apiNlescGraphQLAPIEndpointOutput = process.env.API_NLESC_GRAPHQLAPIENDPOINTOUTPUT

Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');
const scheduler = new AWS.Batch();
const dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

exports.handler = async (event, context) => {
    const jobdescription_id = event.arguments.jobdescriptionid;

    const jobdescription_table = 'JobDescription-' + process.env.API_NLESC_GRAPHQLAPIIDOUTPUT + '-' + process.env.ENV;
    const job_table = 'Job-' + process.env.API_NLESC_GRAPHQLAPIIDOUTPUT + '-' + process.env.ENV;

    // Check if job description exists
    const jobdescription = await dynamodb.getItem({
        TableName: jobdescription_table,
        Key: { id: { S: jobdescription_id } }
    });
    console.log(jobdescription);

    const jobSubmissionResponse = await scheduler.submitJob({
        jobDefinition: process.env.BATCH_TASK_JOBDEFINITION,
        jobQueue: process.env.BATCH_TASK_JOBQUEUE,
        jobName: 'nlesc-hello-task-' + jobdescription_id,
        parameters: {
            jobdescriptionid: jobdescription_id
        }
    }).promise();
    console.log(jobSubmissionResponse)
    const jobId = jobSubmissionResponse.jobId
    console.log(jobId)

    const currentUser = event.identity.username;
    const status = {
        "M": {
          state: {
            S: 'SUBMITTED'
          },
          submittedAt: {
            S: new Date().toISOString()
          },
          submittedBy: {
            S: currentUser
          },
          updatedAt: {
            S: new Date().toISOString()
          },
          progress: {
              N: 0
          },
          progressMessage: {
              S: ''
          }
        }
      };
    await dynamodb.putItem({
        TableName: job_table,
        Item: { 
            id: {S: jobId },
            jobDescriptionID: {S: jobdescription_id},
            status
        },
    }).promise();
    console.log('submitted job');

    context.done(null, jobId); // SUCCESS with message
};
