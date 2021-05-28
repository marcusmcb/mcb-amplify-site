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
        <Col className='social-icons'>
          <i className='fa fa-instagram' />
          <i className='fa fa-twitter' />
          <i className='fa fa-twitch' />
        </Col>
      </Row>
    </div>
  )
}

export default Navbar
