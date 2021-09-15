//import external packages
import React, { useState } from 'react';
import ControlPointOutlinedIcon from '@material-ui/icons/ControlPointOutlined';
import {v4 as uuidv4} from 'uuid';
import { useDispatch } from 'react-redux';
//internal files
import { addTodo } from './todosSlice';
import { HoriztonalRule } from '../../components/HorizontalRule/HorizontalRule';
import './Todos.css';

export const TodosInput = () => {

    const [ todo, setTodo ] = useState('');
    const dispatch = useDispatch();

    const handleTodoChange = (e) => {
        setTodo(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = uuidv4()
        //here we'll dispatch our action to add a todo to our redux store.
        dispatch(addTodo({
                id: id,
                todo: todo
            })
        )
        setTodo('');
    }

    return (
        <div className="todos-input-container">
            <h2>So what do you want to achieve today?</h2>
            <HoriztonalRule />
            <form>
                <input className="todo-input" type="text" placeholder="Enter task here." value={todo} onChange={handleTodoChange}/>
                <button className="todo-add-button" onClick={handleSubmit}><ControlPointOutlinedIcon />  Add Task</button>
            </form>
        </div>

    )
}