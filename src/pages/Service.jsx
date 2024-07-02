import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Heading from '../components/Heading';
import '../assets/CSS/Service.css'
import image1 from '../assets/img/About/Frame 19.png';
import image2 from '../assets/img/About/Frame 20.png';
import image3 from '../assets/img/About/Frame 21.png';

import back1 from '../assets/img/About/back 19.png';
import back2 from '../assets/img/About/back 20.png';
import back3 from '../assets/img/About/back 21.png';
import { CardText } from 'react-bootstrap';
import ResponsiveImage from './ResponsiveImage';

import imgtop from '../assets/img/services/diskimg.png'
import imgmobile from '../assets/img/services/mobileview.png'

const Service = () => {
  window.scrollTo(0, 0);

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
    <ResponsiveImage mobileSrc={imgmobile} desktopSrc={imgtop} />
      <Container fluid="md" className='mb-5'>
        <Heading heading="services" />
        <p className='text-center ptext'>We consider us a Solution Providing Business. Therefore offering Services to our customers is considered to be a core <br />activity. Our organisation is built around to offer services in three stages.</p>

        <Row className='mt-5'>
          <Col lg={4} md={4} sm={12}>
            <Card.Body>
              <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped1}>
                <div className="card border-0" onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
                  <FrontCard image={image1} />
                  <CardText><h1 className='frontH text-center'>Post Order <br /> Services</h1></CardText>

                </div>
                <div className="card card-back border-0" onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
                  <BackCard image={back1}  ></BackCard>
                  <h3 className='backH'>Post Order Services</h3>

                  <p className='backP text-center px-4 text-white mt-4'>Application Engineering is one of our main strenghts. Our expert engineers have excellent field experience who can perfectly match our products with customer's needs. Special care is taken by us to offer a cost effective solution in right time. We help our customers in structuring </p>



                </div>
              </ReactCardFlip>
            </Card.Body>
          </Col>

          <Col lg={4} md={4} sm={12}>
            <Card.Body>
              <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped2}>
                <div className="card border-0" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
                  <FrontCard image={image2} />
                  <CardText> <h3 className='frontH text-center'>Execution</h3></CardText>
                </div>
                <div className="card card-back border-0 " onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
                  <BackCard image={back2} />
                  <h3 className='backH'>Execution</h3>
                  <p className=' text-center px-4 text-white mt-4'>Application Engineering is one of our main strenghts. Our expert engineers have excellent field experience who can perfectly match our products with customer's needs. Special care is taken by us to offer a cost effective solution in right time. We help our customers in structuring </p>

                </div>
              </ReactCardFlip>
            </Card.Body>
          </Col>

          <Col lg={4} md={4} sm={12}>
            <Card.Body>
              <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped3}>
                <div className="card  border-0" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
                  <FrontCard image={image3} />
                  <CardText><h1 className='frontH text-center'>Post Order <br /> Services</h1></CardText>
                </div>
                <div className="card card-back border-0" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
                  <BackCard image={back3} />
                  <h3 className='backH'>Post Order Services</h3>
                  <p className='text-center px-4 text-white mt-4'>Application Engineering is one of our main strenghts. Our expert engineers have excellent field experience who can perfectly match our products with customer's needs. Special care is taken by us to offer a cost effective solution in right time. We help our customers in structuring their budgets and submitting bids to their customers.  </p>

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