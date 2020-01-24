/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  completed?: boolean | null,
  owner?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  completed?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  completed?: boolean | null,
  owner?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteTodoInput = {
  id?: string | null,
};

export type CreateJobDescriptionInput = {
  id?: string | null,
  payload?: JobPayloadInput | null,
  owner?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type JobPayloadInput = {
  count: number,
};

export type ModelJobDescriptionConditionInput = {
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelJobDescriptionConditionInput | null > | null,
  or?: Array< ModelJobDescriptionConditionInput | null > | null,
  not?: ModelJobDescriptionConditionInput | null,
};

export type UpdateJobDescriptionInput = {
  id: string,
  payload?: JobPayloadInput | null,
  owner?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteJobDescriptionInput = {
  id?: string | null,
};

export type CreateJobInput = {
  id?: string | null,
  status?: JobStatusInput | null,
  result?: JobResultInput | null,
  owner?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  jobDescriptionId?: string | null,
};

export type JobStatusInput = {
  state: JobState,
  error?: string | null,
  submittedBy: string,
  submittedAt: string,
  completedAt?: string | null,
  updatedAt?: string | null,
  progress?: number | null,
  progressMessage?: string | null,
};

export enum JobState {
  UNKNOWN = "UNKNOWN",
  SUBMITTED = "SUBMITTED",
  PENDING = "PENDING",
  RUNNABLE = "RUNNABLE",
  STARTING = "STARTING",
  RUNNING = "RUNNING",
  SUCCEEDED = "SUCCEEDED",
  FAILED = "FAILED",
}


export type JobResultInput = {
  output?: string | null,
};

export type ModelJobConditionInput = {
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelJobConditionInput | null > | null,
  or?: Array< ModelJobConditionInput | null > | null,
  not?: ModelJobConditionInput | null,
};

export type UpdateJobInput = {
  id: string,
  status?: JobStatusInput | null,
  result?: JobResultInput | null,
  owner?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  jobDescriptionId?: string | null,
};

export type DeleteJobInput = {
  id?: string | null,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  completed?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelJobDescriptionFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelJobDescriptionFilterInput | null > | null,
  or?: Array< ModelJobDescriptionFilterInput | null > | null,
  not?: ModelJobDescriptionFilterInput | null,
};

export type ModelJobFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelJobFilterInput | null > | null,
  or?: Array< ModelJobFilterInput | null > | null,
  not?: ModelJobFilterInput | null,
};

export type MarkAsCompletedMutationVariables = {
  todoId: string,
};

export type MarkAsCompletedMutation = {
  markAsCompleted: string | null,
};

export type SubmitJobMutationVariables = {
  jobdescriptionid: string,
};

export type SubmitJobMutation = {
  submitJob: string | null,
};

export type CancelJobMutationVariables = {
  jobid: string,
};

export type CancelJobMutation = {
  cancelJob: string | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    description: string | null,
    completed: boolean | null,
    owner: string | null,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    description: string | null,
    completed: boolean | null,
    owner: string | null,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    description: string | null,
    completed: boolean | null,
    owner: string | null,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type CreateJobDescriptionMutationVariables = {
  input: CreateJobDescriptionInput,
  condition?: ModelJobDescriptionConditionInput | null,
};

export type CreateJobDescriptionMutation = {
  createJobDescription:  {
    __typename: "JobDescription",
    id: string,
    payload:  {
      __typename: "JobPayload",
      count: number,
    } | null,
    jobs:  {
      __typename: "ModelJobConnection",
      items:  Array< {
        __typename: "Job",
        id: string,
        owner: string | null,
        createdAt: string | null,
        updatedAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type UpdateJobDescriptionMutationVariables = {
  input: UpdateJobDescriptionInput,
  condition?: ModelJobDescriptionConditionInput | null,
};

export type UpdateJobDescriptionMutation = {
  updateJobDescription:  {
    __typename: "JobDescription",
    id: string,
    payload:  {
      __typename: "JobPayload",
      count: number,
    } | null,
    jobs:  {
      __typename: "ModelJobConnection",
      items:  Array< {
        __typename: "Job",
        id: string,
        owner: string | null,
        createdAt: string | null,
        updatedAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type DeleteJobDescriptionMutationVariables = {
  input: DeleteJobDescriptionInput,
  condition?: ModelJobDescriptionConditionInput | null,
};

export type DeleteJobDescriptionMutation = {
  deleteJobDescription:  {
    __typename: "JobDescription",
    id: string,
    payload:  {
      __typename: "JobPayload",
      count: number,
    } | null,
    jobs:  {
      __typename: "ModelJobConnection",
      items:  Array< {
        __typename: "Job",
        id: string,
        owner: string | null,
        createdAt: string | null,
        updatedAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type CreateJobMutationVariables = {
  input: CreateJobInput,
  condition?: ModelJobConditionInput | null,
};

export type CreateJobMutation = {
  createJob:  {
    __typename: "Job",
    id: string,
    status:  {
      __typename: "JobStatus",
      state: JobState,
      error: string | null,
      submittedBy: string,
      submittedAt: string,
      completedAt: string | null,
      updatedAt: string | null,
      progress: number | null,
      progressMessage: string | null,
    } | null,
    result:  {
      __typename: "JobResult",
      output: string | null,
    } | null,
    description:  {
      __typename: "JobDescription",
      id: string,
      payload:  {
        __typename: "JobPayload",
        count: number,
      } | null,
      jobs:  {
        __typename: "ModelJobConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
      createdAt: string | null,
      updatedAt: string | null,
    } | null,
    owner: string | null,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type UpdateJobMutationVariables = {
  input: UpdateJobInput,
  condition?: ModelJobConditionInput | null,
};

export type UpdateJobMutation = {
  updateJob:  {
    __typename: "Job",
    id: string,
    status:  {
      __typename: "JobStatus",
      state: JobState,
      error: string | null,
      submittedBy: string,
      submittedAt: string,
      completedAt: string | null,
      updatedAt: string | null,
      progress: number | null,
      progressMessage: string | null,
    } | null,
    result:  {
      __typename: "JobResult",
      output: string | null,
    } | null,
    description:  {
      __typename: "JobDescription",
      id: string,
      payload:  {
        __typename: "JobPayload",
        count: number,
      } | null,
      jobs:  {
        __typename: "ModelJobConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
      createdAt: string | null,
      updatedAt: string | null,
    } | null,
    owner: string | null,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type DeleteJobMutationVariables = {
  input: DeleteJobInput,
  condition?: ModelJobConditionInput | null,
};

export type DeleteJobMutation = {
  deleteJob:  {
    __typename: "Job",
    id: string,
    status:  {
      __typename: "JobStatus",
      state: JobState,
      error: string | null,
      submittedBy: string,
      submittedAt: string,
      completedAt: string | null,
      updatedAt: string | null,
      progress: number | null,
      progressMessage: string | null,
    } | null,
    result:  {
      __typename: "JobResult",
      output: string | null,
    } | null,
    description:  {
      __typename: "JobDescription",
      id: string,
      payload:  {
        __typename: "JobPayload",
        count: number,
      } | null,
      jobs:  {
        __typename: "ModelJobConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
      createdAt: string | null,
      updatedAt: string | null,
    } | null,
    owner: string | null,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    description: string | null,
    completed: boolean | null,
    owner: string | null,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      description: string | null,
      completed: boolean | null,
      owner: string | null,
      createdAt: string | null,
      updatedAt: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetJobDescriptionQueryVariables = {
  id: string,
};

export type GetJobDescriptionQuery = {
  getJobDescription:  {
    __typename: "JobDescription",
    id: string,
    payload:  {
      __typename: "JobPayload",
      count: number,
    } | null,
    jobs:  {
      __typename: "ModelJobConnection",
      items:  Array< {
        __typename: "Job",
        id: string,
        owner: string | null,
        createdAt: string | null,
        updatedAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type ListJobDescriptionsQueryVariables = {
  filter?: ModelJobDescriptionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListJobDescriptionsQuery = {
  listJobDescriptions:  {
    __typename: "ModelJobDescriptionConnection",
    items:  Array< {
      __typename: "JobDescription",
      id: string,
      payload:  {
        __typename: "JobPayload",
        count: number,
      } | null,
      jobs:  {
        __typename: "ModelJobConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
      createdAt: string | null,
      updatedAt: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetJobQueryVariables = {
  id: string,
};

export type GetJobQuery = {
  getJob:  {
    __typename: "Job",
    id: string,
    status:  {
      __typename: "JobStatus",
      state: JobState,
      error: string | null,
      submittedBy: string,
      submittedAt: string,
      completedAt: string | null,
      updatedAt: string | null,
      progress: number | null,
      progressMessage: string | null,
    } | null,
    result:  {
      __typename: "JobResult",
      output: string | null,
    } | null,
    description:  {
      __typename: "JobDescription",
      id: string,
      payload:  {
        __typename: "JobPayload",
        count: number,
      } | null,
      jobs:  {
        __typename: "ModelJobConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
      createdAt: string | null,
      updatedAt: string | null,
    } | null,
    owner: string | null,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type ListJobsQueryVariables = {
  filter?: ModelJobFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListJobsQuery = {
  listJobs:  {
    __typename: "ModelJobConnection",
    items:  Array< {
      __typename: "Job",
      id: string,
      status:  {
        __typename: "JobStatus",
        state: JobState,
        error: string | null,
        submittedBy: string,
        submittedAt: string,
        completedAt: string | null,
        updatedAt: string | null,
        progress: number | null,
        progressMessage: string | null,
      } | null,
      result:  {
        __typename: "JobResult",
        output: string | null,
      } | null,
      description:  {
        __typename: "JobDescription",
        id: string,
        owner: string | null,
        createdAt: string | null,
        updatedAt: string | null,
      } | null,
      owner: string | null,
      createdAt: string | null,
      updatedAt: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    description: string | null,
    completed: boolean | null,
    owner: string | null,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    description: string | null,
    completed: boolean | null,
    owner: string | null,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    description: string | null,
    completed: boolean | null,
    owner: string | null,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type OnCreateJobDescriptionSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateJobDescriptionSubscription = {
  onCreateJobDescription:  {
    __typename: "JobDescription",
    id: string,
    payload:  {
      __typename: "JobPayload",
      count: number,
    } | null,
    jobs:  {
      __typename: "ModelJobConnection",
      items:  Array< {
        __typename: "Job",
        id: string,
        owner: string | null,
        createdAt: string | null,
        updatedAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type OnUpdateJobDescriptionSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateJobDescriptionSubscription = {
  onUpdateJobDescription:  {
    __typename: "JobDescription",
    id: string,
    payload:  {
      __typename: "JobPayload",
      count: number,
    } | null,
    jobs:  {
      __typename: "ModelJobConnection",
      items:  Array< {
        __typename: "Job",
        id: string,
        owner: string | null,
        createdAt: string | null,
        updatedAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type OnDeleteJobDescriptionSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteJobDescriptionSubscription = {
  onDeleteJobDescription:  {
    __typename: "JobDescription",
    id: string,
    payload:  {
      __typename: "JobPayload",
      count: number,
    } | null,
    jobs:  {
      __typename: "ModelJobConnection",
      items:  Array< {
        __typename: "Job",
        id: string,
        owner: string | null,
        createdAt: string | null,
        updatedAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type OnCreateJobSubscription = {
  onCreateJob:  {
    __typename: "Job",
    id: string,
    status:  {
      __typename: "JobStatus",
      state: JobState,
      error: string | null,
      submittedBy: string,
      submittedAt: string,
      completedAt: string | null,
      updatedAt: string | null,
      progress: number | null,
      progressMessage: string | null,
    } | null,
    result:  {
      __typename: "JobResult",
      output: string | null,
    } | null,
    description:  {
      __typename: "JobDescription",
      id: string,
      payload:  {
        __typename: "JobPayload",
        count: number,
      } | null,
      jobs:  {
        __typename: "ModelJobConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
      createdAt: string | null,
      updatedAt: string | null,
    } | null,
    owner: string | null,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type OnUpdateJobSubscription = {
  onUpdateJob:  {
    __typename: "Job",
    id: string,
    status:  {
      __typename: "JobStatus",
      state: JobState,
      error: string | null,
      submittedBy: string,
      submittedAt: string,
      completedAt: string | null,
      updatedAt: string | null,
      progress: number | null,
      progressMessage: string | null,
    } | null,
    result:  {
      __typename: "JobResult",
      output: string | null,
    } | null,
    description:  {
      __typename: "JobDescription",
      id: string,
      payload:  {
        __typename: "JobPayload",
        count: number,
      } | null,
      jobs:  {
        __typename: "ModelJobConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
      createdAt: string | null,
      updatedAt: string | null,
    } | null,
    owner: string | null,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type OnDeleteJobSubscription = {
  onDeleteJob:  {
    __typename: "Job",
    id: string,
    status:  {
      __typename: "JobStatus",
      state: JobState,
      error: string | null,
      submittedBy: string,
      submittedAt: string,
      completedAt: string | null,
      updatedAt: string | null,
      progress: number | null,
      progressMessage: string | null,
    } | null,
    result:  {
      __typename: "JobResult",
      output: string | null,
    } | null,
    description:  {
      __typename: "JobDescription",
      id: string,
      payload:  {
        __typename: "JobPayload",
        count: number,
      } | null,
      jobs:  {
        __typename: "ModelJobConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
      createdAt: string | null,
      updatedAt: string | null,
    } | null,
    owner: string | null,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};
