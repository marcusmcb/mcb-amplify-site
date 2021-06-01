import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'

import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'

import './contactpage.css'

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <div className='contact-page-body'>
        <Row className='g-0'>
          <Col sm={6}>ONE</Col>
          <Col sm={6} className='second-column'>
            <div>
              <Card className='contact-page-card-body'>
                <Card.Body className='contact-page-transparency'>
                  <Card.Title className='contact-page-title'>
                    <h3 className='contact-title'>Contact:</h3>
                  </Card.Title>
                  <span className='contact-icon-row'>
                    <i className='fa fa-phone contact-icon'></i>
                    <h4 className='contact-icon-title'>714-889-8793</h4>
                  </span>
                  <span className='contact-icon-row'>
                    <i class='fa fa-envelope contact-icon'></i>
                    <a href='mailto:marcusmcb@gmail.com'>
                      <h4 className='contact-icon-title'>
                        marcusmcb@gmail.com
                      </h4>
                    </a>
                  </span>
                  <span className='contact-icon-row'>
                    <i class='fa fa-envelope contact-icon'></i>
                    <a href='mailto:fulltiltremix@gmail.com'>
                      <h4 className='contact-icon-title'>
                        fulltiltremix@gmail.com
                      </h4>
                    </a>
                  </span>
                  <span className='contact-icon-row'>
                    <i class='fa fa-linkedin contact-icon'></i>
                    <a href='https://www.linkedin.com/in/marcusmcbride/'>
                      <h4 className='contact-icon-title'>LinkedIn</h4>
                    </a>
                  </span>
                  <span className='contact-icon-row'>
                    <i class='fa fa-link contact-icon'></i>
                    <a href='https://linktr.ee/djmarcusmcb'>
                      <h4 className='contact-icon-title'>LinkTree (Socials)</h4>
                    </a>
                  </span>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  )
}

export default ContactPage
