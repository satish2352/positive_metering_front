import React, { useState } from "react";
import Heading from "../../components/Heading";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import formImg from "../../assets/img/Contactus/image-removebg-preview (89) 1.png";
const UploadCV = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }
    if (!subject.trim()) {
      errors.subject = "Subject is required";
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
    if (!message.trim()) {
      errors.message = "message is required";
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
        email,
        mobile,
        subject,
        message,
      };
      alert("Data Submited Success..");
      console.log("newData", newData);
    }
  };

  return (
    <>
      <Container fluid>
        <Row className="d-flex justify-content-center getintouchbg py-5">
          <Col xs={10} className="p-5 border-0 bg-white my-lg-5 shadow-lg">
            <Heading heading={"Get in touch"} />
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
                      <span className="error text-danger">{errors.email}</span>
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
                      placeholder="enter your phone number"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                    />
                    {errors.mobile && (
                      <span className="error text-danger">{errors.mobile}</span>
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
                      onChange={(e) => setSubject(e.target.value)}
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
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      placeholder="enter your message"
                      as="textarea"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    {errors.message && (
                      <span className="error text-danger">
                        {errors.message}
                      </span>
                    )}
                  </Form.Group>
                </Col>
              </Row>
              <div className="text-center mt-xl-5 mb-xl-4">
                <Button
                  variant="danger"
                  type="submit"
                  className="p-3 "
                  style={{ borderRadius: "30px", letterSpacing: "2px" }}
                >
                  Send Message
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
        <img className="formImg2" src={formImg} alt="" />
      </Container>
    </>
  );
};

export default UploadCV;
