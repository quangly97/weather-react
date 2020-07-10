import React from 'react'
import spinner from './spinner.gif'
import styles from './Spinner.module.css'

const Spinner = () => {
    return(
        <div className={styles.Spinner}>
            <img src={spinner} alt='loading' />
        </div>
    )
}

export default Spinner