import React from "react";
import { Row, Col, Card, Image } from "react-bootstrap";
import "./pagebody.css";

const PageBody = () => {
  return (
    <div className="page-body">
      <Row className="g-0 page-body-contents">
        <Col sm={4}>
          <Card className="card-border content-body">
            <Card.Body>
              <Image
                className="mcb-logo"
                variant="top"
                src="https://avatars.githubusercontent.com/u/38328362?v=4"
                alt="MCB Logo"
                width="200"
                fluid
                roundedCircle
              />
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <Card className="card-border content-body">
            <Card.Body className="card-body-text-background">
              <Card.Text className="card-body-text">
                Greetings!  
                <br />
                <br />
                Marcus here. I'm a full-stack developer, broadcast producer and
                DJ based in Orange County, California.
                <br />
                <br />
                I've worked in digital media since the 90s, originally as a
                broadcast programmer and producer before pivoting to focus my
                energy on development full-time in recent years. 
                <br />
                <br />
                My toolbox includes Javascript, Node, React, Python
                (Flask/Jupyter), Ruby/Rails, HTML/CSS, SQL/NoSQL (Mongo), AWS,
                Git/Linux, dashboards and data visualizations. I'm a friend of
                the command line, a fan of responsive design, and love wrangling
                unruly API data. Builds, deploys, and containers spoken here
                too.
                <br />
                <br />
                Two-plus decades in the commercial broadcasting space have led
                me towards accomplishing project goals in a detail-driven and
                deadline-concious workflow.  In both paths I've
                worked to find user-effective solutions to both creative hurdles
                and technical challenges.
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
  );
};

export default PageBody;
