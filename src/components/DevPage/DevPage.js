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
          <span className='dev-page-title'>Development Projects / Code Samples</span>
        </Row>
        <Row className='g-0'>
          <p className='dev-page-bio'>
            A mix of both front and back end development projects and code snippets that I've
            built or have contributed to recently.
          </p>
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
                  <Button variant='outline-light' className='button-color'>
                    <a
                      href='https://www.coinsnapshot.com'
                      target='_blank'
                      rel='noreferrer'
                    >
                      View App
                    </a>
                  </Button>
                  <Button variant='outline-light' className='button-color'>
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
                  <Button variant='outline-light' className='button-color'>
                    <a
                      href='http://www.jspone.com'
                      target='_blank'
                      rel='noreferrer'
                    >
                      View App
                    </a>
                  </Button>
                  <Button variant='outline-light' className='button-color'>
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
                  <Button variant='outline-light' className='button-color'>
                    <a
                      href='https://mysterious-oasis-22555.herokuapp.com/'
                      target='_blank'
                      rel='noreferrer'
                    >
                      View App
                    </a>
                  </Button>
                  <Button variant='outline-light' className='button-color'>
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
                  <Button variant='outline-light' className='button-color'>
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
        
        <Row className='g-0 dev-page-row'>
          <Col sm={6}>
            <Card className='dev-page-transparency'>
              <Card.Body className='dev-page-card'>
                <span className='dev-page-card-title'>
                  <p>US Rental Pricing Analysis</p>
                </span>
                <p className='dev-page-text'>
                  A UCI data science project where our team utilized Python to
                  collect, clean, and present data regarding rental pricing
                  trends between 2010-2018.
                </p>
                <span className='dev-page-button-row'>
                  <Button variant='outline-light' className='button-color'>
                    <a
                      href='https://drive.google.com/open?id=1sTXkgYq3ZMBJnhmSbzQk7MNvmdPXCO9X'
                      target='_blank'
                      rel='noreferrer'
                    >
                      View Slides
                    </a>
                  </Button>
                  <Button variant='outline-light' className='button-color'>
                    <a
                      href='https://github.com/marcusmcb/group-project-1'
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
                  <p>MCB Archives</p>
                </span>
                <p className='dev-page-text'>
                  A personal archive/media site that I'm currently developing
                  for my broadcast/remix production work. Built with React,
                  Amplify, GraphQL, and Material UI.
                </p>
                <span className='dev-page-button-row'>
                  <Button variant='outline-light' className='button-color'>
                    <a
                      href='https://github.com/marcusmcb/mcb-archives'
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
                  <p>Responsive Accordion</p>
                </span>
                <p className='dev-page-text'>
                  A simple, responsive accordion/tabbed-navigation component built with JavaScript and CSS.
                </p>
                <span className='dev-page-button-row'>
                  <Button variant='outline-light' className='button-color'>
                    <a
                      href='https://marcusmcb.github.io/responsive-accordion/'
                      target='_blank'
                      rel='noreferrer'
                    >
                      View Component
                    </a>
                  </Button>
                  <Button variant='outline-light' className='button-color'>
                    <a
                      href='https://github.com/marcusmcb/responsive-accordion'
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
                  <p>React List Component</p>
                </span>
                <p className='dev-page-text'>
                  A simple, list/to-do component built with React.
                </p>
                <span className='dev-page-button-row'>
                  <Button variant='outline-light' className='button-color'>
                    <a
                      href='https://master.dyh95hp9y2xj.amplifyapp.com/'
                      target='_blank'
                      rel='noreferrer'
                    >
                      View Component
                    </a>
                  </Button>
                  <Button variant='outline-light' className='button-color'>
                    <a
                      href='https://github.com/marcusmcb/react-form-component'
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
