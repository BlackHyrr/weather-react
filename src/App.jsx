import React from 'react';
import './App.css';
import InputLocation from './components/InputLocation';
import WeatherDisplay from './components/WeatherDisplay';

function App() {

    return (
        <>
            <h1>Weather API</h1>
            <InputLocation />
            <WeatherDisplay />
        </>
    );
}

export default App;
