import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import InputLocation from './components/InputLocation';
import { useApiContext } from './utils/apiContext';
import getWindDirection from './utils/windDirection';

function App() {
    const {API_KEY, latitude, longitude, weatherData, setWeatherData} = useApiContext();;

    useEffect(() => {
        if (latitude && longitude) {
          axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
            .then(response => {
                setWeatherData(response.data);
            })
            .catch(error => {
              console.error('Error fetching data: ', error);
            });
        }
    }, [latitude, longitude]);

    return (
        <>
            <h1>Weather API</h1>
            <InputLocation />
            {weatherData && (
                <div className='weather-display'>
                    <h2>Location: {weatherData.name}</h2>
                    <p>Temperature: {weatherData.main.temp ? weatherData.main.temp + '°C' : 'Temperature Unknown'}</p>
                    <p>Humidity: {weatherData.main.humidity ? weatherData.main.humidity + '%' : 'Humidity Unknown'}</p>
                    <p>Description: {weatherData.weather[0].description ? weatherData.weather[0].description : 'No description'}</p>
                    <p>
                        Wind: { 
                        weatherData.wind ? Math.floor(parseFloat(weatherData.wind.speed * 3.6) * 10 / 10) + 'km/h' : 'No data available'} - {weatherData.wind && getWindDirection(weatherData.wind.deg)}
                    </p>
                </div>
            )}
        </>
    );
}

export default App;
