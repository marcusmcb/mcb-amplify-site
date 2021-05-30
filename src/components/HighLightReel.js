import React from 'react'
import { Carousel } from 'react-bootstrap'

import './highlightreel.css'

const HighLightReel = () => {
  return (
    <div className='carousel-contents'>
      <Carousel fade>
        <Carousel.Item>          
          <span className='d-block w-100 carousel-element-one'></span>
          <Carousel.Caption className='carousel-element-caption-left'>
            <h3>Broadcast</h3>
            <p>More about my radio production work.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <span className='d-block w-100 carousel-element-two'></span>
          <Carousel.Caption>
            <h3>Development</h3>
            <p>Here's where the code be.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <span className='d-block w-100 carousel-element-three'></span>
          <Carousel.Caption className='carousel-element-caption-right'>
            <h3>DJ</h3>
            <p>Live events and beyond.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default HighLightReel
