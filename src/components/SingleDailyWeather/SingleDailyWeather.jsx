import React from 'react'
import { WeatherIcon } from '../'
import styles from './SingleDailyWeather.module.css'

const SingleDailyWeather = ({dt, pop, main : {feels_like, temp}, weather, wind : {speed}}) => {
    const kelvinToCelcius = (temp) => {
        return Math.round(temp - 273.15)
    } 

    const time = {
        day : `${new Date(dt*1000)}`.substring(0,3),
        date : `${new Date(dt*1000)}`.substring(4,10)
    };

    const precipitation = Math.round(pop * 100);

    return (
        <div className={styles['singleweather-container']}>   
            <h4>{time.day}</h4>
            <h4>{time.date}</h4>
            <h4>{weather[0].description}</h4>
            <WeatherIcon icon={weather[0].icon}/>
            <h4>{kelvinToCelcius(temp)}&deg;C</h4>
            <h4>{kelvinToCelcius(feels_like)}&deg;C</h4>
            <h4>{precipitation}%</h4>
            <h4>{speed}</h4>
        </div>
    )
}

export default SingleDailyWeather
