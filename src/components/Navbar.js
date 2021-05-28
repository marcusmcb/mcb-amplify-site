import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './navbar.css'

const Navbar = () => {
  return (
    <div>
      <Row className='title-bar'>
        <Col>Marcus McBride</Col>
        <Col>Dev</Col>
        {/* <Col>DJ/Remix</Col>
        <Col>Contact</Col> */}
        <Col className='social-icons'>
        <a href="http://www.instagram.com/djmarcusmcb"><i className='fa fa-instagram'></i></a>
        <a href="http://www.twitter.com/djmarcusmcb"><i className='fa fa-twitter'></i></a>
        <a href="http://www.twitch.tv/djmarcusmcb"><i className='fa fa-twitch'></i></a>
          
        </Col>
      </Row>
    </div>
  )
}

export default Navbar
