import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImage } from '../../features/BackgroundImage/backgroundImageSlice';
import { selectImage } from '../../features/BackgroundImage/backgroundImageSlice';

export const Background = () => {
  const image = useSelector(selectImage);
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  
  const getImage = async () => {
   await dispatch(fetchImage())
    setIsLoaded(true)
  }

  useEffect(() => {
    getImage()
  }, [isLoaded])


  if(isLoaded === false){
    return(
      <div className="background">
      </div>
    )
  } else {
    return(
      <div className="background">
        {isLoaded && <img src={image.image.urls.raw} alt="Background" id="background-img"/>}
      </div>
    )
  }
}