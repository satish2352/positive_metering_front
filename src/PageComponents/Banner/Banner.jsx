import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import blogdetails_img1 from '../../assets/img/Blogdetails/blogdetails_img1.png'

function Banner() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <Row>
                            <div className='bannertext1' style={{ backgroundColor: 'white' }}>
                                <h1 className='text-center pt-5 font-weight-bold'>WELCOME</h1>
                                <h3 className='text-center'>TO POSITIVE METERING PUMPS</h3>
                            </div>
                        </Row>
                        <Row>
                            <div className='text-center text-white py-3' style={{ backgroundColor: '#ee585d' }}>
                                <p>Exploring new food with different transitions from all Asian
                                <p>countries, especially from Cambodia, that you can try at
                                <p>this place and get a good price from us as well. We will
                                <p>make a good impact on our customers.</p></p></p></p>
                            </div>
                        </Row>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <Image src={blogdetails_img1} fluid style={{ height: '18rem',  width:'100%'}} />
                    </Col>
                </Row>
            </Container>
            <div className='mb-5'></div>
        </>
    );
}

export default Banner;
