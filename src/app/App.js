import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImage } from '../features/BackgroundImage/backgroundImageSlice';
import { selectImage } from '../features/BackgroundImage/backgroundImageSlice';
import './App.css';
import { Quote } from '../features/Quotes/Qoute';
import { Weather } from '../features/Weather/Weather';
import { TodosInput } from '../features/Todos/TodosInput';
import { TodosContainer } from '../features/Todos/TodosContainer';

const App = () => {

  const dispatch = useDispatch();

  const getImage = async () => {
    let fetchedImage = await dispatch(fetchImage())
    return fetchedImage;
  }

  getImage();
  const image = useSelector(selectImage);
  console.log(image);

  const handleClick = (e) => { 
    if(e.target.classList.contains('App')){
      console.log('clicked!')
      dispatch(fetchImage())
    }
  }

  useEffect(() => {
    console.log(image);

    return(
      <div className="App" onClick={handleClick} style={{backgroundImage: `url(${image.urls.full})`}}>
          <TodosContainer />
          <TodosInput />
          <Weather />
          <Quote />
      </div>
  
    )
  }, [])

  return(
    <div className="App" onClick={handleClick}>
        <TodosContainer />
        <TodosInput />
        <Weather />
        <Quote />
    </div>

  )
}
export default App;
