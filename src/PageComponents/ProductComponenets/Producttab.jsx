import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import productImage from './path/to/image.png'; // Adjust the path to your image

const Producttab = () => {
  return (
    <Container fluid className="mt-3">
      <Row className="align-items-center">
        <Col lg={6} className="px-0">
          <img src={productImage} alt="Plunger Type Dosing Pump" className="img-fluid" />
        </Col>
        <Col lg={6} className="homeaboutinfo text-black" style={{ backgroundColor: "#fff" }}>
          <div className="p-5" style={{ textAlign: "justify" }}>
            <h1>PLUNGER</h1>
            <h3>type dosing pumps</h3>
            <ul>
              <li>Performance Conforms To API 675.</li>
              <li>Precise Metering Devices.</li>
              <li>Plunger Is Hard Chrome Plated.</li>
              <li>Flow Rate Is Linear To Stroke Length Variation.</li>
            </ul>
            <Button variant="outline-dark">Read More</Button>
          </div>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Card>
            <Card.Img variant="top" src={productImage} />
            <Card.Body>
              <Card.Title>PLUNGER TYPE DOSING PUMPS</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={productImage} />
            <Card.Body>
              <Card.Title>PLUNGER TYPE DOSING PUMPS</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={productImage} />
            <Card.Body>
              <Card.Title>PLUNGER TYPE DOSING PUMPS</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};


export default Producttab