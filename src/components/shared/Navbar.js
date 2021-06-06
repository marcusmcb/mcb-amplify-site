import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='header' id='header-scroll'>
      <Col className='header-title-row'>
        <NavLink to='/'>
          <div className='header-title'>Marcus McBride</div>
        </NavLink>
      </Col>
      <Row className='header-clickables g-0'>
        <Col className>
          <span className='header-links'>
            <NavLink to='/dev'>
              <div className='header-link'>Dev</div>
            </NavLink>
            <NavLink to='/radio'>
              <div className='header-link'>Radio</div>
            </NavLink>
            <NavLink to='/contact'>
              <div className='header-link'>Contact</div>
            </NavLink>
          </span>
        </Col>
        <Col className='header-icons-row'>
          <div className='header-icons'>
            <a
              className='icon'
              href='http://www.github.com/marcusmcb'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fa fa-github'></i>
            </a>
            <a
              className='icon'
              href='http://www.twitter.com/djmarcusmcb'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fa fa-twitter'></i>
            </a>
            <a
              className='icon'
              href='http://www.instagram.com/djmarcusmcb'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fa fa-instagram'></i>
            </a>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Navbar
