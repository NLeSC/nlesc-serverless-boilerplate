// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateTodo = `subscription OnCreateTodo($owner: String) {
  onCreateTodo(owner: $owner) {
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
export const onUpdateTodo = `subscription OnUpdateTodo($owner: String) {
  onUpdateTodo(owner: $owner) {
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
export const onDeleteTodo = `subscription OnDeleteTodo($owner: String) {
  onDeleteTodo(owner: $owner) {
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
export const onCreateJobDescription = `subscription OnCreateJobDescription($owner: String) {
  onCreateJobDescription(owner: $owner) {
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
export const onUpdateJobDescription = `subscription OnUpdateJobDescription($owner: String) {
  onUpdateJobDescription(owner: $owner) {
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
export const onDeleteJobDescription = `subscription OnDeleteJobDescription($owner: String) {
  onDeleteJobDescription(owner: $owner) {
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
export const onCreateJob = `subscription OnCreateJob {
  onCreateJob {
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
export const onUpdateJob = `subscription OnUpdateJob {
  onUpdateJob {
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
export const onDeleteJob = `subscription OnDeleteJob {
  onDeleteJob {
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
