import React from 'react'
import styles from './Header.module.css'
import logo from '../../image/logo.png'
import {NavBar} from '../'

const Header = () => {
    return(
        <div className={styles.Header}>
            <div className={styles.logo}>
                <a href='#'>
                    <img className={styles.logoImage} src={logo} alt='' />
                    <div className={styles.logoText}>Quang's Weather Network</div>
                </a>
            </div>
            <NavBar/>
        </div>
    )
}

export default Header