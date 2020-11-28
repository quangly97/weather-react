import React from 'react'
import { Navbar, SearchForm } from './components'
import { TodayPage, DailyPage, ErrorPage } from './pages'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styles from './App.module.css'

const App = () => {
    return(
        <main className={styles.container}>
            <Router>
                <Navbar/>
                <SearchForm/>
                <Switch>
                    <Route exact path='/'>
                        <TodayPage/>
                    </Route>
                    <Route path='/daily'>
                        <DailyPage/>
                    </Route>
                    <Route path='*'>
                        <ErrorPage/>
                    </Route>
                </Switch>
            </Router>
        </main>
    )
}

export default App