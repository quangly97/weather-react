import React from 'react'
import styles from './WeatherCard.module.css'
import {Spinner, Icon} from '../'


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

    return(
        <div className={styles.weatherCard}>
            <h1 className={styles.Location}>{name}, {sys.country}</h1>
            <h6 className={styles.time}>Retrieved on {toRegularTime(dt)}</h6>
            <Icon weather={weather}/>
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