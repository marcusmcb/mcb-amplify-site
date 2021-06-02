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
          <span className='dev-page-title'>Development Projects</span>
        </Row>
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
                <span className='dev-page-button-row'>
                  <Button>
                    <a
                      href='https://www.coinsnapshot.com'
                      target='_blank'
                      rel='noreferrer'
                    >
                      View App
                    </a>
                  </Button>
                  <Button>
                    <a
                      href='https://github.com/marcusmcb/crypto-dashboard'
                      target='_blank'
                      rel='noreferrer'
                    >
                      View Code
                    </a>
                  </Button>
                </span>
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
                <span className='dev-page-button-row'>
                  <Button>
                    <a
                      href='http://www.jspone.com'
                      target='_blank'
                      rel='noreferrer'
                    >
                      View App
                    </a>
                  </Button>
                  <Button>
                    <a
                      href='https://github.com/marcusmcb/JS-Drum-Machine'
                      target='_blank'
                      rel='noreferrer'
                    >
                      View Code
                    </a>
                  </Button>
                </span>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className='g-0 dev-page-row'>
          <Col sm={6}>
            <Card className='dev-page-transparency'>
              <Card.Body className='dev-page-card'>
                <span className='dev-page-card-title'>
                  <p>Eventageous</p>
                </span>
                <p className='dev-page-text'>
                  A social networking app for live event professionals built
                  with the MERN stack and Redux.
                </p>
                <span className='dev-page-button-row'>
                  <Button>
                    <a
                      href='https://mysterious-oasis-22555.herokuapp.com/'
                      target='_blank'
                      rel='noreferrer'
                    >
                      View App
                    </a>
                  </Button>
                  <Button>
                    <a
                      href='https://github.com/marcusmcb/Eventageous'
                      target='_blank'
                      rel='noreferrer'
                    >
                      View Code
                    </a>
                  </Button>
                </span>
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
                  A Python/Flask-based machine learning project where our team @
                  UCI utilized the Yelp API to predict the success of a
                  restaurant based on its category, location and price point
                  using the Radnom Forest methodology.
                </p>
                <span className='dev-page-button-row'>
                  <Button>
                    <a
                      href='https://github.com/hmzskr/Yelp-Api-Machine-Learning-Predictions'
                      target='_blank'
                      rel='noreferrer'
                    >
                      View Code
                    </a>
                  </Button>                  
                </span>
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
