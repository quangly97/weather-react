import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../../image/logo.png'

const Navbar = () => {
    return(
        <nav className={styles.nav}>
            <div className={styles['nav-center']}>
                <Link to='/'>
                    <img src={logo} alt="logo"/>
                </Link>
                <div>
                    <p>Weather</p>
                    <p>Predictor</p>
                </div>
            </div>
            <ul className={styles['nav-links']}>
                <li>
                    <Link to='/'>Today</Link>
                </li>
                <li>
                    <Link to='/daily'>Daily</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar