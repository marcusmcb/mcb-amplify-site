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
          <Col sm={6}>
            <p>ONE</p>
          </Col>
          <Col sm={6}>
            TWO
          </Col>
        </Row>
        <Row className='g-0'>
          <Col sm={6}>
            <p>THREE</p>
          </Col>
          <Col sm={6}>
            FOUR
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  )
}

export default DevPage
