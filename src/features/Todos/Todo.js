import React from "react";
import { useDispatch } from "react-redux";
import './Todo.css'
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { deleteTodo, markTodoDone } from "./todosSlice";

export const Todo = (props) => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTodo({id: props.id}))
    }

    const handleDone = () => {
        dispatch(markTodoDone({id: props.id}))
    }
    //logic to set card class based on todo status
    let cardClass;
    if(props.isDeleted === true) {
        cardClass = "todo-card deleted"
    } else if (props.isDone === true){
       cardClass = "todo-card done"
    } else {
        cardClass = "todo-card"
    }




    //render our card
    return (
        <div className={cardClass}>
            <h4>{props.todo}</h4>
            <div className="button-container">
                {props.isDone ? "" : <button className={`todo-done`} onClick={handleDone}><CheckBoxOutlinedIcon /> Done</button>} 
                <button className="todo-delete" onClick={handleDelete}><DeleteOutlinedIcon /> Remove</button>
            </div>
        </div>
    )
}