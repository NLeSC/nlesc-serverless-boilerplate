# Log of Amplify commands ran to setup the backend

## Init amplify

```sh
amplify init
? Enter a name for the project nlesc
? Enter a name for the environment master
? Choose your default editor: Visual Studio Code
? Choose the type of app that you're building javascript
Please tell us about your project
? What javascript framework are you using react
? Source Directory Path:  src
? Distribution Directory Path: build
? Build Command:  yarn build
? Start Command: yarn start
Using default provider  awscloudformation

For more information on AWS Profiles, see:
https://docs.aws.amazon.com/cli/latest/userguide/cli-multiple-profiles.html

? Do you want to use an AWS profile? Yes
? Please choose the profile you want to use boiler

....

✔ Successfully created initial AWS cloud resources for deployments.
✔ Initialized provider successfully.
Initialized your environment successfully.

Your project has been successfully initialized and connected to the cloud!

Some next steps:
"amplify status" will show you what you've added already and if it's locally configured or deployed
"amplify <category> add" will allow you to add features like user login or a backend API
"amplify push" will build all your local backend resources and provision it in the cloud
“amplify console” to open the Amplify Console and view your project status
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

Pro tip:
Try "amplify add api" to create a backend API and then "amplify publish" to deploy everything
```

## Add API and database

```sh
amplify add api
? Please select from one of the below mentioned services: GraphQL
? Provide API name: nlesc
? Choose the default authorization type for the API Amazon Cognito User Pool
Using service: Cognito, provided by: awscloudformation
 
 The current configured provider is Amazon Cognito. 
 
 Do you want to use the default authentication and security configuration? Default configuration
 Warning: you will not be able to edit these selections. 
 How do you want users to be able to sign in? Username
 Do you want to configure advanced settings? No, I am done.
Successfully added auth resource
? Do you want to configure advanced settings for the GraphQL API No, I am done.
? Do you have an annotated GraphQL schema? No
? Do you want a guided schema creation? Yes
? What best describes your project: Single object with fields (e.g., “Todo” with ID, name, description)
? Do you want to edit the schema now? Yes
Please edit the file in your editor: .../nlesc-serverless-boilerplate/amplify/backend/api/nlesc/schema.graphql
? Press enter to continue 

The following types do not have '@auth' enabled. Consider using @auth with @model
	 - Todo
Learn more about @auth here: https://aws-amplify.github.io/docs/cli-toolchain/graphql#auth 


GraphQL schema compiled successfully.

Edit your schema at .../nlesc-serverless-boilerplate/amplify/backend/api/nlesc/schema.graphql or place .graphql files in a directory at .../nlesc-serverless-boilerplate/amplify/backend/api/nlesc/schema
Successfully added resource nlesc locally

Some next steps:
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud
```

So the Graphql schema is in [amplify/backend/api/nlesc/schema.graphql](amplify/backend/api/nlesc/schema.graphql).

## Push resource to AWS

```sh
amplify push
✔ Successfully pulled backend environment master from the cloud.

Current Environment: master

| Category | Resource name | Operation | Provider plugin   |
| -------- | ------------- | --------- | ----------------- |
| Auth     | nlesc8d53e119 | Create    | awscloudformation |
| Api      | nlesc         | Create    | awscloudformation |
? Are you sure you want to continue? Yes

The following types do not have '@auth' enabled. Consider using @auth with @model
	 - Todo
Learn more about @auth here: https://aws-amplify.github.io/docs/cli-toolchain/graphql#auth 


GraphQL schema compiled successfully.

Edit your schema at .../nlesc-serverless-boilerplate/amplify/backend/api/nlesc/schema.graphql or place .graphql files in a directory at .../nlesc-serverless-boilerplate/amplify/backend/api/nlesc/schema
? Do you want to generate code for your newly created GraphQL API Yes
? Choose the code generation language target typescript
? Enter the file name pattern of graphql queries, mutations and subscriptions src/graphql/**/*.ts
? Do you want to generate/update all possible GraphQL operations - queries, mutations and subscriptions Yes
? Enter maximum statement depth [increase from default if your schema is deeply nested] 5
? Enter the file name for the generated code src/API.ts

...

✔ Generated GraphQL operations successfully and saved at src/graphql
✔ Code generated successfully and saved in file src/API.ts
✔ All resources are updated in the cloud

GraphQL endpoint: https://******************.appsync-api.eu-central-1.amazonaws.com/graphql

```

### Create a cognito user & test Graphql endpoint

Without a web application with a registration form you can 
1. create an coginto user in [AWS console](https://eu-central-1.console.aws.amazon.com/cognito/home?region=eu-central-1)
2. Goto [AWS Appsync console](https://eu-central-1.console.aws.amazon.com/appsync/home?region=eu-central-1)
3. Goto Run a query
4. Login with the user you just created
5. Run following query

```graphql
{
  listTodos {
    items {
      name
    }
  }
}
```

Results in 

```json
{
  "data": {
    "listTodos": {
      "items": []
    }
  }
}
```