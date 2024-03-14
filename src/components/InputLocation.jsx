import React, { useState } from 'react';
import axios from 'axios';
import { useApiContext } from '../utils/apiContext';
import LocationList from './LocationList';
import './InputLocation.css';

const InputLocation = () => {
    const {API_KEY, setLatitude, setLongitude, value, setValue, locations, setLocations} = useApiContext();

    const handleSearch = () => {
        setLatitude(null);
        setLongitude(null);

        if (value) {
            axios
                .get(`http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${API_KEY}`)
                .then(function (response) {
                    const locations = response.data;
                    setLocations(locations);
                    console.log(locations)
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        setLocations([])
    };

    return (
        <div className='search-container'>
            <div className='inner-container'>
                <label htmlFor=""></label>
                <input type="text" placeholder="Enter location" value={value} onChange={(event) => setValue(event.target.value)} />
                <button className='search-btn' onClick={handleSearch}>Search</button>
            </div>
            <div>
                {locations.length > 0 ? (
                    <LocationList locations={locations} />
                ) : (
                    <p className="error-message">No locations found.</p>
                )}
            </div>
        </div>
    );
};

export default InputLocation;
