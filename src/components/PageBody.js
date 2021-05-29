import React from 'react'
import { Row, Col, Card, Image } from 'react-bootstrap'
import './pagebody.css'

const PageBody = () => {
  return (
    <div>
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
                fluid roundedCircle               
              />
            </Card.Body>
          </Card>
        </Col>
        <Col sm={8}>
          <Card className='card-border content-body'>
            <Card.Body>
              <Card.Text>
                <p>
                  Marcus here. I'm a full-stack developer and broadcast producer
                  based in Orange County, California
                </p>
                <p>
                  I've worked as a contract producer, programmer and project
                  manager within the commercial radio industry for the past two
                  decades.
                </p>
                <p>I also write code!</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default PageBody
