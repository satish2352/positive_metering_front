import React, { useState } from "react";
import Heading from "../components/Heading";
import imgmobile from "../assets/img/services/mobileview.png";
import imgtop from "../assets/img/services/diskimg.png";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import formImg from "../assets/img/Career/image-removebg-preview (89) 1.png";
import Image from 'react-bootstrap/Image';
import '../assets/CSS/career.css'
import ResponsiveImage from "./ResponsiveImage";

const Career = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setmobile] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");
  const [uploadcv, setuploadcv] = useState("");

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!name.trim()) {
      errors.name = " Name is required";
      isValid = false;
    }

    if (!mobile.trim()) {
      errors.mobile = "mobile is required";
      isValid = false;
    }
    if (!email.trim()) {
      errors.email = "email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "invalid email address";
      isValid = false;
    }

    if (!mobile) {
      errors.mobile = "Mobile number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(mobile)) {
      errors.mobile = "Mobile number must be exactly 10 digits";
      isValid = false;
    }
    if (!subject.trim()) {
      errors.subject = "subject is required";
      isValid = false;
    }

    if (!message.trim()) {
      errors.message = "message is required";
      isValid = false;
    }

    if (!uploadcv.trim()) {
      errors.uploadcv = "cv is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };
  console.log("errors", errors);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      let newData = {
        name,

        mobile,
        subject,
        message,
        uploadcv,
      };
      alert("Data Submited Success..");
      console.log("newData", newData);
    }
  };

  window.scrollTo(0, 0);
  return (
    <>
      <ResponsiveImage mobileSrc={imgmobile} desktopSrc={imgtop} />

      <Container className=" creerback">
        <Row className="d-flex justify-content-center  py-5">
          <Heading heading={"career OPPORTUNITIES"} />
          <Col xs={11} mg={10} className="p-lg-5 pb-5 border-0 bg-white my-lg-5 shadow-lg">
            <Heading heading={"UPLOAD YOUR CV"} />
            <Container>
              <Form onSubmit={handleSubmit}>
                <Row className="">
                  <Col xl={6}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      {errors.name && (
                        <span className="error text-danger">{errors.name}</span>
                      )}
                    </Form.Group>
                  </Col>

                  <Col xl={6}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Email Id</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {errors.email && (
                        <span className="error text-danger">
                          {errors.email}
                        </span>
                      )}
                    </Form.Group>
                  </Col>
                  <Col xl={6}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="enter your phone"
                        value={mobile}
                        onChange={(e) => setmobile(e.target.value)}
                      />
                      {errors.mobile && (
                        <span className="error text-danger">
                          {errors.mobile}
                        </span>
                      )}
                    </Form.Group>
                  </Col>
                  <Col xl={6}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Subject</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="enter your subject"
                        value={subject}
                        onChange={(e) => setsubject(e.target.value)}
                      />
                      {errors.subject && (
                        <span className="error text-danger">
                          {errors.subject}
                        </span>
                      )}
                    </Form.Group>
                  </Col>
                  <Col xl={12}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Upload CV</Form.Label>
                      <Form.Control
                        type="file"
                        placeholder="upload cv"
                        value={uploadcv}
                        onChange={(e) => setuploadcv(e.target.value)}
                      />
                      {errors.uploadcv && (
                        <span className="error text-danger">
                          {errors.uploadcv}
                        </span>
                      )}
                    </Form.Group>
                  </Col>

                  <Col xl={12}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        placeholder="enter your message"
                        as="textarea"
                        rows={3}
                        value={message}
                        onChange={(e) => setmessage(e.target.value)}
                      />
                      {errors.message && (
                        <span className="error text-danger">
                          {errors.message}
                        </span>
                      )}
                    </Form.Group>
                  </Col>
                </Row>
                <div className="text-center text-center mt-xl-5 mb-xl-4">
                  <Button
                    variant="danger"
                    type="submit"
                    className="py-3 px-4 "
                    style={{ borderRadius: "30px", letterSpacing: "2px" }}
                  >
                    Send Message
                  </Button>
                </div>
              </Form>
            </Container>
          </Col>
        </Row>
        <Image src={formImg} rounded fluid className="formImg d-none d-lg-block" />
      </Container>
    </>
  );
};

export default Career;
