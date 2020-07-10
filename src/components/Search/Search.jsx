import React from 'react'
import styles from './Search.module.css'

const Search = ({fetchWeather, error}) => {
    return(
        <div className={styles.Search}>
            <div>
                {
                    error ?
                        <div classname={styles.alert} role='alert'>
                            Please enter a City and Country!
                    </div> :
                        ""
                }
            </div>
            <form onSubmit={fetchWeather}>
                <div>
                    <input
                        type='text'
                        placeholder='City ex.Toronto'
                        name='city'
                        autoComplete='off'
                    />
                </div>
                <div>
                    <input
                        type='text'
                        placeholder='Country ex.CA'
                        name='country'
                        autoComplete='off'
                    />
                </div>
                <div>
                    <button>
                        Search
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Search