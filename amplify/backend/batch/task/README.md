### Add Docker image

The AWS Batch job definition has a Docker image. The Dockerfile is in `amplify/backend/batch/task/src` directory.

To build and push see View push commands popup on [AWS Container Repository](https://eu-central-1.console.aws.amazon.com/ecr/repositories/nlesc-hello-task-master/?region=eu-central-1)

For example
```
$(aws ecr get-login --no-include-email --region eu-central-1)
docker build -t nlesc-hello-task-master .
docker tag nlesc-hello-task-master:latest <account id>.dkr.ecr.eu-central-1.amazonaws.com/nlesc-hello-task-master:latest
docker push <account id>.dkr.ecr.eu-central-1.amazonaws.com/nlesc-hello-task-master:latest
```