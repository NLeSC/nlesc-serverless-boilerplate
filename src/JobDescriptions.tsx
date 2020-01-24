import React, { useState, useEffect } from 'react';
import API, { graphqlOperation } from '@aws-amplify/api';

import { createJobDescription } from './graphql/mutations';
import { JobDescription, IJobDescription } from './JobDescription';

const listJobDescriptions = `query ListJobDescriptions(
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
          }
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


async function getJobDescriptions() {
    return await API.graphql(graphqlOperation(listJobDescriptions));
}

export const JobDescriptions = () => {
    const [descriptions, setDescriptions] = useState<IJobDescription[]>([]);

    async function createNewJobDescription() {
        const description = { payload: { count: 42}};
        await API.graphql(graphqlOperation(createJobDescription, { input: description }));
    }

    useEffect(() => {
        async function getData() {
            const result = await getJobDescriptions() as any;
            setDescriptions(result.data.listJobDescriptions.items);
        };
        getData();
    }, []);

    return (
        <div>
            <h2>Descriptions</h2>
            <button onClick={createNewJobDescription}>Add Description</button>
            <ol>
                { descriptions.map((description) => <JobDescription key={description.id!} description={description} />) }
            </ol>
        </div>
    );
}