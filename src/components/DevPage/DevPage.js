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
          <span className='dev-page-title'>
            Development Projects / Code Samples
          </span>
        </Row>
        <Row className='g-0'>
          <p className='dev-page-bio'>
            A mix of both front and back end development projects and code
            snippets that I've built or have contributed to recently.
          </p>
        </Row>
        <Row className='g-0'>
          <Col sm={6}>
            <Card className='dev-page-transparency'>
              <Card.Body className='dev-page-card'>
                <span className='dev-page-card-title'>
                  <p>!npChatbot for Serato & Twitch</p>
                </span>
                <p className='dev-page-text'>
                  A chatbot script & app that allows Twitch viewers to interact with a live-streamer's Serato live playlist.
                </p>
                <p className='dev-page-text'>
                  Built with Node, TMI.js, Axios, and Electron.
                </p>
                <span className='dev-page-button-row'>                  
                  <Button variant='outline-light' className='button-color'>
                    <a
                      href='https://github.com/marcusmcb/serato-nowplaying-twitch'
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
                  <p>CrateStats</p>
                </span>
                <p className='dev-page-text'>
                  A playlist analytics and interactive live-streaming tool for DJs.  Built with Node, React, Express, Material UI, and various DVS platforms.
                </p>
                <span className='dev-page-button-row'>
                  <Button variant='outline-light' className='button-color'>
                    <a
                      href='http://www.cratestats.com'
                      target='_blank'
                      rel='noreferrer'
                    >
                      View App
                    </a>
                  </Button>
                  <Button variant='outline-light' className='button-color'>
                    <a
                      href='https://github.com/marcusmcb/crate-stats'
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
                  <p>RemixArkive (Twitter Bot)</p>
                </span>
                <p className='dev-page-text'>
                  An automated bot script built with Node and the Twitter API
                  that tweets out links to rare music.
                </p>
                <span className='dev-page-button-row'>
                  <Button variant='outline-light' className='button-color'>
                    <a
                      href='https://twitter.com/remixarkive'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Twitter Page
                    </a>
                  </Button>
                  <Button variant='outline-light' className='button-color'>
                    <a
                      href='https://github.com/marcusmcb/twit-bot'
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
                  <p>Twitch ChatBot</p>
                </span>
                <p className='dev-page-text'>
                  A bot script to create and manage custom chat commands for
                  Twitch. You can view the command list below and test them in
                  my Twitch channel, also below.
                </p>                
                <p className='dev-page-text'>
                  Built with Node, TMI.js, and the Twitch API.
                </p>                
                <span className='dev-page-button-row'>
                  <Button variant='outline-light' className='button-color'>
                    <a
                      href='https://www.twitch.tv/djmarcusmcb'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Twitch Channel
                    </a>
                  </Button>
                  <Button variant='outline-light' className='button-color'>
                    <a
                      href='https://marcusmcb.github.io/twitch-chat-commands/'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Command List
                    </a>
                  </Button>
                  <Button variant='outline-light' className='button-color'>
                    <a
                      href='https://github.com/marcusmcb/twitch-chat-bot'
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
                  
                </span>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6}>
            <Card className='dev-page-transparency'>
              <Card.Body className='dev-page-card'>
                <span className='dev-page-card-title'>
                  <p>Philips Hue Control Commands for Twitch</p>
                </span>
                <p className='dev-page-text'>
                  A chatbot script that adds interactive lighting control commands to your Twitch channel for your connected Hue devices.
                </p>
                <span className='dev-page-button-row'>                  
                  <Button variant='outline-light' className='button-color'>
                    <a
                      href='https://github.com/marcusmcb/philips-hue-twitch-chat-control'
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
                  A simple, responsive accordion/tabbed-navigation component
                  built with JavaScript and CSS.
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
