import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import sampleImage from '../../assets/img/Home/Group 1000004058.png'
import '../../assets/CSS/aboutus.css';
import Heading from '../../components/Heading';

const cardData = [
  {
    title: "Name",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.labore et dolore magna aliqua",
    imgSrc: sampleImage
  },
  {
    title: "Deployments",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. labore et dolore magna aliqua",
    imgSrc: sampleImage
  },
  {
    title: "Instruments",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco. labore et dolore magna aliqua",
    imgSrc: sampleImage
  },
  {
    title: "Adoption",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse. labore et dolore magna aliqua",
    imgSrc: sampleImage
  },
  {
    title: "Facility",
    description: "Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat labore et dolore magna aliqua.",
    imgSrc: sampleImage
  },
  {
    title: "Material",
    description: "Non proident, sunt in culpa qui officia deserunt mollit anim id est laborum labore et dolore magna aliqua.",
    imgSrc: sampleImage
  }
];

const Infrastructure = () => {
  return (
    <Container  className="my-5">
        <Heading heading="Infrastructure"/>
      <Row>
        {cardData.map((card, index) => (
          <Col key={index} xs={12} md={6} lg={4} className="mb-4 rounded-4 p-lg-4 text-center">
            <Card className="h-100 rounded-4 infrastructurecard border-bottom border-3 border-danger border-end-0 border-top-0 border-start-0">
              <Card.Img variant="top" src={card.imgSrc} alt={card.title}  className=' rounded-4'/>
              <Card.Body>
                <Card.Title className=' fw-bolder'>{card.title}</Card.Title>
                <Card.Text className='px-lg-3'>{card.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};


export default Infrastructure