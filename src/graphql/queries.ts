// tslint:disable
// this is an auto generated file. This will be overwritten

export const getTodo = `query GetTodo($id: ID!) {
  getTodo(id: $id) {
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
export const listTodos = `query ListTodos(
  $filter: ModelTodoFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      completed
      owner
      createdAt
      updatedAt
    }
    nextToken
  }
}
`;
export const getJobDescription = `query GetJobDescription($id: ID!) {
  getJobDescription(id: $id) {
    id
    payload {
      count
    }
    jobs {
      items {
        id
        jobDescriptionID
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
export const listJobDescriptions = `query ListJobDescriptions(
  $filter: ModelJobDescriptionFilterInput
  $limit: Int
  $nextToken: String
) {
  listJobDescriptions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getJob = `query GetJob($id: ID!) {
  getJob(id: $id) {
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
    jobDescriptionID
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
export const listJobs = `query ListJobs($filter: ModelJobFilterInput, $limit: Int, $nextToken: String) {
  listJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      jobDescriptionID
      description {
        id
        owner
        createdAt
        updatedAt
      }
      owner
      createdAt
      updatedAt
    }
    nextToken
  }
}
`;
