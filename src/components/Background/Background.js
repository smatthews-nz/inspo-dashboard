import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImage } from '../../features/BackgroundImage/backgroundImageSlice';
import { selectImage } from '../../features/BackgroundImage/backgroundImageSlice';

export const Background = () => {
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
        <div className="background" onClick={handleClick} style={{backgroundImage: `url(${image.urls.full})`}}>
        </div>
    
      )

  }, [image])
  
  return(
    <div className="background" onClick={handleClick}>
    </div>

  )
}