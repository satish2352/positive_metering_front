import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../../assets/CSS/aboutus.css';
import Heading from '../../components/Heading';

const Infrastructure = () => {
  const [infrastructureData, setInfrastructureData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/infrastructure/get-infrastructure');
        // const activeData = response.data.responseData.filter(item => item.isActive);
        setInfrastructureData( response.data.responseData);
        console.log(response)
      } catch (error) {
        console.error('Error fetching the infrastructure data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container style={{ backgroundColor: 'white' }}>
      <Heading heading="Infrastructure" />
      <Row>
        {infrastructureData.map((card, index) => (
          <Col key={index} xs={12} md={6} lg={4} className="mb-4 rounded-4 p-lg-4 text-center">
            <Card className="h-100 rounded-4 infrastructurecard border-bottom border-3 border-danger border-end-0 border-top-0 border-start-0">
              <Card.Img variant="top" src={card.img} alt={card.title} className='rounded-4' />
              <Card.Body>
                <Card.Title className='fw-bolder'>{card.title}</Card.Title>
                <Card.Text className='px-lg-3'>{card.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Infrastructure;
