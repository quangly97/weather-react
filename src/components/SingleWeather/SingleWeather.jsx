import React from 'react'
import styles from './SingleWeather.module.css'
import { Spinner, WeatherIcon } from '..'
import { useGlobalContext } from '../../context'

const SingleWeather = () => {
    const {loading, error, todayWeather} = useGlobalContext();
    const {name, sys, main, weather, dt} = todayWeather;

    if(loading){
        return <Spinner/>
    }
    
    const kelvinToCelcius = (temp) => {
        return Math.round(temp - 273.15)
    }

    const toRegularTime = (time) => {
        return `${new Date(time*1000)}`.substring(0,24)
    }

    if(error){
        return (
            <div className={styles.alert} role='alert'>Please enter a city and country!</div>
        )
    }

    return(
        <section className={styles['singleweather-container']}>
            <h1>{name}, {sys.country}</h1>
            <h6>Retrieved on {toRegularTime(dt)}</h6>
            <WeatherIcon className={styles.icon} icon={weather[0].icon}/>
            <div className={styles['temperature-reading']}>
                <span id={styles['main-temp']}>
                    <p>{kelvinToCelcius(main.temp)}</p>
                </span>
                <span className={styles['temperature-text']}>
                    <p>&deg;C</p>
                    <p>Feels</p>
                    <p>Like</p>
                </span>
                <span id={styles['feels-like']}>
                    <p>{kelvinToCelcius(main.feels_like)}</p>
                </span>
            </div>
            <h4>{weather[0].description}</h4>
        </section>
    )
}

export default SingleWeather