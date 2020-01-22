/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var apiNlescGraphQLAPIIdOutput = process.env.API_NLESC_GRAPHQLAPIIDOUTPUT
var apiNlescGraphQLAPIEndpointOutput = process.env.API_NLESC_GRAPHQLAPIENDPOINTOUTPUT

Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');
const scheduler = new AWS.Batch();

exports.handler = async (event, context) => {
    const jobid = event.arguments.jobid;

    // terminate aws batch job 
    await scheduler.terminateJob({
        jobId: jobid,
        reason: 'Terminating job as requested by user via api call'
    }).promise();
    console.log(`Job ${jobid} has been terminated`);

    context.done(null, jobid); // SUCCESS with message
};
