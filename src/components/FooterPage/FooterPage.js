import React from 'react'
import { Row, Card } from 'react-bootstrap'

import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'

import './footerpage.css'

const FooterPage = () => {
  return (
    <div className='footer-page'>
      <Navbar />
      <Row className='footer-page-body g-0'>
        <Card.Body>
          <h1 className='footer-page-title'>About This Site</h1>
          <div  className='footer-page-text'>
            <p>
              Built with React and Amplify (and a boat-load of
              custom CSS).
            </p>
            <p>
                Mobile-first responsive design tested in iOS, Chrome and Safari.
            </p>
          </div>
        </Card.Body>
      </Row>
      <Footer />
    </div>
  )
}

export default FooterPage
