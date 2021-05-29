import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import './pagebody.css'

const PageBody = () => {
  return (
    <div>
      <Row className='g-0 page-body-contents'>
        <Col>
          <Card className='card-border content-body'>
            <Card.Body>
              <Card.Img
                variant='top'
                src='https://avatars.githubusercontent.com/u/38328362?v=4'
              />
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='card-border content-body'>
            <Card.Body>
              <Card.Text>
                <p>
                  Marcus here. I'm a full-stack developer and broadcast producer
                  based in Orange County, California
                </p>
                <p>
                  I've worked as a contract producer, programmer and project
                  manager within the commercial radio industry for the past two decades.  
                </p>
                <p>
                  I also write code!
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default PageBody
