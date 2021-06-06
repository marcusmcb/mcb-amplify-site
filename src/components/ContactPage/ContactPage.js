import React from 'react'
import { Row, Card } from 'react-bootstrap'

import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'

import './contactpage.css'

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <div className='contact-page-body'>
        <Row className='g-0'>
          <Card className='contact-card-body'>
            <Card.Body className='contact-card-text-background'>
              <Card.Text className='contact-card-text'>
                <div className='contact-card-title'>Contact:</div>
              </Card.Text>
              <div className='contact-card-text contact-item'>
                <a href='tel:714-889-8793'>
                  <i className='contact-icon fa fa-phone'></i>
                </a>
                <p>714-889-8793</p>
              </div>
              <div className='contact-card-text contact-item'>
                <a href='mailto:marcusmcb@gmail.com'>
                  <i className='contact-icon fa fa-envelope'></i>
                </a>
                <p>marcusmcb@gmail.com</p>
              </div>
              <div className='contact-card-text contact-item'>
                <a
                  href='https://www.linkedin.com/in/marcusmcbride/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='contact-icon fa fa-linkedin'></i>
                </a>
                <p>LinkedIn</p>
              </div>
              <div className='contact-card-text contact-item'>
                <a
                  href='https://docs.google.com/document/d/1byCRQW5EwasfBhFVrslPoleFimG4P9GCzrUfpg_wxQw/edit?usp=sharing'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='contact-icon fa fa-link'></i>
                </a>
                <p>Resume (doc)</p>
              </div>
              <div className='contact-card-text contact-item'>
                <a
                  href='https://drive.google.com/file/d/1oZxNAKmymKCInhdEwMAMTMJOi1SN3ZmE/view?usp=sharing'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='contact-icon fa fa-link'></i>
                </a>
                <p>Resume (pdf)</p>
              </div>
            </Card.Body>
          </Card>
        </Row>
      </div>
      <Footer />
    </div>
  )
}

export default ContactPage
