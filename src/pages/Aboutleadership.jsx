import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/CSS/aboutus.css';
import banner from '../assets/img/About/Rectangle 4417.png';
import lder1 from '../assets/img/About/Group 1000004058 (1).png';
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const leadershipData = [
  {
    imgSrc: lder1,
    name: "Mr. Sudhir Mutalik",
    title: "Founder And Managing Director",
    description: "The Founder of our company Mr. Sudhir Mutalik is a passionate mechanical engineer graduated from the reputed Government College of Engineering, Karad near Pune, India. Diesel Engines has been his interest for study since his university days. He was selected by the world's well-known Diesel Engine manufacturer Kirloskar Oil Engines Ltd through campus recruitment."
  },
  {
    imgSrc: lder1,
    name: "Ms. Jane Doe",
    title: "Chief Operating Officer",
    description: "Ms. Jane Doe has over 20 years of experience in operations management. She has been instrumental in streamlining processes and ensuring operational excellence."
  },
  {
    imgSrc: lder1,
    name: "Mr. John Smith",
    title: "Chief Technology Officer",
    description: "Mr. John Smith is a tech visionary with a background in computer science. He has led numerous tech innovations in the company."
  },
  {
    imgSrc: lder1,
    name: "Ms. Emily White",
    title: "Chief Marketing Officer",
    description: "Ms. Emily White is an expert in marketing strategies with a focus on digital marketing. She has significantly boosted the company's brand presence."
  }
];

const Aboutleadership = () => {
  return (
    <>
      <Container fluid className='px-0'>
        <img src={banner} className='img-fluid' alt="Banner" />
      </Container>
      <Container fluid>
        {leadershipData.map((leader, index) => (
          <Row key={index} className='mb-5 mb-lg-0'>
            {index % 2 === 0 ? (
              <>
                <Col xs={12} lg={6} className='px-0'>
                  <img src={leader.imgSrc} className='img-fluid' alt={leader.name} />
                </Col>
                <Col xs={12} lg={6} className='p-lg-5 p-3 d-flex align-items-center'>
                  <div>
                    <h2 className='text-uppercase fw-bold' style={{ letterSpacing: "2px" }}>
                      {leader.name}
                    </h2>
                    <h4>{leader.title}</h4>
                    <p className='fw-medium lh-base'>{leader.description}</p>
                    <div>
                      <FaFacebook className='fs-1 mx-2' />
                      <FaInstagram className='fs-1 mx-2' />
                      <FaLinkedin className='fs-1 mx-2' />
                    </div>
                  </div>
                </Col>
              </>
            ) : (
              <>
                <Col xs={12} lg={{ order: 'last', span: 6 }} className='px-0'>
                  <img src={leader.imgSrc} className='img-fluid' alt={leader.name} />
                </Col>
                <Col xs={12} lg={{ order: 'first', span: 6 }} className='p-lg-5 p-3  d-flex align-items-center'>
                  <div>
                    <h2 className='text-uppercase fw-bold' style={{ letterSpacing: "2px" }}>
                      {leader.name}
                    </h2>
                    <h4>{leader.title}</h4>
                    <p className='fw-medium lh-base'>{leader.description}</p>
                    <div>
                      <FaFacebook className='fs-1 mx-2' />
                      <FaInstagram className='fs-1 mx-2' />
                      <FaLinkedin className='fs-1 mx-2' />
                    </div>
                  </div>
                </Col>
              </>
            )}
          </Row>
        ))}
      </Container>
    </>
  );
}

export default Aboutleadership;
