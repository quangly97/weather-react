import React from 'react'
import spinner from './spinner.gif'
import styles from './Spinner.module.css'

const Spinner = () => {
    return(
        <div className={styles.spinner}>
            <img src={spinner} alt='spinner-icon' />
        </div>
    )
}

export default Spinner