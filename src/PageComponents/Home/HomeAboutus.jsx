import React, { useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import about from '../../assets/img/Home/Group 1000004058.png';
import Heading from '../../components/Heading';

const HomeAboutus = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <Container fluid className='mt-2'>
      <Row>
        <Col
          lg={6}
          className='order-lg-1 d-none d-lg-block order-2 px-0'
          data-aos="fade-up" data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <img src={about} className='img-fluid' alt="About Us" />
        </Col>
        <Col
          lg={6}
          className='order-lg-2 order-1 homeaboutinfo text-white d-grid align-items-center'
          style={{ backgroundColor: '#EE585D' }}

        >
          <div className='p-lg-5 py-4' data-aos="fade-up" data-aos-easing="linear"
            data-aos-duration="1500" style={{ textAlign: 'justify' }}>
            <h1 style={{ letterSpacing: '4px'}}>ABOUT US</h1>
            <p style={{ fontSize: '12px' }}>
              The Founder of our company Mr. Sudhir Mutalik is a passionate
              mechanical engineer graduated from the reputed Government
              College of Engineering, Karad near Pune, India. Diesel Engines
              has been his interest for study since his university days.
              He was selected by the world's well-known Diesel Engine
              kid Mounted Chemical Dosing Systems.
              With a vision to "Simplify Chemical Treatments in the world"
              after 25 years today Positive Metering Pumps (I) Pvt Ltd has
              done more than 125,000 installations of various products in
              The Founder of our company Mr. Sudhir Mutalik is a passionate
              mechanical engineer graduated from the reputed Government
              College of Engineering, Karad near Pune, India. Diesel Engines
              has been his interest for study since his university days.
              He was selected by the world's well-known Diesel Engine
              kid Mounted Chemical Dosing Systems.
              With a vision to "Simplify Chemical Treatments in the world"
              after 25 years today Positive Metering Pumps (I) Pvt Ltd has
              done more than 125,000 installations of various products in
              With a vision to "Simplify Chemical Treatments in the world"
              after 25 years today Positive Metering Pumps (I) Pvt Ltd has
              done more than 125,000 installations of various products in
              The Founder of our company Mr. Sudhir Mutalik is a passionate

            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeAboutus;
