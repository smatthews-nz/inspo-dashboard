import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/Todos/todosSlice';
import quoteReducer from '../features/Quotes/quoteSlice';


export const store = configureStore({
  reducer: {
    todos: todosReducer,
    quote: quoteReducer
  },
});
