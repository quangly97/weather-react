import React from 'react'
import { useGlobalContext } from '../../context'
import { Sidebar, Spinner, SingleDailyWeather } from '../'
import styles from './DailyWeather.module.css'

const DailyWeather = () => {

    const {dailyWeather} = useGlobalContext();
    const {list, city} = dailyWeather;
    const readings = [];

    if(list){
        readings.push(list[3]);
        readings.push(list[11]);
        readings.push(list[19]);
        readings.push(list[27]);
        readings.push(list[35]);
    }

    if(list && city){
        return (
            <section className={styles.container}>
                <h1>{city.name}, {city.country}</h1>
                <div className={styles.dailyweather}>
                    <Sidebar/>
                    {
                        readings.map((reading, index) => {
                            return <SingleDailyWeather {...reading} key={index}/>
                        })
                    }
                </div>
            </section>
        )
    }else{
        return <Spinner/>
    }
}

export default DailyWeather
