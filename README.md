# NLeSC serverless boilerplate

## What is it?

The web application was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The web application uses [AWS AppSync](https://aws.amazon.com/appsync/) and [Amplify](https://aws-amplify.github.io/docs/) to setup and run infrastructure.

## Frontend

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

This will run tests of frontend code.

### `yarn build`

Builds the app for production to the `build` folder.<br />

## Backend

Requirements: 
* nodejs, tested with v12.13.1
* yarn, NodeJS package manager
* Docker, used for building batch job Docker image
* aws cli (pip install awscli)
* AWS account

Install amplify cli with

```sh
npm install -g @aws-amplify/cli@4.12.0
```

Amplify cli needs to be installed globally, to not pollute your env we suggest to use [nvm](https://github.com/nvm-sh/nvm) to isolate the node env.

Initialize amplify with

```sh
amplify configure
Follow these steps to set up access to your AWS account:

Sign in to your AWS administrator account:
https://console.aws.amazon.com/
Press Enter to continue

Specify the AWS Region
? region:  eu-central-1
Specify the username of the new IAM user:
? user name:  amplify-********
Complete the user creation using the AWS console
https://console.aws.amazon.com/iam/home?region=undefined#/users$new?step=final&accessKey&userNames=amplify-**********&permissionType=policies&policies=arn:aws:iam::aws:policy%2FAdministratorAccess
Press Enter to continue

Enter the access key of the newly created user:
? accessKeyId:   **********
? secretAccessKey:  **********
This would update/create the AWS Profile in your local machine
? Profile Name:  boiler

Successfully set up the new user.
```

To start when there are local amplify resources, but none in cloud with the amplify environment suffix.

```sh
amplify env add
# Asks for new environment name
```

To use current deployed amplify environment in the cloud

```sh
amplify env pull
```

To start when there are no local or cloud amplify resources (not the case for this boilerplate repo).

```sh
amplify init
```
The amplify resources that we made are logged in [docs/log.md](docs/log.md)


### To deploy services

Before amplify push you need to 
1. correct in subnet and security group in `amplify/backend/batch/task/parameters.json`.

```sh
# Deploy backend
amplify push
# Deploy frontend
amplify publish
```

The url wher the application is running will be printed to screen.

After amplify you need to
1. Build & push you need to push the Docker image (see `amplify/backend/batch/task/`)
2. Create users in [AWS Cognito console](https://eu-central-1.console.aws.amazon.com/cognito/home?region=eu-central-1).
