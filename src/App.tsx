import React from 'react';
import API, { graphqlOperation } from '@aws-amplify/api';
import Auth from '@aws-amplify/auth';
import PubSub from '@aws-amplify/pubsub';
import { withAuthenticator } from 'aws-amplify-react'

import { createTodo } from './graphql/mutations';
import awsconfig from './aws-exports';

import './App.css';

// Configure Amplify
Auth.configure(awsconfig);
API.configure(awsconfig);
PubSub.configure(awsconfig);

async function createNewTodo() {
  const todo = { name: "Use AWS AppSync" , description: "Realtime and Offline" };
  await API.graphql(graphqlOperation(createTodo, { input: todo }));
}

function App() {
  return (
    <div className="App">
      <button onClick={createNewTodo}>Add Todo</button>
    </div>
  );
}

export default withAuthenticator(App, true);
