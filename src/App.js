import React from 'react'
import { Navbar, SearchForm } from './components'
import { Today, Daily, Error } from './pages'
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
                        <Today/>
                    </Route>
                    <Route path='/daily'>
                        <Daily/>
                    </Route>
                    <Route path='*'>
                        <Error/>
                    </Route>
                </Switch>
            </Router>
        </main>
    )
}

export default App