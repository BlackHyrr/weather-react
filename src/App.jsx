import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import InputLocation from './components/InputLocation';
import { useApiContext } from './utils/apiContext';

function App() {
    const {latitude, longitude} = useApiContext();
    const [weatherData, setWeatherData] = useState(null);
    const {API_KEY} = useApiContext();

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
            {console.log(weatherData)}
            <InputLocation />
            <div className='weather-display'>
                {weatherData && (
                    <div>
                        <h2>Location: {weatherData.name}</h2>
                        <p>Temperature: {weatherData.main.temp ? weatherData.main.temp + '°C' : 'Temperature Unknown'}</p>
                        <p>Humidity: {weatherData.main.humidity ? weatherData.main.humidity + '%' : 'Humidity Unknown'}</p>
                        <p>Description: {weatherData.weather[0].description ? weatherData.weather[0].description : 'No description'}</p>
                    </div>
                )}
            </div>
        </>
    );
}

export default App;
