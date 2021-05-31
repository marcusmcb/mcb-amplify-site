import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import MainPage from './components/MainPage/MainPage'
import FooterPage from './components/FooterPage/FooterPage'

import './App.css'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const routes = (
    <Switch>
      <Route path='/' exact>
        <MainPage />
      </Route>
      <Route path='/footer'>
        <FooterPage />
      </Route>
    </Switch>
  )

  return (
    <Router>
      <div className='App'>{routes}</div>
    </Router>
  )
}

export default App

// FUTURE DEV:

// * move images to S3 bucket
// * component organization
// * remove underscores from fa social icons
// * add padding on fa social icons for browser @max-width

