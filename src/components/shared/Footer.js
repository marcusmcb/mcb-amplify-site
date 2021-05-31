import React from 'react'
import { Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import './footer.css'

const Footer = () => {
  return (
    <div>
      <Col className='footer g-0'>
        <div className='footer-text'>
          <NavLink to='/footer' className='footer-text'>2021 &#169; Marcus McBride.</NavLink>
        </div>
      </Col>
    </div>
  )
}

export default Footer
