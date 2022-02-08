import React from 'react'
import { Carousel } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import './highlightreel.css'

const HighLightReel = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <span className='d-block w-100 carousel-element-one'></span>
          <Carousel.Caption className='carousel-element-caption-left'>
            <NavLink to='/dev'>
              <h3>Development</h3>
              <p>Sites, apps & code I've written.</p>
            </NavLink>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <span className='d-block w-100 carousel-element-two'></span>
          <Carousel.Caption>
            <NavLink to='/radio'>
              <h3>Radio</h3>
              <p>Broadcast production, remixes & more.</p>
            </NavLink>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <span className='d-block w-100 carousel-element-three'></span>
          <Carousel.Caption className='carousel-element-caption-right'>
            <a href='https://linktr.ee/djmarcusmcb'>
              <h3>DJ</h3>
              <p>Live events, streaming, socials.</p>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default HighLightReel
