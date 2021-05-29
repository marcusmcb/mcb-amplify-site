import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='header' id='header-scroll'>      
        <Col className='header-title-row'>
          <div className='header-title'>Marcus McBride</div>
        </Col>
        <Row className='header-clickables g-0'>
        <Col className>
        <span className='header-links'>
          <div className='header-link'>Dev</div>
          <div className='header-link'>Radio</div>
          <div className='header-link'>Contact</div>
        </span>
        </Col>
        <Col className='header-icons-row'>
          <div className='header-icons'>
            <a className='icon' href='http://www.instagram.com/djmarcusmcb' target='_blank' rel='noreferrer'>
              <i className='fa fa-instagram'></i>
            </a>
            <a className='icon' href='http://www.twitter.com/djmarcusmcb' target='_blank' rel='noreferrer'>
              <i className='fa fa-twitter'></i>
            </a>
            <a className='icon' href='http://www.twitch.tv/djmarcusmcb' target='_blank' rel='noreferrer'>
              <i className='fa fa-twitch'></i>
            </a>
          </div>
        </Col> 
        </Row>           
    </div>
  )
}

export default Navbar
