import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../assets/CSS/aboutus.css';
import Heading from '../../components/Heading';
import axios from 'axios';

const Ouroffices = () => {
    const [offices, setOffices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get('/office/get-offices');
                if (response.data.result) {
                    setOffices(response.data.responseData);
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
        });
    }, []);

    return (
        <Container className="my-lg-5 my-5">
            <Heading heading="OUR OFFICES" />
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <Row className='d-flex justify-content-evenly'>
                    {offices.filter(office => office.isActive).map((office, index) => (
                        <Col
                            key={index}
                            xs={12}
                            sm={12}
                            md={6}
                            lg={6}
                            className="rounded-4 p-lg-4 py-4 text-center"
                            data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="500"
                        >
                            <Card className="h-100 rounded-4 infrastructurecard border-bottom border-3 border-danger border-end-0 border-top-0 border-start-0">
                                <Card.Img variant="top" src={office.img} alt={office.title} className='rounded-4 w-100 h-100' />
                                <Card.Body className='pb-4'>
                                    <Card.Title className='fw-bolder fs-4'>{office.title}</Card.Title>
                                    <Card.Text className='px-lg-3'>
                                        {office.address}
                                        <br />
                                        <a href={`tel:${office.phone}`}  className=" text-dark text-decoration-none">{office.phone}</a>
                                        <br />
                                        <a href={`mailto:${office.email}`}  className=" text-dark text-decoration-none">{office.email}</a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
};

export default Ouroffices;
