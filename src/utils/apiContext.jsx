import {createContext, useContext, useState} from 'react';


const apiContext = createContext()

export const useApiContext = () => {
    return useContext(apiContext);
}

const ProvideApiContext = ({children}) => {
    const API_KEY = '51ea206c7386defc061b768c148c0b4d';
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    return <apiContext.Provider value={{API_KEY, latitude, setLatitude, longitude, setLongitude}}>
        {children}
    </apiContext.Provider>
}

export default ProvideApiContext