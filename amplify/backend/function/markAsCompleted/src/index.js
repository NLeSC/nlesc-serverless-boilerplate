/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var apiNlescGraphQLAPIIdOutput = process.env.API_NLESC_GRAPHQLAPIIDOUTPUT
var apiNlescGraphQLAPIEndpointOutput = process.env.API_NLESC_GRAPHQLAPIENDPOINTOUTPUT

Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');
// const S3 = new AWS.S3({ signatureVersion: 'v4' });
const dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

exports.handler = async function (event, context) { //eslint-disable-line

  const todoId = event.arguments.todoId;
  const table = 'Todo-' + process.env.API_NLESC_GRAPHQLAPIIDOUTPUT + '-' + process.env.ENV;

  const completed = {
    'B': true
  };
  await dynamodb.updateItem({
    TableName: table,
    Key: { id: { S: todoId } },
    UpdateExpression: 'SET #B = :b',
    ExpressionAttributeNames: { "#B": "completed" },
    ExpressionAttributeValues: { ":b": completed }
  }).promise();

  context.done(null, todoId); // SUCCESS with message
};
