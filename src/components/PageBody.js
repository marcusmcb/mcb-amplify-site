import React from 'react'
import { Row, Col, Card, Image } from 'react-bootstrap'
import './pagebody.css'

const PageBody = () => {
  return (
    <div className='page-body'>
      <Row className='g-0 page-body-contents'>
        <Col sm={4}>
          <Card className='card-border content-body'>
            <Card.Body>
              <Image
                className='mcb-logo'
                variant='top'
                src='https://avatars.githubusercontent.com/u/38328362?v=4'
                alt='MCB Logo'
                width='200'
                fluid
                roundedCircle
              />
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <Card className='card-border content-body'>
            <Card.Body>
              <Card.Text>
                Marcus here. I'm a full-stack developer and broadcast producer
                based in Orange County, California
                <br />
                <br />
                I've worked as a contract producer, programmer and project
                manager within the commercial radio industry for the past two
                decades. 
                <br />
                <br />
                I also write code!
                <br />
                <br />
                There will be a lot more text here about this, that and the other thing which I'm sure will be super interesting to read but right now I'm just entering text to see how it formats on mobile view.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default PageBody
