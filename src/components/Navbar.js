import React from 'react'
import { Col } from 'react-bootstrap'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='header'>      
        <Col>
          <div className='header-title'>Marcus McBride</div>
        </Col>
        <Col>
        <span className='header-links'>
          <div>Dev</div>
          <div>Radio</div>
          <div>Contact</div>
        </span>
        </Col>
        <Col className='header-icons'>
          <div>
            <a className='icon' href='http://www.instagram.com/djmarcusmcb'>
              <i className='fa fa-instagram'></i>
            </a>
            <a className='icon' href='http://www.twitter.com/djmarcusmcb'>
              <i className='fa fa-twitter'></i>
            </a>
            <a className='icon' href='http://www.twitch.tv/djmarcusmcb'>
              <i className='fa fa-twitch'></i>
            </a>
          </div>
        </Col>            
    </div>
  )
}

export default Navbar
