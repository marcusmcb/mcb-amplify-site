import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import MainPage from './components/MainPage/MainPage'
import FooterPage from './components/FooterPage/FooterPage'
import DevPage from './components/DevPage/DevPage'
import RadioPage from './components/RadioPage/RadioPage'
import ContactPage from './components/ContactPage/ContactPage'

import './App.css'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {

  // define page routes
  const routes = (
    <Switch>
      <Route path='/' exact>
        <MainPage />
      </Route>
      <Route path='/footer'>
        <FooterPage />
      </Route>
      <Route path='/dev'>
        <DevPage/>
      </Route>
      <Route path='/radio'>
        <RadioPage/>
      </Route>
      <Route path='/contact'>
        <ContactPage/>
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
// * fix arrow spacing issue in footer page
// * replace favicon with transparent logo bg
// * text in contact page box expands beyond backing card on smaller viewports

