import React from 'react'
import styles from './Search.module.css'

const error = () => {
    return (
        <div className="styles.alert" role='alert'>
            Please Enter City and Country..!
        </div>
    )
}

const Search = ({loadWeather, error}) => {
    return(
        <div className={styles.Search}>
            <form onSubmit={loadWeather}>
                <div>
                    {error ?
                        error() : ""}
                </div>
                <div>
                    <input 
                        type='text'
                        name='city'
                        placeholder='City ex.Toronto'
                        autoComplete='off'
                    >
                    </input>
                </div>
                <div>
                    <input
                        type='text'
                        name='country'
                        placeholder='Country ex.CA'
                        autoComplete='off'
                    >
                    </input>
                </div>
                <div>
                    <button>Search</button>
                </div>
            </form>
        </div>
    )
}

export default Search