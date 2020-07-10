import React from 'react'
import styles from './WeatherCard.module.css'
import {Spinner} from '../'
import 'weather-icons/css/weather-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const WeatherCard = ({data : {name, sys, main, weather, dt}}) => {
    if(!main){
        return <Spinner/>
    }
    
    const kelvinToCelcius = temp => {
        return Math.round(temp - 273.15)
    }

    const toRegularTime = time => {
        return `${new Date(time*1000)}`
    }

    const getIcon = icon => {
        if(icon === '01d'){
            return 'day-sunny'
        } else if (icon === '01n'){
            return 'night-clear'
        } else if (icon === '02d') {
            return 'day-cloudy'
        } else if (icon === '02n') {
            return 'night-partly-cloudy'
        } else if (icon === '03d') {
            return 'day-cloudy'
        } else if (icon === '03n') {
            return 'night-cloudy'
        } else if (icon === '04d') {
            return 'day-cloudy-high'
        } else if (icon === '04n') {
            return 'night-cloudy-high'
        } else if (icon === '09d') {
            return 'day-showers'
        } else if (icon === '09n') {
            return 'night-showers'
        } else if (icon === '10d') {
            return 'day-rain'
        } else if (icon === '10n') {
            return 'night-rain'
        } else if (icon === '11d') {
            return 'day-thunderstorm'
        } else if (icon === '11n') {
            return 'night-thunderstorm'
        } else if (icon === '13d') {
            return 'day-snow'
        } else if (icon === '13n') {
            return  'night-snow'
        } else if (icon === '50d') {
            return 'day-fog'
        } else {
            return 'night-fog'
        }
    }

    return(
        <div className={styles.weatherCard}>
            <h1 className={styles.Location}>{name}, {sys.country}</h1>
            <h6 className={styles.time}>Retrieved on {toRegularTime(dt)}</h6>
            <i className={`wi wi-${getIcon(weather[0].icon)} display-1`}></i>
            <div className={styles.temp}>
                <div className={styles.currTemp}>
                    <h1>{kelvinToCelcius(main.temp)}</h1>
                </div>
                <div>
                    <p className={styles.celcius}>&deg;C</p>
                    <p className={styles.tempText}>Feels</p>
                    <p className={styles.tempText}>Like</p>
                </div>
                <div className={styles.feelsLikeTemp}>
                    <h3>{kelvinToCelcius(main.feels_like)}</h3>
                </div>
            </div>
            <h4 className={styles.description}>{weather[0].description}</h4>
        </div>
    )
}

export default WeatherCard