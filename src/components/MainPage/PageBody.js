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
            <Card.Body className='card-body-text-background'>
              <Card.Text className='card-body-text'>
                Marcus here. I'm a full-stack developer, broadcast producer and
                DJ based in Orange County, California.
                <br />
                <br />
                In 2018, my career path took a shift to pursue web and tech
                development full time. Since then, I’ve worked on a variety of
                projects in various roles as a full-stack developer. I’m
                experienced in finding effective solutions to both creative
                hurdles and technical challenges.
                <br />
                <br />                
                My toolbox includes Javascript,
                Node, React/Redux, Python (Flask/Jupyter), Ruby/Rails, CSS, SQL,
                Mongo/Atlas, AWS, data visualizations as well as various
                related methodologies (responsive design, APIs, CI/CD,
                MVC, ETL, Agile/Scrum/Jira, Git, CI/CD).
                <br />
                <br />
                My experience as a content producer, programmer, and project
                manager in the commercial broadcast industry for over two
                decades has driven me to be detail-oriented and deadline-driven.
                <br />
                <br />
                You can view samples of and more info about my work on their
                respective pages.
                <br />
                <br />
                Please feel free to reach out with any questions, feedback or
                inquiries.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default PageBody
