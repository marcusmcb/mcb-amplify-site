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
        <Row>
          <Col sm={6}>ONE</Col>
          <Col sm={6}>
            <Card>
              <Card.Body>
                <Card.Title className='contact-page-title'>
                  <h3 className='contact-title'>Contact:</h3>
                </Card.Title>
                <span className='contact-icon-row'>
                  <i className='fa fa-phone contact-icon'></i>
                  <h4>714-889-8793</h4>
                </span>
                <span className='contact-icon-row'>                  
                <i class="fa fa-envelope contact-icon"></i>
                  <h4>marcusmcb@gmail.com</h4>
                </span>
                <span className='contact-icon-row'>                  
                <i class="fa fa-link contact-icon"></i>
                  <h4>linktree</h4>
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

export default ContactPage
