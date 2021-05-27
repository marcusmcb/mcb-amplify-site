import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import './pagebody.css'

const PageBody = () => {
  return (
    <div>
      <Row>
        <Col>
          <Card>
            <Card.Img variant='top' src='../images/mcb-logo.jpg' />
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default PageBody
