import React from 'react';
import './Todos.css';
import { HoriztonalRule } from '../../components/HorizontalRule/HorizontalRule';
import ControlPointOutlinedIcon from '@material-ui/icons/ControlPointOutlined';

export const TodosInput = () => {
    return (
        <div className="todos-input-container">
            <h2>So what do you want to achieve today?</h2>
            <HoriztonalRule />
            <form>
                <input class="todo-input" type="text" placeholder="Enter task here." />
                <button class="todo-add-button"><ControlPointOutlinedIcon />  Add Task</button>
            </form>
        </div>

    )
}