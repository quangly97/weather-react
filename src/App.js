import React from 'react'
import {Header, Search, WeatherCard, Footer} from './components'
import axios from 'axios'
import styles from './App.module.css'

const API_KEY = '81d59b61ddaf0da3861524f0e5f6e46a'
const URL = 'https://api.openweathermap.org/data/2.5'

class App extends React.Component{
    state = {
        data: {},
        error: false
    }
    
    fetchWeather = async (e) => {
        e.preventDefault()

        const city = e.target.elements.city.value
        const country = e.target.elements.country.value
        

        if(city && country){
            const weather = await axios.get(`${URL}/weather?q=${city},${country}&appid=${API_KEY}`)
            this.setState({
                data: weather.data,
                error: false
            })
        }else{
            this.setState({
                error: true
            })
        }
    }

    render(){
        const {data} = this.state
        const {error} = this.state

        return(
            <div className={styles.container}>
                <Header />
                <Search fetchWeather={this.fetchWeather} error={error}/>
                <WeatherCard data={data}/>
                <Footer/>
            </div>
        )
    }
}

export default App