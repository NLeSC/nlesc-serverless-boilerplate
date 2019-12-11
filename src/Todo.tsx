import React from 'react';
import { CreateTodoInput } from './API';
import API, { graphqlOperation } from '@aws-amplify/api';
import { markAsCompleted } from './graphql/mutations';

export type ITodo = CreateTodoInput;

interface IProps {
    todo: ITodo
}

export const Todo = ({ todo }: IProps) => {
    async function complete() {
        await API.graphql(graphqlOperation(markAsCompleted, { todoId: todo.id }));
    }

    return (
        <li key={todo.id!}>
            <p>{todo.name} : {todo.description}
            {todo.completed ?
                'Completed'
                :
                <button onClick={complete}>Incomplete</button>
            }</p>
        </li>
    );
}