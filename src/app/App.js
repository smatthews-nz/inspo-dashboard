import React from 'react';
import './App.css';
import { Quote } from '../features/Quotes/Qoute';
import { Weather } from '../features/Weather/Weather';
import { TodosInput } from '../features/Todos/TodosInput';

//EVENTUALLY WE'LL PULL THE backgroundImageSlice selector in here, and grab the backround from state;

const App = () => {
  return(
    <div className="App">
        <TodosInput />
        <Weather />
        <Quote />
    </div>

  )
}
export default App;
