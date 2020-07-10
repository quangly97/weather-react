import React from 'react'
import {WeatherCard, Search, Header, Footer} from './components'
import styles from './App.module.css'
import axios from 'axios'


const API_KEY = '81d59b61ddaf0da3861524f0e5f6e46a'
const url = 'https://api.openweathermap.org/data/2.5'
    
class App extends React.Component{
    state = {
        data: {},
        error: false
    }
    
    fetchData = async (e) => {
        e.preventDefault()

        const city = e.target.elements.city.value
        const country = e.target.elements.country.value

        if(city && country){
            const result = await axios.get(`${url}/weather?q=${city},${country}&appid=${API_KEY}`)
            console.log(result.data)
            this.setState({
                data: result.data,
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
        return (
            <div className={styles.container}>
                <Header/>
                <Search loadWeather={this.fetchData} error={this.state.error}/>
                <WeatherCard data={data}/>
                <Footer/>
            </div>
        )
    }
}

export default App

