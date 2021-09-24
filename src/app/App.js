import React from 'react';
import './App.css';
import { Quote } from '../features/Quotes/Qoute';
import { Weather } from '../features/Weather/Weather';
import { TodosInput } from '../features/Todos/TodosInput';
import { TodosContainer } from '../features/Todos/TodosContainer';
import { Background } from '../components/Background/Background';

const App = () => {


  return(
    <div className="App">
        <Background>
        <TodosContainer />
        <TodosInput />
        <Weather />
        <Quote />
        </Background>
    </div>

  )
}
export default App;
