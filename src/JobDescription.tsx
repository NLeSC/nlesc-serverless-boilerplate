import React from 'react';
import API, { graphqlOperation } from '@aws-amplify/api';
import { submitJob } from './graphql/mutations';
import { Jobs } from './Jobs';
import { IJob } from './Job';

export interface IJobDescription {
    id: string
    payload: {
        count: number
    }
    jobs: {
        items: IJob[]
    }
}
interface IProps {
    description: IJobDescription
}

const border = {
    border: 'solid'
}

export const JobDescription = ({ description }: IProps) => {
    async function submit() {
        await API.graphql(graphqlOperation(submitJob, { jobdescriptionid: description.id }));
    }

    return (
        <li style={border}>
            <p>ID: {description.id}</p>
            <p>Payload: {JSON.stringify(description.payload)}
            </p>
            <button onClick={submit}>Submit</button>
            <div>
                <h2>Jobs</h2>
                <Jobs jobs={description.jobs.items} />
            </div>
        </li>
    );
}