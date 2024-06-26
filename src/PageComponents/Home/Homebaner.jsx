import React from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../../assets/CSS/homebanner.css'
import { TypeAnimation } from 'react-type-animation';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
const Homebaner = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Container className='homebannerback d-none d-lg-block' fluid>
        <Row>
          <Col lg={3}></Col>
          <Col lg={6} >
            <div className=' homebannertext p-5'> <div className='text-white fs-4 fw-bold'><span className=' fw-bolder  fs-1'>WELCOME</span> To Positive Meter</div>
              <p className=' text-white' style={{ textAlign: "justify" }}>Exploring new food with different transition form all Asian country especially from Cambodia that you can try at this place and get a good price from us as well we will make a good impact to our customers </p>
            </div>
          </Col>
          <Col lg={3} sm={12} className=' bannerform my-5'>
            <div class="contact-form">
              <h2 className='py-3'>CONTACT</h2>
              <form>
                <input type="text" name="fullName" className=" bannerinp" placeholder="Full name" required />
                <input type="email" name="email" placeholder="Email Address" className=" bannerinp" required />
                <input type="tel" name="mobileNumber" placeholder="Mobile Number" className=" bannerinp" required />
                <textarea name="message" placeholder="Message" className=" bannertxtarea" required></textarea>
                <button type="submit" className='bannerbtn px-4 py-2 m-3 me-4 float-end'>Send</button>
              </form>
            </div>
          </Col>
        </Row>

      </Container>
      <Container className='homebannerback2 d-block d-lg-none ' fluid>
        <Row>
          <Col lg={12} >
            <div className=' homebannertext2 py-4 px-2 m-2 '>
              <div className='text-white fs-1 ' ><span className=' fw-bolder ' style={{ color: "#EE585D", fontSize: "60px" }}>
              <TypeAnimation
        sequence={[
          `WELCOME`,
          1000,
          "",
        ]}
        speed={50}
        repeat={Infinity}
      /></span><br /> To Positive Meter</div>
              {/* <p className=' text-white fs-4' style={{ textAlign: "justify" }}>Exploring new food with different transition form all Asian country especially from Cambodia that you can try at this place and get a good price from us as well we will make a good impact to our customers </p> */}
            </div>
          </Col>

          <Col lg={3} sm={12}>
            <>
              <Button variant="primary" onClick={handleShow}
                className='bannerbtn px-4 py-2 m-3 me-4 float-end'>
                CONTACT
              </Button>

              <Modal show={show} onHide={handleClose}>
             
                <Modal.Body style={{  backgroundColor: "#EE585D"}}>
                <Modal.Header closeButton></Modal.Header>
                  <div className=' bannerform2 '>
                    <div class="contact-form mx-4 py-4">
                      <h2 className='py-3'>CONTACT</h2>
                      <form>
                        <input type="text" name="fullName" className=" bannerinp" placeholder="Full name" required />
                        <input type="email" name="email" placeholder="Email Address" className=" bannerinp" required />
                        <input type="tel" name="mobileNumber" placeholder="Mobile Number" className=" bannerinp" required />
                        <textarea name="message" placeholder="Message" className=" bannertxtarea" required></textarea>
                        <button type="submit" className='bannerbtn px-4 py-2 m-3 me-4 float-end border border-white'>Send</button>
                      </form>

                    </div>
                  </div>
                </Modal.Body>
              
              </Modal>
            </>

          </Col>
        </Row>

      </Container></>
  )
}

export default Homebaner