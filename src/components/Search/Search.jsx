import React from 'react'
import styles from './Search.module.css'

const Search = ({loadWeather, error}) => {
    return(
        <div className={styles.Search}>
            <div>
                {error ?
                    <div className={styles.alert} role='alert'>
                        Please Enter City and Country!
                        </div> :
                    ""}
            </div>
            <form onSubmit={loadWeather}>
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