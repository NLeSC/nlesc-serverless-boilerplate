# Example graphql queries

## Create job

```graphql
mutation CreateJob(
  $input: CreateJobInput!
  $condition: ModelJobConditionInput
) {
  createJob(input: $input, condition: $condition) {
    id
  }
}
```

Vars
```json
{"input": {
    "status": {
        "state": "UNKNOWN",
        "submittedBy": "stefan",
        "submittedAt": "2020-01-24T10:03:54.337Z",
        "updatedAt": "2020-01-24T10:03:54.337Z"
    },
    "jobDescriptionId": "12be628b-ecb4-48e9-bd6a-9fbd01c64bf6",
    "owner": "stefan"
}

}
```