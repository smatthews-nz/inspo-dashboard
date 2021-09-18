import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/Todos/todosSlice';
import quoteReducer from '../features/Quotes/quoteSlice';
import weatherReducer from '../features/Weather/weatherSlice';
import backgroundImageReducer from '../features/BackgroundImage/backgroundImageSlice';


export const store = configureStore({
  reducer: {
    todos: todosReducer,
    quote: quoteReducer,
    weather: weatherReducer,
    background: backgroundImageReducer
  },
});
