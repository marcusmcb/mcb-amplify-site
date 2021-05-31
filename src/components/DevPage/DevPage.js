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
        <Row className='g-0 dev-page-body-contents'>
          <Col sm={6} className='dev-page-card'>
            <Card className="devpage-card devpage-card-content-body">
              <Card.Img                
                variant='top'
                src='https://cdn3.iconfinder.com/data/icons/popular-cryptocurrencies-vol-2019-1/80/bnb-binance-cryptocurrency-token-coin-512.png'
              />
              <Card.Body className='devpage-card-body-text-background'>
                <Card.Title>CoinSnapShot</Card.Title>
                <Card.Text>
                  A responsive crypto dashboard app built with React and Amplify
                  with data via the CoinGecko API.
                </Card.Text>
                <span className='devpage-button-row'>
                  <Button className='devpage-button' variant='secondary'>
                    <a
                      href='http://www.coinsnapshot.com'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Visit App
                    </a>
                  </Button>
                  <Button className='devpage-button' variant='secondary'>
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
          <Card className="devpage-card devpage-card-content-body">
              <Card.Img                
                variant='top'
                src='https://cdn3.iconfinder.com/data/icons/popular-cryptocurrencies-vol-2019-1/80/bnb-binance-cryptocurrency-token-coin-512.png'
              />
              <Card.Body className='devpage-card-body-text-background'>
              <Card.Title>JSP-1 (Javascript Sample Player)</Card.Title>
                <Card.Text>
                  A browser-based drum machine with both MIDI/velocity implementation and QWERTY/touch playback built with Javascript and S3.
                </Card.Text>
                <span className='devpage-button-row'>
                  <Button className='devpage-button' variant='secondary'>
                    <a
                      href='http://www.jspone.com'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Visit App
                    </a>
                  </Button>
                  <Button className='devpage-button' variant='secondary'>
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
        <Row className='g-0 dev-page-body-contents'>
          <Col sm={6}>
          <Card className="devpage-card devpage-card-content-body">
              <Card.Img                
                variant='top'
                src='https://cdn3.iconfinder.com/data/icons/popular-cryptocurrencies-vol-2019-1/80/bnb-binance-cryptocurrency-token-coin-512.png'
              />
              <Card.Body className='devpage-card-body-text-background'>
                <Card.Title>Eventageous</Card.Title>
                <Card.Text>
                  A social networking app for event professionals.  Built with the MERN stack, Bootstrap and Redux.
                </Card.Text>
                <span className='devpage-button-row'>
                  <Button className='devpage-button' variant='secondary'>
                    <a
                      href='https://mysterious-oasis-22555.herokuapp.com/'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Visit App
                    </a>
                  </Button>
                  <Button className='devpage-button' variant='secondary'>
                    <a
                      href='https://github.com/marcusmcb/Group-Project-3'
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
          <Card className="devpage-card devpage-card-content-body">
              <Card.Img                
                variant='top'
                src='https://cdn3.iconfinder.com/data/icons/popular-cryptocurrencies-vol-2019-1/80/bnb-binance-cryptocurrency-token-coin-512.png'
              />
              <Card.Body className='devpage-card-body-text-background'>
                <Card.Title>Yelp Machine Learning Project</Card.Title>
                <Card.Text>
                  Group machine learning project where our team @ UCI utilized the Yelp API to predict the success of a restaurant based on its category, location, and price point using the Random Forest methodology.
                </Card.Text>
                <span className='devpage-button-row'>                  
                  <Button className='devpage-button' variant='secondary'>
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
