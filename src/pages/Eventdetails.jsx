import React, { useState } from "react";
import "./blogdetails.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Image from "react-bootstrap/Image";
import blogdetails_img1 from "../assets/img/Blogdetails/blogdetails_img1.png";
import blogdetails_img2 from "../assets/img/Blogdetails/blogdetails_img2.png";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Form from "react-bootstrap/Form";
import Heading from "../components/Heading";
import ResponsiveImage from "./ResponsiveImage";

import imgmobile from '../assets/img/services/mobileview.png'
import imgtop from '../assets/img/services/diskimg.png'

function MyVerticallyCenteredModal(props) {

  const [fullname, setfullname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setmobile] = useState("");
  const [message, setmessage] = useState("");
  const [errors, setErrors] = useState({});

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

  // const handlesubmit = (e) => {
  //   e.preventDefault();
  //   alert('Thank you for your feedback')
  // }
  return (
    <Modal
      {...props}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Get A Quote Form
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <form onSubmit={handleSubmit} className=" d-grid p-lg-5">
          <input
            type="text"
            name="fullName"
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

      </Modal.Body>
    </Modal>
  );
}

function Eventdetails({ image, title, longetxt }) {
  window.scrollTo(0, 0);

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <ResponsiveImage mobileSrc={imgmobile} desktopSrc={imgtop} />
      <Heading heading={"Blog"} />
      <Container className="mt-3" heading={"Blog"}>
        <Row>
          <Col lg={8} md={8} sm={12}>
            <Image src={`${image}`} height={"500rem"} fluid />
          </Col>
          <Col lg={4} md={4} sm={12} className=" d-none d-lg-block">
            <Image
              src={blogdetails_img2}
              rounded
              style={{ height: "31rem", width: "30rem" }}
              fluid
            />
            <Button
              variant="dark"
              id="getaquote_button"
              style={{ height: "45px", width: "200px", borderRadius: "60px" }}
              onClick={() => setModalShow(true)}
            >
              Get A Quote
            </Button>
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </Col>
        </Row>
        <div className="mt-3"></div>
        <h1>
          {title}
        </h1>
      </Container>
      <div className="mt-3"></div>
      <Container>
        
        {longetxt}
      </Container>
      <div className="mb-5"></div>
    </>
  );
}



export default Eventdetails