import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather, selectWeather } from './weatherSlice';

export const Weather = () => {

    const dispatch = useDispatch();
    const weather = useSelector(selectWeather);
    const [text, setText] = useState('');
    const [locationSuccess, setLocationSuccess] = useState();
    const iconUrl = 'http://openweathermap.org/img/wn/'

    const getLocation = () => {
        navigator.geolocation.getCurrentPosition(handleSuccess, handleFailure);
    }

    //success handler for getLocation
    const handleSuccess = (location) => {
        setLocationSuccess(true);
        let lat = location.coords.latitude;
        let lon = location.coords.longitude;
        dispatch(fetchWeather({lat, lon}));
    }

    const handleFailure = () => {
        setLocationSuccess(false);
        setText("Location access denied. Cannot fetch weather.");
    }


    //pop call to getLocation into a useEffect call as we want to do this once when the component loads
    useEffect(() => {
        getLocation();
    }, [text])


    if(locationSuccess === false){
        return (
            <div className="weather-container">
                <h2>What's the weather <br/> like today?</h2>
                <h3>{text}</h3>
            </div>
        )
    } else {
        return (
            <div className="weather-container">
                <h2>What's the weather <br/> like today?</h2>
                <div className="forecast">
                <img src={`${iconUrl}${weather.weather.icon}@2x.png`} alt="weather icon"/>
                <h2>{weather.weather.max}°C Hi / {weather.weather.min}°C Lo</h2>
                <h3>{weather.weather.description}</h3>
                </div>
            </div>
        )
    }

    
}