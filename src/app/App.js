import React from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { Quote } from '../features/Quotes/Qoute';
import { Weather } from '../features/Weather/Weather';
import { TodosInput } from '../features/Todos/TodosInput';
import { TodosContainer } from '../features/Todos/TodosContainer';
import { Background } from '../components/Background/Background';
import { fetchImage } from '../features/BackgroundImage/backgroundImageSlice';

const App = () => {

  const dispatch = useDispatch()

  const handleClick = (e) => { 
    console.log(e.target)
    if(e.target.classList.contains('background-container')){
      dispatch(fetchImage())
    }
  }

  return(
    <div className="App" onClick={handleClick}>
        <div className="background-container">
        <Background />
        <TodosContainer />
        <TodosInput />
        <Weather />
        <Quote />
        </div>
    </div>

  )
}
export default App;
