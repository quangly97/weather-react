import React from 'react'
import styles from './Sidebar.module.css'

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <h4>Feels like</h4>
            <h4>POP</h4>
            <h4>Wind</h4>
            <h4>(km/h)</h4>
        </aside>
    )
}

export default Sidebar
