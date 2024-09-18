import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Heading from '../components/Heading';
import '../assets/CSS/Service.css';
import Card from 'react-bootstrap/Card';

import image1 from '../assets/img/aa/new/preorder.png';
import image2 from '../assets/img/aa/new/Frame 20.png';
import image3 from '../assets/img/aa/new/siteservices.png';
import back1 from '../assets/img/aa/PRE ORDER SERVICE (1).png';
import back2 from '../assets/img/About/back 20.png';
import back3 from '../assets/img/About/back 21.png';
import ResponsiveImage from "./ResponsiveImage";
import imgmobile from "../assets/img/aa/mobile/service PAGE.jpg";
import imgtop from "../assets/img/aa/baner/BANER services.jpg";
import ContactCard from '../PageComponents/Contactus/ConatactCard';
import ConatactCardFORSERVEICES from '../PageComponents/Contactus/ConatactCardFORSERVEICES';
import Getaquote from '../PageComponents/About/Getaquote';
const services = [
  {
    id: 1,
    frontImage: image1,
    backImage: back1,
    frontText: 'Pre Order Services',
    backText: "Application Engineering is one of our main strenghts. Our expert engineers have excellent field experience who can perfectly match our products with customer's needs. Special care is taken by us to offer a cost effective solution in right time. We help our customers in structuring their budgets and submitting bids to their customers"
  },
  {
    id: 2,
    frontImage: image2,
    backImage: back2,
    frontText: 'Execution',
    backText: 'A contract specific execution plan is prepared immedietly after receipt of the contract and shared with the customer to make them aware about the schedule and stages of execution. We share status reports with a regular frequency proactively to save our customers efforts in expediting the execution. Well known customers in the process industries have expressed their happiness about services during execution and delivering the products in right time'
  },
  {
    id: 3,
    frontImage: image3,
    backImage: back3,
    frontText: 'Site Services',
    backText: " We have a structured plan in place to offer services to our customers at their site. We offer support to our customers for supervision of installation and commissioning anywhere in the world, if the contract needs so. We are very prompt in offering services - anywhere in the world - in case of breakdown in our products as we realise our customers' stakes in a project or in a process. Our products have proved their reliability and very rarely we have attended breadowns due to manufacturing or design defects. 80% of our business comes from our existing customers that proves our products generally do not fail due to manufacturing or design defects. 7 out 10 first customers who had placed orders on us 24 years ago - in the year 1996 - have continued to place orders on us till today"
  }
];

const Service = () => {
  document.title="Services | Positive Metering"
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
        <p className=' mx-lg-5 mx-2 mb-5 pstext'>
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
                    className="card card-back border-0 d-flex  justify-content-center"
                    onMouseEnter={() => handleMouseEnter(service.id)}
                    onMouseLeave={() => handleMouseLeave(service.id)}
                  >
                    <BackCard image={service.backImage} />
                    <div className="text-center px-4 text-white mt-4">
                      <h3 className='backH'>{service.frontText}</h3>
                      <div className='backP'>{service.backText}.</div>
                    </div>
                  </div>
                </ReactCardFlip>
              </Card.Body>
            </Col>
          ))}
        </Row>
      </Container>
        
        <ConatactCardFORSERVEICES/>
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
