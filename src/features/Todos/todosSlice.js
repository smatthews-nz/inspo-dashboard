import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: action.payload.id,
                todo: action.payload.todo,
                isDone: false,
                isDeleted: false
            })
        },
        deleteTodo: (state, action) => {
            let index = state.todos.findIndex( todo => todo.id === action.payload.id)
            state.todos[index] = {
                ...state.todos[index],
                isDeleted: true
            }
        },
        markTodoDone: (state, action) => {
            let index = state.todos.findIndex( todo => todo.id === action.payload.id)
            state.todos[index] = {
                ...state.todos[index],
                isDone: true
            }
        }
    }
    
})

export const { addTodo, deleteTodo, markTodoDone } = todosSlice.actions;
export default todosSlice.reducer;
export const selectTodos = state => state.todos;