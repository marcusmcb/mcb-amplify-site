import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import './pagebody.css'

const PageBody = () => {
  return (
    <div>
      <Row className='g-0'>
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
                Quis ullamco occaecat sint fugiat incididunt pariatur eiusmod
                commodo cillum est. Dolor consequat excepteur nulla excepteur
                sint tempor sunt ullamco sit commodo. Consectetur nostrud fugiat
                proident labore commodo.
                <br />
                <br />
                Quis ullamco occaecat sint fugiat incididunt pariatur eiusmod
                commodo cillum est. Dolor consequat excepteur nulla excepteur
                sint tempor sunt ullamco sit commodo. Consectetur nostrud fugiat
                proident labore commodo.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default PageBody
