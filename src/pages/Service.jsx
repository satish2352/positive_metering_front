import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Heading from '../components/Heading';

import image1 from '../assets/img/About/Frame 19.png';
import image2 from '../assets/img/About/Frame 20 (1).png';
import image3 from '../assets/img/About/Frame 21.png';

import back1 from '../assets/img/About/back 19.png';
import back2 from '../assets/img/About/back 20.png';
import back3 from '../assets/img/About/back 21.png';

const Service = () => {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);

  const handleMouseEnter1 = () => {
    setIsFlipped1(true);
  };

  const handleMouseLeave1 = () => {
    setIsFlipped1(false);
  };

  const handleMouseEnter2 = () => {
    setIsFlipped2(true);
  };

  const handleMouseLeave2 = () => {
    setIsFlipped2(false);
  };

  const handleMouseEnter3 = () => {
    setIsFlipped3(true);
  };

  const handleMouseLeave3 = () => {
    setIsFlipped3(false);
  };

  return (
    <>
      <Container fluid="md">
        <Heading heading="services" />
        <p className='text-center ptext'>We consider us a Solution Providing Business. Therefore offering Services to our customers is considered to be a core <br />activity. Our organisation is built around to offer services in three stages.</p>

        <Row className='mt-5'>
          <Col lg={4} md={4} sm={12}>
            <Card.Body>
              <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped1}>
                <div className="card border-0" onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
                  <FrontCard image={image1} />
                  <p></p>
                </div>
                <div className="card card-back border-0" onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
                  <BackCard image={back1} />
                 
                  
                
                </div>
              </ReactCardFlip>
            </Card.Body>
          </Col>

          <Col lg={4} md={4} sm={12}>
            <Card.Body>
              <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped2}>
                <div className="card border-0" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
                  <FrontCard image={image2} />
                </div>
                <div className="card card-back border-0" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
                  <BackCard image={back2} />
                </div>
              </ReactCardFlip>
            </Card.Body>
          </Col>

          <Col lg={4} md={4} sm={12}>
            <Card.Body>
              <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped3}>
                <div className="card  border-0" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
                  <FrontCard image={image3} />
                </div>
                <div className="card card-back border-0" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
                  <BackCard image={back3} />
                </div>
              </ReactCardFlip>
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </>
  );
};

const FrontCard = ({ image }) => (
  <img src={image} alt="Front" style={{ width: '100%' }} />
);

const BackCard = ({ image }) => (
  <img src={image} alt="Back" style={{ width: '100%' }} />
);

export default Service;