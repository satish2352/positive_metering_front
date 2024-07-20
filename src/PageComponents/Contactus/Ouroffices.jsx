import React, { useState,  useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import sampleImage from '../../assets/img/Contactus/Rectangle 4345.png';
import '../../assets/CSS/aboutus.css';
import Heading from '../../components/Heading';
import axios from 'axios';

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
    const [offices, setoffices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  
    useEffect(() => {
      const fetchContacts = async () => {
        try {
          const response = await axios.get('office/get-offices');
          if (response.data.result) {
            setoffices(response.data.responseData);
          } else {
            setError(response.data.message);
          }
        } catch (error) {
          setError('There was an error making the request!');
        } finally {
          setLoading(false);
        }
      };
  
      fetchContacts();
    }, []);
  
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            // Whether animation should happen only once - while scrolling down
        });
    }, []);

    return (
        <Container className="my-5">
            <Heading heading="OUR OFFICES" />
            <Row className=' d-flex justify-content-evenly'>
                {offices.map((card, index) => (
                    <Col
                        key={index}
                        xs={12}
                        sm={12}
                        md={6}
                        lg={6}
                        className="mb-4 rounded-4 p-lg-4 text-center"
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                        data-aos-delay="400"
                    >
                        <Card className="h-100 rounded-4 infrastructurecard border-bottom border-3 border-danger border-end-0 border-top-0 border-start-0">
                            <Card.Img variant="top" src={card.img} alt={card.title} className=' rounded-4' />
                            <Card.Body className=' pb-4'>
                                <Card.Title className=' fw-bolder fs-4'>{card.title}</Card.Title>
                                <Card.Text className='px-lg-3'>
                                    {card.address}
                                    <br />
                                    {card.phone}
                                    <br />
                                    {card.email}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Ouroffices;
