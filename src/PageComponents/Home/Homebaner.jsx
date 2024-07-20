import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import banner1 from "../../assets/img/Home/2540 x 1018 (1).jpg";
import banner2 from "../../assets/img/Home/2540 x 1018 (2).jpg";
import banner3 from "../../assets/img/Home/2540 x 1018.jpg";
import banner1Mobile from "../../assets/img/Home/Rectangle 4430.png";
import banner2Mobile from "../../assets/img/Home/image 45.png";
import banner3Mobile from "../../assets/img/Home/Group 1000004134.png";
import { Col, Row, Container, Modal, Button } from 'react-bootstrap';
import { TypeAnimation } from "react-type-animation";
import "../../assets/CSS/homebanner.css";
import axios from 'axios';

function Homebaner() {
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [fullname, setfullname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setmobile] = useState("");
  const [message, setmessage] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!fullname.trim()) {
      errors.fullname = "Full Name is required";
      isValid = false;
    }

    if (!email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email address";
      isValid = false;
    }

    if (!mobile.trim()) {
      errors.mobile = "Mobile is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(mobile)) {
      errors.mobile = "Mobile number must be exactly 10 digits";
      isValid = false;
    }

    if (!message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post('/carousal-form/addcarousalform', {
          name: fullname,
          email,
          mobile,
          message,
        });
        if (response.status === 200) {
          alert("Data Submitted Successfully.");
          console.log("newData", response.data);
        } else {
          alert("Failed to submit data.");
        }
        setEmail("")
        setmessage("")
        setmobile("")
        setfullname("")
          } catch (error) {
        alert("Failed to submit data.");
        console.error("Error submitting form:", error);
      }
    }
  };

  const cararray = [
    { img: banner1, view: 'large' },
    { img: banner2, view: 'large' },
    { img: banner3, view: 'large' },
    { img: banner1Mobile, view: 'mobile' },
    { img: banner2Mobile, view: 'mobile' },
    { img: banner3Mobile, view: 'mobile' }
  ];

  return (
    <>
      <Carousel className='homebannerback'>
        {cararray.filter(a => (isMobile ? a.view === 'mobile' : a.view === 'large')).map((a, index) => (
          <Carousel.Item key={index} interval={1000}>
            <Image src={a.img} rounded className='img-fluid carsimg' />
            <Carousel.Caption>
              <Row className="sticky-top">
                <Col lg={1}></Col>
                <Col lg={9}>
                  <div className="homebannertext p-10">
                    <div className={`text-white ${isMobile ? 'fs-1' : 'fs-4 fw-bold'}`}>
                      <span className="fw-bolder" style={{ color: "white", fontSize: isMobile ? "60px" : "inherit" }}>
                        <TypeAnimation
                          sequence={[`WELCOME`, 1000, ""]}
                          speed={50}
                          repeat={Infinity}
                          style={{fontSize:'30px'}}
                        />
                      </span>
                      <br /> To Positive Meter
                    </div>
                    {!isMobile && (
                      <p className="text-white" style={{ textAlign: "justify" }}>
                        Exploring new food with different transitions from all Asian countries especially from Cambodia that you can try at this place and get a good price from us as well. We will make a good impact on our customers.
                      </p>
                    )}
                  </div>
                </Col>
                <Col lg={3} sm={12} className="bannerform my-5  sticky-top">
                  <div className="contact-form">
                    <h2 className="py-3">CONTACT</h2>
                    <form onSubmit={handleSubmit} className="sticky-top">
                      <input
                        type="text"
                        name="fullName"
                        className="bannerinp"
                        placeholder="Full name"
                        value={fullname}
                        onChange={(e) => setfullname(e.target.value)}
                        required
                      />
                      {errors.fullname && (
                        <span className="error text-danger">{errors.fullname}</span>
                      )}
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className="bannerinp"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      {errors.email && (
                        <span className="error text-danger">{errors.email}</span>
                      )}
                      <input
                        type="tel"
                        name="mobileNumber"
                        placeholder="Mobile Number"
                        className="bannerinp"
                        value={mobile}
                        onChange={(e) => setmobile(e.target.value)}
                        required
                      />
                      {errors.mobile && (
                        <span className="error text-danger">{errors.mobile}</span>
                      )}
                      <textarea
                        name="message"
                        placeholder="Message"
                        className="bannertxtarea"
                        value={message}
                        onChange={(e) => setmessage(e.target.value)}
                        required
                      />
                      {errors.message && (
                        <span className="error text-danger">{errors.message}</span>
                      )}
                      <button
                        type="submit"
                        className="bannerbtn px-5 py-2 m-3 me-4 float-end"
                      >
                        SEND
                      </button>
                    </form>
                  </div>
                </Col>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default Homebaner;
