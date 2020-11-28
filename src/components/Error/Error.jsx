import React from 'react'
import styles from './Error.module.css'
import { Link } from 'react-router-dom'
import { BsQuestionCircle } from 'react-icons/bs'

const Error = () => {
    return (
        <section>
            <div className={styles.container}>
                <div className={styles.err}>4</div>
                <i className={styles.icon}><BsQuestionCircle/></i>
                <div className={styles.err2}>4</div>
                <div className={styles.msg}>
                    Are you lost? Maybe you entered the wrong link? 
                    <p>Let's go <Link to='/'>home</Link> and try from there.</p>
                </div>
            </div>
        </section>
    )
}

export default Error
