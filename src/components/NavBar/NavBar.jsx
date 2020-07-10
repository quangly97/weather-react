import React from 'react'
import styles from './NavBar.module.css'

const NavBar = () => {
    return(
        <div className={styles.NavBar}>
            <nav>
                <ul className={styles.links}>
                    <li><a href='index.html'>Today</a></li>
                    <li><a href='index.html'>Daily</a></li>
                </ul>
            </nav>
        </div>
    )
} 

export default NavBar