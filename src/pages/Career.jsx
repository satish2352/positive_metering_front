import React, { useState } from "react";
import axios from "axios";
import Heading from "../components/Heading";
import imgmobile from "../assets/img/services/mobileview.png";
import imgtop from "../assets/img/services/diskimg.png";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import formImg from "../assets/img/Career/image-removebg-preview (89) 1.png";
import Image from 'react-bootstrap/Image';
import '../assets/CSS/career.css';
import ResponsiveImage from "./ResponsiveImage";

const Career = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [uploadcv, setUploadcv] = useState(null);

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!mobile.trim()) {
      errors.mobile = "Mobile is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(mobile)) {
      errors.mobile = "Mobile number must be exactly 10 digits";
      isValid = false;
    }

    if (!email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email address";
      isValid = false;
    }

    if (!subject.trim()) {
      errors.subject = "Subject is required";
      isValid = false;
    }

    if (!message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    }

    if (!uploadcv) {
      errors.uploadcv = "CV is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", mobile);
      formData.append("subject", subject);
      formData.append("message", message);
      formData.append("cv", uploadcv);

      try {
        const response = await axios.post("uploadcv/create-uploadcv", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        alert("Data Submitted Successfully");
        console.log("Response data:", response.data);
        setName("")
        setMessage("")
        setMobile("")
        setSubject("")
        setUploadcv("")
        setEmail("")
      } catch (error) {
        console.error("Error submitting the form:", error);
        alert("Failed to submit the form");
      }
    }
  };


  return (
    <>
      <ResponsiveImage mobileSrc={imgmobile} desktopSrc={imgtop} />

      <Container fluid className="creerback">
        <Row className="d-flex justify-content-center py-5">
          <Heading heading={"career OPPORTUNITIES"} />
          <Col xs={11} md={10} className="p-lg-5 pb-5 border-0 bg-white my-lg-5 shadow-lg">
            <h4 className="text-center upcv py-3">UPLOAD YOUR CV</h4>
            <Container>
              <Form onSubmit={handleSubmit}>
                <Row className="">
                  <Col xl={6}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      {errors.name && (
                        <span className="error text-danger">{errors.name}</span>
                      )}
                    </Form.Group>
                  </Col>

                  <Col xl={6}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Email Id</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {errors.email && (
                        <span className="error text-danger">{errors.email}</span>
                      )}
                    </Form.Group>
                  </Col>
                  <Col xl={6}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter your phone"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                      />
                      {errors.mobile && (
                        <span className="error text-danger">{errors.mobile}</span>
                      )}
                    </Form.Group>
                  </Col>
                  <Col xl={6}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Subject</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                      />
                      {errors.subject && (
                        <span className="error text-danger">{errors.subject}</span>
                      )}
                    </Form.Group>
                  </Col>
                  <Col xl={12}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Upload CV</Form.Label>
                      <Form.Control
                        type="file"
                        onChange={(e) => setUploadcv(e.target.files[0])}
                      />
                      {errors.uploadcv && (
                        <span className="error text-danger">{errors.uploadcv}</span>
                      )}
                    </Form.Group>
                  </Col>

                  <Col xl={12}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        placeholder="Enter your message"
                        as="textarea"
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                      {errors.message && (
                        <span className="error text-danger">{errors.message}</span>
                      )}
                    </Form.Group>
                  </Col>
                </Row>
                <div className="text-center text-center mt-xl-5 mb-xl-4">
                  <Button
                    variant="danger"
                    type="submit"
                    className="py-3 px-4"
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
