import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Image from 'react-bootstrap/Image';
import blogdetails_img1 from '../assets/img/Blogdetails/blogdetails_img1.png'
import blogdetails_img2 from '../assets/img/Blogdetails/blogdetails_img2.png'

function Blogdetails() {
  window.scrollTo(0, 0);
  return (
    <>
      <h3 style={{ textAlign: 'center' }}>Blog</h3>
      <Container className='mt-3'>
        <Row>
          <Col lg={8} md={8} sm={12}>
            <Image src={blogdetails_img1} height={'500rem'} fluid />
          </Col>
          <Col lg={4} md={4} sm={12}>
            <Image src={blogdetails_img2} rounded style={{ height: '31rem', width:'30rem' }} fluid />
          </Col>
        </Row>
        <div className='mt-3'></div>
        <h1>PHOSPHATE DOSING IN PROPANE DEHYOGENATION POH UNIT INTEGRATED WITH POLYPROLENE</h1>
      </Container>
      <div className='mt-3'></div>
      <Container>
        <p>Sonatrach Refinery is the national state-owned oil company of Algeria. Founded in 1963, it is known today to be the largest company in Africa with 154 subsidiaries, and is often referred to as the first African oil “major”.</p>
        <p>The Sonatrach Refinery is to set up three Central Processing (CPF) facilities at:
        <p>1.Hassi Ba Hamou and Reg Mouaded Field (6 MMSCMD capacity)
        <p>2.Hassi Tidjerane Field (4 MMSCMD capacity)
        <p>3.Tinerkouk Field (4 MMSCMD capacity)
        <p>The three facilities are located close to each other in the Adrar province of Algeria
        <p>Positive Metering Pumps (India) Pvt Ltd, was awarded the following Chemical Injection Packages
        <p>1.pH Injection Skids
        <p>2.Corrosion Inhibitor Injection Skids
        <p>3.Biocide Injection Skids
        <p>4.Methanol Injection Skids
        <p>A set above all packages was designed, manufactured and dispatched to each of the above locations.
        Piping engineers, Process Equipment Engineers at Positive Metering Pumps company took special efforts in researching the needs of the prestigious customer. A quality Plan was drawn for the project considering the stringent requirements and best engineering practices. Each process while executing the project was thoroughly monitored. It resulted in offering Factory Acceptance Test confidently and it went smooth before dispatches.
        <p>The film shows Biocides Injection Packages kept ready just before dispatch after boxing. The place is the manufacturing facility of Positive Metering Pumps (I) Pvt Ltd ( Plant III, at Sinnar, Maharashtra, India )</p></p></p></p></p></p></p></p></p></p></p></p>
      </Container>
      <div className='mb-5'></div>
      
    </>
  )
}

export default Blogdetails
