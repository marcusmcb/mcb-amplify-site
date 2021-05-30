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
              <Card.Text className='card-body-text'>
                Marcus here. I'm a full-stack developer, broadcast producer and DJ
                based in Orange County, California.
                <br />
                <br />
                I've worked as a content producer, programmer and project
                manager in the commercial radio industry for over two
                decades.  From AM radio to FM syndication to satellite to digital streaming, I've had professional experience with each.
                <br />
                <br />
                I've done development work in varying forms during that same time but full-stack development has been my primary career focus since 2018.  
                <br />
                <br />
                Current strengths and familiarities include Javascript, Node, React/Redux, Python (Flask/Jupyter), Ruby/Rails, SQL, Mongo/Atlas, AWS, Docker, data visualizations as well as various dev/data/workflow methodologies (REST, MVC, mobile-first, ETL, Agile/Scrum/Jira, Linux, iOT).
                <br />
                <br />
                You can view samples of and more info about my dev, production and radio/broadcast work on their respective pages.
                <br />
                <br />
                Please feel free to reach out with any questions, feedback or inquiries.
                
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default PageBody
