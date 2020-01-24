import React from 'react'
import { JobState } from './API';
import API, { graphqlOperation } from '@aws-amplify/api';
import { cancelJob } from './graphql/mutations';

export interface IStatus {
    state: JobState
    error: string
    submittedBy: string
    submittedAt: string
    completedAt: string
    updatedAt: string
    progress: number
    progressMessage: string
}

export interface IResult {
    output: string
}

export interface IJob {
    id: string
    status: IStatus
    result: IResult
}

interface IProps {
    job: IJob
}

const CANCELABLE = new Set([JobState.SUBMITTED, JobState.PENDING, JobState.RUNNABLE, JobState.STARTING, JobState.RUNNING]);

export const Job = ({job}: IProps) => {
    const cancelSubmittedJob = async () => {
        await API.graphql(graphqlOperation(cancelJob, {jobid: job.id}));
    }
    
    return (
        <li>
            <p>Job: {job.id}</p>
            <p>State: {job.status.state}</p>
            <p>Submitted at: {job.status.submittedAt}</p>
            <p>Last update: {job.status.updatedAt}</p>
            { job.status.state === JobState.RUNNING && <p>Progress: {job.status.progress}: {job.status.progressMessage}</p>}
            { job.status.state === JobState.SUCCEEDED && <p>Result: {JSON.stringify(job.result)}</p>}
            { job.status.state === JobState.FAILED && <p>Error: {job.status.error}</p>}
            { (job.status.state === JobState.SUCCEEDED || job.status.state === JobState.FAILED) && <p>Completed at: {job.status.completedAt}</p>}
            { CANCELABLE.has(job.status.state) && <button onClick={cancelSubmittedJob}>Cancel</button> }
        </li>
    );
}