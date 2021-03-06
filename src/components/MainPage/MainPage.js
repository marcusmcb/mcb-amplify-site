import React from 'react'

import Navbar from '../shared/Navbar'
import PageBody from './PageBody'
import HighLightReel from './HighLightReel'
import Footer from '../shared/Footer'

import './mainpage.css'

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <PageBody />
      <HighLightReel />
      <Footer />
    </div>
  )
}

export default MainPage
