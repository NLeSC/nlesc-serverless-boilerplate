// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateTodo = `subscription OnCreateTodo {
  onCreateTodo {
    id
    name
    description
    completed
  }
}
`;
export const onUpdateTodo = `subscription OnUpdateTodo {
  onUpdateTodo {
    id
    name
    description
    completed
  }
}
`;
export const onDeleteTodo = `subscription OnDeleteTodo {
  onDeleteTodo {
    id
    name
    description
    completed
  }
}
`;
export const onCreateJobDescription = `subscription OnCreateJobDescription {
  onCreateJobDescription {
    id
    payload {
      count
    }
    jobs {
      items {
        id
        jobDescriptionID
      }
      nextToken
    }
  }
}
`;
export const onUpdateJobDescription = `subscription OnUpdateJobDescription {
  onUpdateJobDescription {
    id
    payload {
      count
    }
    jobs {
      items {
        id
        jobDescriptionID
      }
      nextToken
    }
  }
}
`;
export const onDeleteJobDescription = `subscription OnDeleteJobDescription {
  onDeleteJobDescription {
    id
    payload {
      count
    }
    jobs {
      items {
        id
        jobDescriptionID
      }
      nextToken
    }
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
    }
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
    }
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
    }
  }
}
`;
