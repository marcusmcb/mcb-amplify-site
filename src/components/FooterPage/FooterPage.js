import React from 'react'
import { Row, Card, Button } from 'react-bootstrap'

import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'

import './footerpage.css'

const FooterPage = () => {
  return (
    <div className='footer-page'>
      <Navbar />
      <Row className='footer-page-body g-0'>
        <Card.Body>
          <h1 className='footer-page-title'>About This Site</h1>
          <div className='footer-page-text'>
            <p>Built with React and Amplify (and a boat-load of custom CSS).</p>
            <p>
              Mobile-first responsive design tested in iOS, Chrome and Safari.
            </p>
            <span className='footer-page-button-row'>
              <Button className='footer-page-button'>
                <a
                  variant='secondary'
                  href='https://github.com/marcusmcb/mcb-amplify-site'
                  target='_blank'
                  rel='noreferrer'
                >
                  View Code
                </a>
              </Button>
            </span>
            <h3 className='footer-page-title'>Errors or site issues?</h3>
            <p>Send them to me at marcusmcb@gmail.com.</p>
            <br />
            <br />
            <h5 className='footer-page-socials'>
              <p>all of my socials in one place</p>
              <i className='fa fa-arrow-down'></i>
            </h5>
            <a
              className='linktree'
              href='https://linktr.ee/djmarcusmcb'
              target='_blank'
              rel='noreferrer'
            >
              LinkTree
            </a>
          </div>
        </Card.Body>
      </Row>
      <Footer />
    </div>
  )
}

export default FooterPage
