import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import sampleImage from '../assets/img/News/Rectangle 4345 (1).png'
import '../assets/CSS/aboutus.css';
import Heading from '../components/Heading';

const cardData = [
  {
    title: "ipsum dolor sit amet,",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.labore et dolore magna aliqua",
    imgSrc: sampleImage
  },
  {
    title: "contribute successfully in the first Plant i",
    description: "Feeling Proud to contribute successfully in the first Plant in India to convert Diesel from Plastic. Dosing Pumps specially designed & manufactured by my engineers (@Positive Metering Pumps India Pvt Ltd ) for this plant established in Dehradun, India is being used for an important role. Many thanks to Technip FMC for the opportunity. A demonstration plant for converting plastic waste ",
    imgSrc: sampleImage
  },
  {
    title: "contribute successfully in the first Plant i",
    description: "Feeling Proud to contribute successfully in the first Plant in India to convert Diesel from Plastic. Dosing Pumps specially designed & manufactured by my engineers (@Positive Metering Pumps India Pvt Ltd ) for this plant established in Dehradun, India is being used for an important role. Many thanks to Technip FMC for the opportunity. A demonstration plant for converting plastic waste ",
    imgSrc: sampleImage
  },
  {
    title: "contribute successfully in the first Plant icontribute successfully in the first Plant i",
    description: "Feeling Proud to contribute successfully in the first Plant in India to convert Diesel from Plastic. Dosing Pumps specially designed & manufactured by my engineers (@Positive Metering Pumps India Pvt Ltd ) for this plant established in Dehradun, India is being used for an important role. Many thanks to Technip FMC for the opportunity. A demonstration plant for converting plastic waste ",
    imgSrc: sampleImage
  },
  {
    title: "contribute successfully in the first Plant i",
    description: "Feeling Proud to contribute successfully in the first Plant in India to convert Diesel from Plastic. Dosing Pumps specially designed & manufactured by my engineers (@Positive Metering Pumps India Pvt Ltd ) for this plant established in Dehradun, India is being used for an important role. Many thanks to Technip FMC for the opportunity. A demonstration plant for converting plastic waste ",
    imgSrc: sampleImage
  },
  {
    title: "contribute successfully in the first Plant i",
    description: "Feeling Proud to contribute successfully in the first Plant in India to convert Diesel from Plastic. Dosing Pumps specially designed & manufactured by my engineers (@Positive Metering Pumps India Pvt Ltd ) for this plant established in Dehradun, India is being used for an important role. Many thanks to Technip FMC for the opportunity. A demonstration plant for converting plastic waste ",
    imgSrc: sampleImage
  }
];

const NewsAndEvents = () => {
  return (
    <Container  className="my-5">
        <Heading heading="Infrastructure"/>
      <Row>
        {cardData.map((card, index) => (
          <Col key={index} xs={12} md={6} lg={4} className="mb-4 rounded-4 p-lg-4 ">
            <Card className="h-100 rounded-4 infrastructurecard border-bottom border-3 border-danger border-end-0 border-top-0 border-start-0">
              <Card.Img variant="top" src={card.imgSrc} alt={card.title}  className=' rounded-4'/>
              <Card.Body>
                <Card.Title className=' fw-bolder'>{card.title}</Card.Title>
                <Card.Text className='px-lg-3' style={{fontSize:"13px"}}>{card.description}</Card.Text>
                <button style={{backgroundColor:"transparent"}} className=' rounded-5 border-3 px-3 py-2 border border-danger'>Read more</button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};



export default NewsAndEvents