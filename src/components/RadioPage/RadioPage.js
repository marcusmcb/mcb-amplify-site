import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'

import rmlogo from '../../images/radiomixes-logo.png'
import ftrlogo from '../../images/ftr-header.jpg'
import cjdlogo from '../../images/cj-dance.PNG'
import cjhlogo from '../../images/cj-hiphop.PNG'
import cjrlogo from '../../images/cj-retro.PNG'
import cjtlogo from '../../images/cj-throwback.PNG'

import './radiopage.css'

const RadioPage = () => {
  return (
    <div>
      <Navbar />
      <div className='radio-page-body'>
        <Row className='g-0'>
          <div className='radio-page-title'>Radio/Production Projects</div>
        </Row>
        <Row className='g-0'>
          <p className='radio-page-bio'>
            On-air. Production. Programming. Syndication. Streaming. I've had
            the good fortune to do it all over the past two-plus decades. Below,
            you'll find my current broadcast and production projects.
          </p>
        </Row>

        <Row className='g-0'>
          <Col sm={4}>
            <Card className='radio-page-transparency'>
              <Card.Body className='radio-page-card'>
                <div className='radio-page-card-title'>
                  <p>RadioMixes</p>
                </div>
                <div className='about-this-page-text'>
                  <p>
                    A series of syndicated radio mixshows airing on commercial
                    FM stations across North America. I'm the current producer,
                    programmer and product manager for the Hot AC, Dance,
                    Rhythmic, Retro and Old School series as well as seasonal
                    production work throughout the year.
                  </p>
                </div>
                <div className='icon-hover'>
                  <a
                    href='https://jamtraxx.com/radiomixes/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <Card.Img src={rmlogo} />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={4}>
            <Card className='radio-page-transparency'>
              <Card.Body className='radio-page-card'>
                <div className='radio-page-card-title'>
                  <p>ClubJam on iHeartRadio</p>
                </div>
                <div className='about-this-page-text'>
                  <p>
                    The streaming home for RadioMixes. Several of the weekly
                    shows I produce now each have their own dedicated
                    stream/channel in the iHeartRadio app. The Club Jam streams
                    also have carriage via HD subchannels in markets throughout
                    North America.
                  </p>
                  <p className='click-tap-text'>
                    Click or tap any of the logos to tune in.
                  </p>
                </div>
                <div className='clubjam-icons'>
                  <a
                    className='clubjam-icon'
                    href='https://www.iheart.com/live/club-jam-dance-7089/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <Card.Img src={cjdlogo} />
                  </a>
                  <a
                    className='clubjam-icon'
                    href='https://www.iheart.com/live/club-jam-hip-hop-7205/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <Card.Img src={cjhlogo} />
                  </a>
                </div>
                <div className='clubjam-icons'>
                  <a
                    className='clubjam-icon'
                    href='https://www.iheart.com/live/club-jam-retro-7873/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <Card.Img src={cjrlogo} />
                  </a>
                  <a
                    className='clubjam-icon'
                    href='https://www.iheart.com/live/club-jam-classic-hip-hop-7206/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <Card.Img className='cjtLogo' src={cjtlogo} />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={4}>
            <Card className='radio-page-transparency'>
              <Card.Body className='radio-page-card'>
                <div className='radio-page-card-title'>
                  <p>Full Tilt Remix</p>
                </div>
                <div className='about-this-page-text'>
                  <p>
                    Production manager, producer/remixer and site admin for Full
                    Tilt Remix, a promotional DJ remix service I co-founded in
                    2005. Over one hundred releases to date since, available via
                    download (originally CD).
                  </p>
                </div>
                <div className='icon-hover'>
                  <a
                    href='https://www.fulltiltremix.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <Card.Img src={ftrlogo} />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* <Col sm={4}>
            <Card className='radio-page-transparency'>
              <Card.Body className='radio-page-card'>
                <div className='radio-page-card-title'>
                  <p>Full Tilt Remix LLC</p>
                </div>
                <p className='about-this-page-text'>
                  Production manager, producer and site admin for Full Tilt
                  Remix, a promotional DJ remix service I co-founded in 2005.
                  Over one hundred releases to date since, available via
                  download (originally CD).
                </p>
              </Card.Body>
            </Card>
          </Col> */}
        </Row>
      </div>
      <Footer />
    </div>
  )
}

export default RadioPage
