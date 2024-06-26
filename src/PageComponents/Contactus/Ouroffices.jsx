import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import sampleImage from '../../assets/img/Contactus/Rectangle 4345.png'
import '../../assets/CSS/aboutus.css';
import Heading from '../../components/Heading';

const cardData = [
    {
        id: 1,
        img: sampleImage,
        title: 'OFFICE 1',
        address: 'M-4, MEC, Amroli, Navsari - 42309, India',
        mail: 'info@postaventuregroup.com',
        tel: ' +91-253-6613206/6613218/6613214'
    },
    {
        id: 2,
        img: sampleImage,
        title: 'OFFICE 2',
        address: 'M-4, MEC, Amroli, Navsari - 42309, India',
        mail: 'info@postaventuregroup.com',
        tel: ' +91-253-6613206/6613218/6613214'
    },
    {
        id: 3,
        img: sampleImage,
        title: 'OFFICE 3',
        address: 'M-4, MEC, Amroli, Navsari - 42309, India',
        mail: 'info@postaventuregroup.com',
        tel: ' +91-253-6613206/6613218/6613214'
    },
    {
        id: 4,
        img: sampleImage,
        title: 'OFFICE 4',
        address: 'M-4, MEC, Amroli, Navsari - 42309, India',
        mail: 'info@postaventuregroup.com',
        tel: '+91 9099708099'
    }
];

const Ouroffices = () => {
    return (
        <Container className="my-5">
            <Heading heading="OUR OFFICES" />
            <Row className=' d-flex justify-content-evenly'>
                {cardData.map((card, index) => (
                    <Col key={index} xs={12} sm={12} md={6} lg={6} className="mb-4 rounded-4 p-lg-4 text-center">
                        <Card className="h-100 rounded-4 infrastructurecard border-bottom border-3 border-danger border-end-0 border-top-0 border-start-0">
                            <Card.Img variant="top" src={card.img} alt={card.title} className=' rounded-4' />
                            <Card.Body className=' pb-4'>
                                <Card.Title className=' fw-bolder fs-4'>{card.title}</Card.Title>
                                <Card.Text className='px-lg-3'>{card.address}
                                    <br />
                                    {card.tel}
                                    <br />
                                    {card.mail}


                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};


export default Ouroffices