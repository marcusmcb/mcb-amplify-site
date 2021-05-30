import React from 'react'
import { Carousel } from 'react-bootstrap'

import './highlightreel.css'

const HighLightReel = () => {
  return (
    <div className='carousel-contents'>
      <Carousel fade>
        <Carousel.Item>
          <img
            className='d-block w-100 carousel-element carousel-element-one'
            src='https://pbs.twimg.com/media/E2XMEejVkAMUso2?format=jpg&name=large'
            alt='First slide'
            interval='200'
          />
          <Carousel.Caption className='carousel-element-caption-right'>
            <h3>Broadcast</h3>
            <p>More about my radio production work.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 carousel-element'
            src='https://pbs.twimg.com/media/EzlfEH-VIAMdsHT?format=jpg&name=large'
            alt='Second slide'
            interval='200'
          />
          <Carousel.Caption>
            <h3>Development</h3>
            <p>Here's where the code be.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 carousel-element'
            src='https://pbs.twimg.com/media/EzYgA_RVkAI2Vwe?format=jpg&name=large'
            alt='Third slide'
            interval='200'
          />
          <Carousel.Caption className='carousel-element-caption-left'>
            <h3>iOT</h3>
            <p>Tinkering and building.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default HighLightReel
