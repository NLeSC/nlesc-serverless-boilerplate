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

  console.info('Fetch todo item: ' + todoId + ' from table ' + table);
  const todo = await dynamodb.getItem({
    TableName: table,
    Key: { id: { S: todoId } },
    AttributesToGet: ['name', 'completed']
  }).promise();

  console.info(todo);

  const isCompleted = todo.Item.completed.BOOL;
  // Only mark as completed when incomplete
  if (!isCompleted) {
    const value = {
      'BOOL': true
    };
    try {
      const result = await dynamodb.updateItem({
        TableName: table,
        Key: { id: { S: todoId } },
        UpdateExpression: 'SET #B = :b',
        ExpressionAttributeNames: { "#B": "completed" },
        ExpressionAttributeValues: { ":b": value }
      }).promise();
      console.info(result);
    } catch (error) {
      console.info('failure');
      console.info(error);

      context.done(error, null); // Failure with message
    }
    console.info('Marked as completed');
    context.done(null, todoId); // SUCCESS with message
  } else {
    console.info('Already marked as completed');
    context.done(null, undefined); // SUCCESS with message
  }
};
