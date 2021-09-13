import React from 'react';
import rainCloud from './raincloud.png'

export const Weather = () => {
     
    return (
        <div className="weather-container">
            <h2>What's the weather <br/> like today?</h2>
            <div className="forecast">
            <img src={rainCloud} alt="raincloud"/>
            <h2>7°C Hi / 3°C Lo</h2>
            <h3>Showers and Thunderstorms</h3>
            </div>
        </div>
    )
}