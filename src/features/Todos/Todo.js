import React from "react";
import './Todo.css'
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

export const Todo = () => {
    return (
        <div className="todo-card">
            <h4>Task description here</h4>
            <div className="button-container">
                <button className="todo-done"><CheckBoxOutlinedIcon /> Done</button> 
                <button className="todo-delete"><DeleteOutlinedIcon /> Delete</button>
            </div>
        </div>
    )
}