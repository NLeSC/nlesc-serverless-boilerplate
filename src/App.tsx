import React, { useState, useEffect } from 'react';
import API, { graphqlOperation } from '@aws-amplify/api';
import Auth from '@aws-amplify/auth';
import PubSub from '@aws-amplify/pubsub';
import { withAuthenticator } from 'aws-amplify-react'

import { createTodo } from './graphql/mutations';
import awsconfig from './aws-exports';

import './App.css';
import { CreateTodoInput } from './API';
import { listTodos } from './graphql/queries';

// Configure Amplify
Auth.configure(awsconfig);
API.configure(awsconfig);
PubSub.configure(awsconfig);

type Todo = CreateTodoInput;

async function createNewTodo() {
  const todo = { name: "Use AWS AppSync", description: "Realtime and Offline", completed: false };
  await API.graphql(graphqlOperation(createTodo, { input: todo }));
}

async function getTodos() {
  return await API.graphql(graphqlOperation(listTodos));
}


function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

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
      <div>
        {todos.length > 0 ?
          todos.map((todo) => <p key={todo.id!}>{todo.name} : {todo.description} {todo.completed ? 'Completed': 'Incomplete'}</p>) :
          <p>Add some todos!</p>
        }
      </div>
    </div>
  );
}

export default withAuthenticator(App, true);
