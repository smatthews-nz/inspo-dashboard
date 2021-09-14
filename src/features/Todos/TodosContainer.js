import React from 'react';
import './Todos.css';
import { HoriztonalRule } from '../../components/HorizontalRule/HorizontalRule';
import { Todo } from './Todo';


export const TodosContainer = () => {
    return (
        <div className="todos-container">
            <h3>What's on the go?</h3>
            <HoriztonalRule />
            <div className="card-container">
                <Todo />
                <Todo />
                <Todo />
            </div>
        </div>
    )
}