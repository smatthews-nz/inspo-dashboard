import React from 'react';
import { useSelector } from 'react-redux';
import './Todos.css';
import { HoriztonalRule } from '../../components/HorizontalRule/HorizontalRule';
import { Todo } from './Todo';
import { selectTodos } from './todosSlice';

export const TodosContainer = () => {

    const todos = useSelector(selectTodos);

    return (
        <div className="todos-container">
            <h3>What's on the go?</h3>
            <HoriztonalRule />
            <div className="card-container">
            {todos.todos.map( todo => {
                return (
                    <Todo
                        key={todo.id}
                        id={todo.id} 
                        todo={todo.todo} 
                        isDeleted={todo.isDeleted} 
                        isDone={todo.isDone}
                        />
                )
            })}
            </div>
        </div>
    )
}