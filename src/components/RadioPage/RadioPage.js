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

          <Col sm={6}>
            <Card className='radio-page-transparency'>
              <Card.Body className='radio-page-card'>
                <Card.Title>
                  <span className='radio-page-card-title'>
                    ClubJam on iHeartRadio
                  </span>
                </Card.Title>
                <p>
                  The streaming home for RadioMixes. Several of the weekly shows I produce now have their own dedicated streams in the iHeartRadio app.  Click/tap any of the logos to tune in!
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6}>
            
          </Col>          
        </Row>
      </div>

      <Footer />
    </div>
  )
}

export default RadioPage
