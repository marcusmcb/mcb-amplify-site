import React from 'react'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'

import './devpage.css'
import { Row, Col, Card, Button } from 'react-bootstrap'

const DevPage = () => {
  return (
    <div>
      <Navbar />
      <div className='dev-page-body'>
        <Row className='g-0'>
          <Col sm={6}>
            <Card className='dev-page-transparency'>
              <Card.Body className='dev-page-card'>
                <span className='dev-page-card-title'>
                  <p>CoinSnapShot</p>
                </span>
                <p className='dev-page-text'>
                  A responsive, mobile-first crypto dashboard app built with
                  React and Amplify.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6}>
            <Card className='dev-page-transparency'>
              <Card.Body className='dev-page-card'>
                <span className='dev-page-card-title'>
                  <p>JSP-1 (Javascript Sample Player)</p>
                </span>
                <p className='dev-page-text'>
                  A browser-based drum machine app featuring MIDI/velocity
                  implementation built with Javascript.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className='g-0'>
          <Col sm={6}>
            <Card className='dev-page-transparency'>
              <Card.Body className='dev-page-card'>
                <span className='dev-page-card-title'>
                  <p>Eventageous</p>
                </span>
                <p className='dev-page-text'>
                  A social networking app for live event professionals built with the MERN stack and Redux.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6}>
            <Card className='dev-page-transparency'>
              <Card.Body className='dev-page-card'>
                <span className='dev-page-card-title'>
                  <p>Yelp Machine Learning Project</p>
                </span>
                <p className='dev-page-text'>
                  A Python/Flask-based machine learning project where our team @ UCI utilized the Yelp API to predict the success of a restaurant based on its category, location and price point using the Radnom Forest methodology.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  )
}

export default DevPage
