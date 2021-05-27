import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './navbar.css'

const Navbar = () => {
  return (
    <div>
      <Row className='title-bar'>
        <Col>Marcus McBride</Col>
        <Col>Dev</Col>
        <Col>DJ/Remix</Col>
        <Col>Contact</Col>
      </Row>
    </div>
  )
}

export default Navbar
