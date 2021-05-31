import React from 'react'
import { Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import './footer.css'

const Footer = () => {

  // sets year value in footer to current year
  let currentYear = new Date().getFullYear();  

  return (
    <div>
      <Col className='footer g-0'>
        <div className='footer-text'>
          <NavLink to='/footer' className='footer-text'>{currentYear} &#169; Marcus McBride.</NavLink>
        </div>
      </Col>
    </div>
  )
}

export default Footer
