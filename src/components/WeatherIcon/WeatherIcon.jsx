import React from 'react'
import 'weather-icons/css/weather-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const WeatherIcon = ({icon}) => {
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

    return (
        <i className={`wi wi-${getIcon(icon)} display-1`}></i>
    )
}

export default WeatherIcon;