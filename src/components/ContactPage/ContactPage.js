import React from 'react'
import { Row, Card } from 'react-bootstrap'

import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'

import './contactpage.css'

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <div className='contact-page-body'>
        <Row className='g-0'>
          <Card className='contact-card-body'>
            <Card.Body className='contact-card-text-background'>
              <Card.Text className='contact-card-text'>
                <span className='contact-card-title'>Contact:</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </div>
      <Footer />
    </div>
  )
}

export default ContactPage
