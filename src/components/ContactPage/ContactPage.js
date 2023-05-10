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
                <a href='tel:714-889-8793' className='contact-row'>
                  <i className='fa fa-phone'></i>
                  <p>714-889-8793</p>
                </a>
              </div>
              <div className='contact-card-text contact-item'>
                <a href='mailto:marcusmcb@gmail.com' className='contact-row'>
                  <i className='contact-icon fa fa-envelope'></i>
                  <p>marcusmcb@gmail.com</p>
                </a>
              </div>
              <div className='contact-card-text contact-item'>
                <a
                  href='https://www.linkedin.com/in/marcusmcbride-developer/'
                  target='_blank'
                  rel='noreferrer'
                  className='contact-row'
                >
                  <i className='contact-icon fa fa-linkedin'></i>
                  <p>LinkedIn</p>
                </a>
              </div>
              <div className='contact-card-text contact-item'>
                <a
                  href='https://docs.google.com/document/d/1HCi-wo3nl6cZliPU_vokSjvGshk__QlFkWCCVxXtsNA/edit?usp=sharing'
                  target='_blank'
                  rel='noreferrer'
                  className='contact-row'
                >
                  <i className='contact-icon fa fa-link'></i>
                  <p>Resume (doc)</p>
                </a>
              </div>
              <div className='contact-card-text contact-item'>
                <a
                  href='https://drive.google.com/file/d/1qVKJh0Eov9dE-_b-H0SD_WUhX13BjknI/view?usp=sharing'
                  target='_blank'
                  rel='noreferrer'
                  className='contact-row'
                >
                  <i className='contact-icon fa fa-link'></i>
                  <p>Resume (pdf)</p>
                </a>
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
