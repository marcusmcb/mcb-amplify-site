import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'

import './radiopage.css'

const RadioPage = () => {
  return (
    <div>
      <Navbar />
      <div className='radio-page-body'>
        <Row className='g-0'>
          <span className='radio-page-title'>Radio/Production Projects</span>
        </Row>

        <Row className='g-0'>
          <Col sm={4}>
            <Card className='radio-page-transparency'>
              <Card.Body className='radio-page-card'>
                <span className='radio-page-card-title'>
                  <p>RadioMixes</p>
                </span>
                <p className='about-this-page-text'>
                  A series of syndicated radio mixshows airing on commercial FM
                  stations across North America. I'm the current producer,
                  programmer and product manager for the Hot AC, Dance,
                  Rhythmic, Retro and Old School series as well as seasonal
                  production work throughout the year.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className='radio-page-transparency'>
              <Card.Body className='radio-page-card'>
                <span className='radio-page-card-title'>
                  <p>ClubJam on iHeartRadio</p>
                </span>
                <p className='about-this-page-text'>
                  The streaming home for RadioMixes. Several of the weekly shows
                  I produce now each have their own dedicated stream/channel in
                  the iHeartRadio app. Click or tap any of the logos to tune in!
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className='radio-page-transparency'>
              <Card.Body className='radio-page-card'>
                <span className='radio-page-card-title'>
                  <p>Full Tilt Remix LLC</p>
                </span>
                <p className='about-this-page-text'>
                  Production manager, producer and site admin for Full Tilt Remix, a promotional DJ remix service I co-founded in 2005. Over one hundred releases to date since, available via download (originally CD).
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

export default RadioPage
