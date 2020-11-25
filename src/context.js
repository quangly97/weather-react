import React, { useState, useContext, createContext } from 'react'
import axios from 'axios'

const AppContext = createContext();
const API_KEY = '81d59b61ddaf0da3861524f0e5f6e46a'
const URL = 'https://api.openweathermap.org/data/2.5'

const AppProvider = ({children}) => {
    const [todayWeather, setTodayWeather] = useState({});
    const [dailyWeather, setDailyWeather] = useState({})
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('')
    
    const fetchWeather = async (e) => {
        e.preventDefault();
        setLoading(true);

        if(city && country){
            const today = await axios.get(`${URL}/weather?q=${city},${country}&appid=${API_KEY}`);
            const daily = await axios.get(`${URL}/forecast?q=${city},${country}&appid=${API_KEY}`)
            setTodayWeather(today.data);
            setDailyWeather(daily.data)
            setError(false);
            setCity('');
            setCountry('');
        }else{
            setError(true);
        }

        setLoading(false);
    }

    return (
        <AppContext.Provider value={{
            error,
            todayWeather,
            dailyWeather,
            loading,
            city,
            country,
            setCity,
            setCountry,
            fetchWeather,
        }}
        >{children}</AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider }