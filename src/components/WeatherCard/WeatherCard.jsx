import React from 'react'
import styles from './WeatherCard.module.css'
import {Spinner} from '../'
import 'weather-icons/css/weather-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const WeatherCard = ({data: {name, sys, main, weather, dt}}) =>{
    if(!main){
        return <Spinner/>
    }
    
    const kelvinToCelcius = temp => {
        return Math.round(temp - 273.15)
    }

    const toRegularTime = time => {
        return `${new Date(time * 1000)}`
    }

    const getWeatherIcon = id => {
        if (id >= 200 && id < 232){
            return 'w-thunderstorm'
        } else if (id >= 300 && id <= 321){
            return 'wi-sleet'
        } else if (id >= 500 && id <= 521){
            return 'wi-storm-showers'
        } else if (id >= 600 && id <= 622){
            return 'wi-snow'
        } else if (id >= 701 && id <= 781){
            return 'wi-fog'
        } else if (id === 800){
            return 'wi-day-sunny'
        } else{
            return 'wi-day-fog'
        }
    }

    return(
        <div className={styles.weatherCard}>
            <h1 className={styles.location}>{name}, {sys.country} Weather</h1>
            <h6 className={styles.time}>Updated on {toRegularTime(dt)}</h6>
            <i className={`wi ${getWeatherIcon(weather[0].id)} display-1`}></i>
            <div className={styles.temp}>
                <div className={styles.currTemp}>
                    <h1>{kelvinToCelcius(main.temp)}</h1>
                </div>
                <div>
                    <p className={styles.celcius}>
                        &deg;C
                    </p>
                    <p className={styles.tempText}>
                        feels<br/>like
                    </p>
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