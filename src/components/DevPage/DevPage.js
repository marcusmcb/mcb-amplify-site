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
            <Card className="devpage-card">
              <Card.Img                
                variant='top'
                src='https://cdn3.iconfinder.com/data/icons/popular-cryptocurrencies-vol-2019-1/80/bnb-binance-cryptocurrency-token-coin-512.png'
              />
              <Card.Body>
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
                      Visit App
                    </a>
                  </Button>
                </span>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6}>
          <Card className="devpage-card">
              <Card.Img                
                variant='top'
                src='https://cdn3.iconfinder.com/data/icons/popular-cryptocurrencies-vol-2019-1/80/bnb-binance-cryptocurrency-token-coin-512.png'
              />
              <Card.Body>
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
                      Visit App
                    </a>
                  </Button>
                </span>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className='g-0 dev-page-body-contents'>
          <Col sm={6}>
          <Card className="devpage-card">
              <Card.Img                
                variant='top'
                src='https://cdn3.iconfinder.com/data/icons/popular-cryptocurrencies-vol-2019-1/80/bnb-binance-cryptocurrency-token-coin-512.png'
              />
              <Card.Body>
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
                      Visit App
                    </a>
                  </Button>
                </span>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6}>
          <Card className="devpage-card">
              <Card.Img                
                variant='top'
                src='https://cdn3.iconfinder.com/data/icons/popular-cryptocurrencies-vol-2019-1/80/bnb-binance-cryptocurrency-token-coin-512.png'
              />
              <Card.Body>
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
                      Visit App
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
