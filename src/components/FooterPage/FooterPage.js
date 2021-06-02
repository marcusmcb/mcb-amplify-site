import React from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap'

import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'

import './footerpage.css'

const FooterPage = () => {
  return (
    <div>
      <Navbar />
      <div className='footer-page-body'>
        <Row className='g-0'>
          <Col sm={12}>
            <Card className='footer-page-transparency'>
              <Card.Body className='footer-page-card'>
                <span className='about-this-page-title'>
                  <p>About This Site</p>
                </span>
                <span className='about-this-page-text'>
                  <p>Built with React and Amplify and a lot of custom CSS.</p>
                  <p>
                    Mobile-first responsive design tested in iOS, Chrome and
                    Safari.
                  </p>
                </span>
                <div className='footer-page-button'>
                  <Button>
                    <a
                      variant='secondary'
                      href='https://github.com/marcusmcb/mcb-amplify-site'
                      target='_blank'
                      rel='noreferrer'
                    >
                      View Code
                    </a>
                  </Button>
                </div>
                <span className='about-this-page-title'>
                  <p>Errors or site issues?</p>
                </span>
                <span className='about-this-page-text'>
                  <p>
                    Send them to me:{' '}
                    <a href='mailto:marcusmcb@gmail.com'>marcusmcb@gmail.com</a>
                  </p>
                </span>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  )
}

export default FooterPage
