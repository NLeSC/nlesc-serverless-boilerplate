// tslint:disable
// this is an auto generated file. This will be overwritten

export const markAsCompleted = `mutation MarkAsCompleted($todoId: ID!) {
  markAsCompleted(todoId: $todoId)
}
`;
export const submitJob = `mutation SubmitJob($jobdescriptionid: ID!) {
  submitJob(jobdescriptionid: $jobdescriptionid)
}
`;
export const cancelJob = `mutation CancelJob($jobid: ID!) {
  cancelJob(jobid: $jobid)
}
`;
export const createTodo = `mutation CreateTodo(
  $input: CreateTodoInput!
  $condition: ModelTodoConditionInput
) {
  createTodo(input: $input, condition: $condition) {
    id
    name
    description
    completed
    owner
    createdAt
    updatedAt
  }
}
`;
export const updateTodo = `mutation UpdateTodo(
  $input: UpdateTodoInput!
  $condition: ModelTodoConditionInput
) {
  updateTodo(input: $input, condition: $condition) {
    id
    name
    description
    completed
    owner
    createdAt
    updatedAt
  }
}
`;
export const deleteTodo = `mutation DeleteTodo(
  $input: DeleteTodoInput!
  $condition: ModelTodoConditionInput
) {
  deleteTodo(input: $input, condition: $condition) {
    id
    name
    description
    completed
    owner
    createdAt
    updatedAt
  }
}
`;
export const createJobDescription = `mutation CreateJobDescription(
  $input: CreateJobDescriptionInput!
  $condition: ModelJobDescriptionConditionInput
) {
  createJobDescription(input: $input, condition: $condition) {
    id
    payload {
      count
    }
    jobs {
      items {
        id
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
    owner
    createdAt
    updatedAt
  }
}
`;
export const updateJobDescription = `mutation UpdateJobDescription(
  $input: UpdateJobDescriptionInput!
  $condition: ModelJobDescriptionConditionInput
) {
  updateJobDescription(input: $input, condition: $condition) {
    id
    payload {
      count
    }
    jobs {
      items {
        id
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
    owner
    createdAt
    updatedAt
  }
}
`;
export const deleteJobDescription = `mutation DeleteJobDescription(
  $input: DeleteJobDescriptionInput!
  $condition: ModelJobDescriptionConditionInput
) {
  deleteJobDescription(input: $input, condition: $condition) {
    id
    payload {
      count
    }
    jobs {
      items {
        id
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
    owner
    createdAt
    updatedAt
  }
}
`;
export const createJob = `mutation CreateJob(
  $input: CreateJobInput!
  $condition: ModelJobConditionInput
) {
  createJob(input: $input, condition: $condition) {
    id
    status {
      state
      error
      submittedBy
      submittedAt
      completedAt
      updatedAt
      progress
      progressMessage
    }
    result {
      output
    }
    description {
      id
      payload {
        count
      }
      jobs {
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
    owner
    createdAt
    updatedAt
  }
}
`;
export const updateJob = `mutation UpdateJob(
  $input: UpdateJobInput!
  $condition: ModelJobConditionInput
) {
  updateJob(input: $input, condition: $condition) {
    id
    status {
      state
      error
      submittedBy
      submittedAt
      completedAt
      updatedAt
      progress
      progressMessage
    }
    result {
      output
    }
    description {
      id
      payload {
        count
      }
      jobs {
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
    owner
    createdAt
    updatedAt
  }
}
`;
export const deleteJob = `mutation DeleteJob(
  $input: DeleteJobInput!
  $condition: ModelJobConditionInput
) {
  deleteJob(input: $input, condition: $condition) {
    id
    status {
      state
      error
      submittedBy
      submittedAt
      completedAt
      updatedAt
      progress
      progressMessage
    }
    result {
      output
    }
    description {
      id
      payload {
        count
      }
      jobs {
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
    owner
    createdAt
    updatedAt
  }
}
`;
