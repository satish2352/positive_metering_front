import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/CSS/aboutus.css';
import banner from '../assets/img/About/Rectangle 4417.png';
import New from '../assets/img/About/Frame 19.png';
import lder1 from '../assets/img/About/Group 1000004058 (1).png';
import lder2 from '../assets/img/About/leadershipimg1.png';
import lder3 from '../assets/img/About/leadershipimg2.png';
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import Heading from '../components/Heading';

import ResponsiveImage from "./ResponsiveImage";


const leadershipData = [
  {
    imgSrc: lder1,
    name: "Mr. Sudhir Mutalik",
    title: "Founder And Managing Director",
    description: "The Founder of our company Mr. Sudhir Mutalik is a passionate mechanical engineer graduated from the reputed Government College of Engineering, Karad near Pune, India. Diesel Engines has been his interest for study since his university days. He was selected by the world's well-known Diesel Engine manufacturer Kirloskar Oil Engines Ltd through campus recruitment."
  },
  {
    imgSrc: lder2,
    name: "mr. jyotsana mutalilk",
    title: "CEO Finance Director",
    description: "The Founder of our company Mr. Sudhir Mutalik is a passionate mechanical engineer graduated from the reputed Government College of Engineering, Karad near Pune, India. Diesel Engines has been his interest for study since his university days. He was selected by the world's well-known Diesel Engine manufacturer Kirloskar Oil Engines Ltd through campus recruitment."
  },
  {
    imgSrc: lder3,
    name: "mr. MALHAR mutalilk",
    title: "Cheif Technical Manager",
    description: "The Founder of our company Mr. Sudhir Mutalik is a passionate mechanical engineer graduated from the reputed Government College of Engineering, Karad near Pune, India. Diesel Engines has been his interest for study since his university days. He was selected by the world's well-known Diesel Engine manufacturer Kirloskar Oil Engines Ltd through campus recruitment."
  },
  {
    imgSrc: lder2,
    name: "ms. madhuli mutalilk",
    title: "Cheif Technical Manager",
    description: "The Founder of our company Mr. Sudhir Mutalik is a passionate mechanical engineer graduated from the reputed Government College of Engineering, Karad near Pune, India. Diesel Engines has been his interest for study since his university days. He was selected by the world's well-known Diesel Engine manufacturer Kirloskar Oil Engines Ltd through campus recruitment"
  }
];


const Aboutleadership = () => {
  window.scrollTo(0, 0);

  return (
    <>
      {/* <Heading heading="leadership"/> */}

      <Container fluid className='px-0'>
        <ResponsiveImage mobileSrc={banner} desktopSrc={banner} />
      </Container>
      <Container fluid className='leadershippara mt-1'>
        {leadershipData.map((leader, index) => (
          <Row key={index} className='mb-5 mb-lg-0'>
            {index % 2 === 0 ? (
              <>
                <Col xs={12} lg={6} className='px-0'>
                  <img src={leader.imgSrc} className='img-fluid' alt={leader.name} />
                </Col>
                <Col xs={12} lg={6} className='p-lg-5 p-3 d-flex align-items-center'>
                  <div >
                    <h2 className='text-uppercase fw-bold' style={{ letterSpacing: "2px",fontFamily : 'Roboto' , fontSize:'48px' , paddingLeft:'20px'}}>
                      {leader.name}
                    </h2>
                    <h4 style={{paddingLeft:'20px'}}>{leader.title}</h4>
                    <p className='fw-medium lh-base' style={{fontFamily : 'Roboto', textAlign:'justify' , paddingLeft:'20px' , paddingRight:'20px'}}>{leader.description}</p>
                    <div style={{paddingLeft:'20px'}}>
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
                    <h2 className='text-uppercase fw-bold' style={{ letterSpacing: "2px",fontFamily : 'Roboto' , fontSize:'48px' , paddingLeft:'20px'}}>
                      {leader.name}
                    </h2>
                    <h4 style={{paddingLeft:'20px'}}>{leader.title}</h4>
                    <p className='fw-medium lh-base' style={{fontFamily : 'Roboto', textAlign:'justify' , paddingLeft:'20px' , paddingRight:'20px'}}>{leader.description}</p>
                    <div style={{paddingLeft:'20px'}}>
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
      <div className='spaceing'></div>
    </>
  );
}

export default Aboutleadership;
