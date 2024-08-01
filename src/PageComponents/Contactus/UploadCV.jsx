import React, { useRef, useState } from "react";
import Heading from "../../components/Heading";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import formImg from "../../assets/img/Contactus/image-removebg-preview (89) 1.png";
import Image from "react-bootstrap/Image";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

const UploadCV = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [isCaptchaVerified, setCaptchaVerified] = useState(false);
  const captchaRef = useRef(null);

  const onChange = (value) => {
    setCaptchaVerified(true);
    console.log(value);
  };

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
      errors.mobile = "Mobile number is required";
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

    if (!message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    }

    if (!isCaptchaVerified) {
      errors.captcha = "Please complete the reCAPTCHA before submitting.";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("subject", subject);
        formData.append("message", message);
        formData.append("phone", mobile);

        // Log the FormData entries
        for (let pair of formData.entries()) {
          console.log(`${pair[0]}: ${pair[1]}`);
        }

        const response = await axios.post(
          "/getintouch/add-getintouch",
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Server Response:", response.data);

        // Reset form fields and state after successful submission
        setName("");
        setEmail("");
        setSubject("");
        setMobile("");
        setMessage("");
        setErrors({});
        setCaptchaVerified(false);

        // Reset reCAPTCHA
        if (captchaRef.current) {
          captchaRef.current.reset();
        }

        alert("Data Submitted Successfully.");
      } catch (error) {
        console.error("Error submitting data:", error);
        console.error("Error response data:", error.response?.data);
        alert("Failed to submit data. Please try again later.");
      }
    }
  };

  return (
    <>
      <Container fluid style={{ position: "relative" }} id="target-element-id">
        <Row className="d-flex justify-content-center getintouchbg py-5 ">
          <Col
            xs={11}
            md={10}
            className="p-lg-5 pb-3 border-0 bg-white my-lg-5 shadow-lg"
          >
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
                      placeholder="Enter Your Name"
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
                      placeholder="Enter Your Email Id"
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
                    <Form.Label>Mobile No.</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter Your Mobile No."
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
                      placeholder="Enter Your Subject"
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
                      placeholder="Enter Your Message"
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

                <Col xl={12}>
                  <ReCAPTCHA
                    ref={captchaRef}
                    //  testserver
                    sitekey="6Ld6HxwqAAAAAMOTx6ZQC9PINxSPNpfAsWnO9_Ni"
                    // local
                    // sitekey="6Le657EpAAAAADHl0EnUi-58y19XOcORV9dehjAz"
                    onChange={onChange}
                  />
                  {errors.captcha && (
                    <span className="error text-danger">{errors.captcha}</span>
                  )}
                </Col>

               
              </Row>
              <div className="text-center text-center mt-xl-5 mb-xl-4">
                  <Button
                    variant="danger"
                    type="submit"
                    className="py-3 px-5  fs-6"
                    style={{ borderRadius: "30px", letterSpacing: "2px" }}
                  >
                    Submit
                  </Button>
                </div>
              <div className="text-center mt-xl-5 mb-xl-4"></div>
            </Form>
          </Col>
        </Row>
        <Image
          className="formImg2 d-none d-lg-block"
          src={formImg}
          rounded
          fluid
        />
      </Container>
    </>
  );
};

export default UploadCV;
