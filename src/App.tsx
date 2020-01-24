import React, { useState, useEffect } from 'react';
import API, { graphqlOperation } from '@aws-amplify/api';
import Auth from '@aws-amplify/auth';
import PubSub from '@aws-amplify/pubsub';
import { withAuthenticator } from 'aws-amplify-react'

import { createTodo } from './graphql/mutations';
import awsconfig from './aws-exports';

import './App.css';

import { listTodos } from './graphql/queries';
import { ITodo, Todo } from './Todo';
import { JobDescriptions } from './JobDescriptions';

// Configure Amplify
Auth.configure(awsconfig);
API.configure(awsconfig);
PubSub.configure(awsconfig);

async function createNewTodo() {
  const todo = { name: "Use AWS AppSync", description: "Realtime and Offline" };
  await API.graphql(graphqlOperation(createTodo, { input: todo }));
}

async function getTodos() {
  return await API.graphql(graphqlOperation(listTodos));
}

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    async function getData() {
      const result = await getTodos() as any;
      setTodos(result.data.listTodos.items);
    };
    getData();
  }, []);
  return (
    <div className="App">
      <button onClick={createNewTodo}>Add Todo</button>
      <ul>
        {todos.length > 0 ?
          todos.map((todo) => <Todo key={todo.id!} todo={todo} />) :
          <p>Add some todos!</p>
        }
      </ul>
      <div>
        <h2>Jobs adminstration</h2>
        <JobDescriptions />
      </div>
    </div>
  );
}

export default withAuthenticator(App, true);
