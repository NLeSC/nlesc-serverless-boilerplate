import React from 'react'
import { IJob, Job } from './Job'

interface IProps {
    jobs: IJob[];
}

export const Jobs = ({jobs}: IProps) => {
    return (
        <ol>
            {jobs.map((job) => <Job key={job.id} job={job}/>)}
        </ol>
    )
}