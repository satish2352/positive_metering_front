import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Heading from '../components/Heading';
import '../assets/CSS/Service.css';
import image1 from '../assets/img/About/Frame 19.png';
import image2 from '../assets/img/About/Frame 20.png';
import image3 from '../assets/img/About/Frame 21.png';
import back1 from '../assets/img/aa/PRE ORDER SERVICE (1).png';
import back2 from '../assets/img/About/back 20.png';
import back3 from '../assets/img/About/back 21.png';
import ResponsiveImage from "./ResponsiveImage";
import imgmobile from "../assets/img/aa/mobile/service PAGE.jpg";
import imgtop from "../assets/img/aa/baner/BANER services.jpg";

const services = [
  {
    id: 1,
    frontImage: image1,
    backImage: back1,
    frontText: 'Pre Order Services',
    backText: 'Application Engineering is one of our main strengths. Our expert engineers have excellent field experience who can perfectly match our products with customer\'s needs. Special care is taken by us to offer a cost-effective solution in the right time. We help our customers in structuring.'
  },
  {
    id: 2,
    frontImage: image2,
    backImage: back2,
    frontText: 'Execution',
    backText: 'Application Engineering is one of our main strengths. Our expert engineers have excellent field experience who can perfectly match our products with customer\'s needs. Special care is taken by us to offer a cost-effective solution in the right time. We help our customers in structuring.'
  },
  {
    id: 3,
    frontImage: image3,
    backImage: back3,
    frontText: 'Post Order Services',
    backText: 'Application Engineering is one of our main strengths. Our expert engineers have excellent field experience who can perfectly match our products with customer\'s needs. Special care is taken by us to offer a cost-effective solution in the right time. We help our customers in structuring their budgets and submitting bids to their customers.'
  }
];

const Service = () => {
  const [flippedStates, setFlippedStates] = useState(
    services.reduce((acc, service) => ({ ...acc, [service.id]: false }), {})
  );

  const handleMouseEnter = (id) => setFlippedStates({ ...flippedStates, [id]: true });
  const handleMouseLeave = (id) => setFlippedStates({ ...flippedStates, [id]: false });

  return (
    <>
      <ResponsiveImage mobileSrc={imgmobile} desktopSrc={imgtop} />

      <Container>
        <Heading heading="Services" />
        <p className='text-center mx-lg-5 mx-2 mb-5 ptext'>
          We consider ourselves a Solution Providing Business. Therefore, offering Services to our customers is considered to be a core activity. Our organization is built around offering services in three stages.
        </p>

        <Row className='mb-5'>
          {services.map(service => (
            <Col key={service.id} lg={4} md={6} sm={12} className='mb-4'>
              <Card.Body>
                <ReactCardFlip flipDirection="horizontal" isFlipped={flippedStates[service.id]}>
                  <div
                    className="card border-0"
                    onMouseEnter={() => handleMouseEnter(service.id)}
                    onMouseLeave={() => handleMouseLeave(service.id)}
                  >
                    <FrontCard image={service.frontImage} />
                    <Card.Text>
                      <h1 className='frontH text-center'>{service.frontText}</h1>
                    </Card.Text>
                  </div>
                  <div
                    className="card card-back border-0 d-flex align-items-center justify-content-center"
                    onMouseEnter={() => handleMouseEnter(service.id)}
                    onMouseLeave={() => handleMouseLeave(service.id)}
                  >
                    <BackCard image={service.backImage} />
                    <div className="text-center px-4 text-white mt-4">
                      <h3 className='backH'>{service.frontText}</h3>
                      <p className='backP'>{service.backText}</p>
                    </div>
                  </div>
                </ReactCardFlip>
              </Card.Body>
            </Col>
          ))}
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
