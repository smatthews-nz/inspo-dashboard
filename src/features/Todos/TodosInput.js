import React from 'react';
import { HoriztonalRule } from '../../components/HorizontalRule/HorizontalRule';

export const TodosInput = () => {
    return (
        <div className="todos-container">
            <h2>So what do you want to achieve today?</h2>
            <HoriztonalRule />
            <form>
                <input type="text" placeholder="Enter task here." />
                <button>Add task</button>
            </form>
        </div>

    )
}