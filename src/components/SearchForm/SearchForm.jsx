import React, { useRef, useEffect } from 'react'
import { useGlobalContext } from '../../context'
import styles from './SearchForm.module.css'

const SearchForm = () => {
    const {fetchWeather, city, country, setCity, setCountry} = useGlobalContext();
    const cityValue = useRef('')
    const countryValue = useRef('')

    useEffect(() => {
        cityValue.current.focus();
    }, [])

    const changeCity = () => {
        setCity(cityValue.current.value)
    }

    const changeCountry = () => {
        setCountry(countryValue.current.value)
    }

    return(
        <form className={styles['search-form']} onSubmit={fetchWeather}>
            <div className={styles['form-control']}>
                <label htmlFor="city">City:</label>
                <input
                    type='text'
                    name='city'
                    id='city'
                    ref={cityValue}
                    value={city}
                    autoComplete='off'
                    onChange={changeCity}
                />
                <label htmlFor="country">Country:</label>
                <input
                    type='text'
                    name='country'
                    id='country'
                    ref={countryValue}
                    value={country}
                    autoComplete='off'
                    onChange={changeCountry}
                />
                <div className={styles.buttonholder}>
                    <button>Search</button>
                </div>
            </div>
        </form>
    )
}

export default SearchForm