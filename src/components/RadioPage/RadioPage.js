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
        <Row>
          <Col>
            <Card className='radio-page-transparency'>
              <Card.Body className='radio-page-card'>
                <Card.Title>Title</Card.Title>
                <p>This is some text within a card
                body.  There will be more in here once the info for this element has been filled out completely.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <h1>Padio Rage</h1>
          </Col>
        </Row>
      </div>

      <Footer />
    </div>
  )
}

export default RadioPage
