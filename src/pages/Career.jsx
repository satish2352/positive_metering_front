import React, { useRef, useState } from "react";
import axios from "axios";
import Heading from "../components/Heading";
import imgmobile from "../assets/img/aa/mobile/career PAGE.jpg";
import imgtop from "../assets/img/aa/baner/BANER career.jpg";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import formImg from "../assets/img/Career/image-removebg-preview (89) 1.png";
import Image from "react-bootstrap/Image";
import "../assets/CSS/career.css";
import ResponsiveImage from "./ResponsiveImage";
import ReCAPTCHA from "react-google-recaptcha";

const Career = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [uploadcv, setUploadcv] = useState(null);
  const captchaRef = useRef(null);
  const fileInputRef = useRef(null);
  const [errors, setErrors] = useState({});
  const [isCaptchaVerified, setCaptchaVerified] = useState(false);

  const onChange = (value) => {
    setCaptchaVerified(true);
    console.log(value);
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!name.trim()) {
      errors.name = "Name is Required";
      isValid = false;
    }

    if (!mobile.trim()) {
      errors.mobile = "Mobile No is Required";
      isValid = false;
    } else if (!/^\d{10}$/.test(mobile)) {
      errors.mobile = "Mobile number must be exactly 10 digits";
      isValid = false;
    }

    if (!email.trim()) {
      errors.email = "Email Id is Required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid Email ID";
      isValid = false;
    }

    if (!subject.trim()) {
      errors.subject = "Subject Is Required";
      isValid = false;
    }

    if (!message.trim()) {
      errors.message = "Message Is Required";
      isValid = false;
    }

    if (!uploadcv) {
      errors.uploadcv = "CV Is Required";
      isValid = false;
    } else {
      const allowedExtensions = /(\.pdf)$/i;
      if (uploadcv.size > 300 * 1024) {
        // 1MB size limit
        errors.uploadcv = "file size should be less than 300kb";
        isValid = false;
      } else if (!allowedExtensions.exec(uploadcv.name)) {
        errors.uploadcv = "file type not allowed. Allowed types: .pdf";
        isValid = false;
      }
    }

    if (!isCaptchaVerified) {
      errors.captcha = "Please complete the recaptcha before submitting.";
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
        const response = await axios.post(
          "uploadcv/create-uploadcv",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        alert("Thank you. we will connect with you soon..");
        console.log("Response data:", response.data);

        // Reset form fields
        setName("");
        setEmail("");
        setMobile("");
        setSubject("");
        setMessage("");
        setUploadcv(null);
        setCaptchaVerified(false);

        // Reset file input
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }

        // Reset reCAPTCHA
        if (captchaRef.current) {
          captchaRef.current.reset();
        }
      } catch (error) {
        console.error("Error submitting the form:", error);
        const newErrors = { ...errors };

        // Check if the error is a validation error for mobile number or email
        if (
          error.response?.data?.message ===
          "Validation error: Phone number already exists."
        ) {
          newErrors.mobile = "Mobile number already exists.";
        } else if (
          error.response?.data?.message ===
          "Validation error: Email already exists."
        ) {
          newErrors.email = "Email already exists.";
        } else {
          newErrors.general = "Failed to submit data. Please try again later.";
        }

        setErrors(newErrors);
      }
    }
  };

  return (
    <>
      <ResponsiveImage mobileSrc={imgmobile} desktopSrc={imgtop} />

      <Container fluid className="creerback">
        <Row className="d-flex justify-content-center py-5">
          {/* <Heading heading={"career OPPORTUNITIES"} /> */}
          <Col
            xs={11}
            md={10}
            className="p-lg-5 pb-5 border-0 bg-white my-lg-5 shadow-lg"
          >
            <h4 className="text-center upcv py-3">
              Want To Make Career With Us
            </h4>
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
                      <Form.Label>Mobile No.</Form.Label>
                      <Form.Control
                        type="tel"
                        placeholder="Enter Your Mobile No."
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
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
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>
                        Upload CV{" "}
                        <span
                          className=" text-danger"
                          style={{ fontSize: "13px" }}
                        >
                          (file size should be less than 400kb and PDF only)
                        </span>
                      </Form.Label>
                      <Form.Control
                        type="file"
                        accept=".pdf"
                        onChange={(e) => setUploadcv(e.target.files[0])}
                        ref={fileInputRef} // Assign ref to file input
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
                </Row>
                <Row>
                  <Col xl={4}>
                    <ReCAPTCHA
                      ref={captchaRef}
                      //  testserver
                      sitekey="6Ld6HxwqAAAAAMOTx6ZQC9PINxSPNpfAsWnO9_Ni"
                      // local
                      // sitekey="6Le657EpAAAAADHl0EnUi-58y19XOcORV9dehjAz"
                      onChange={onChange}
                    />
                    {errors.captcha && (
                      <span className="error text-danger">
                        {errors.captcha}
                      </span>
                    )}
                  </Col>
                  <Col className="text-center text-center mt-xl-5 mb-xl-4" sm={4}>
                    <Button
                      variant="danger"
                      type="submit"
                      className="py-3 px-5  fs-6"
                      style={{
                        borderRadius: "30px",
                        letterSpacing: "2px",
                        backgroundColor: "#E84C52",
                      }}
                    >
                      Submit
                    </Button>
                  </Col>

                  <Col sm={4}>
                    <Image
                      src={formImg}
                      rounded
                      fluid
                      className="img-fluid d-none d-lg-block"
                    />
                  </Col>
                </Row>
              </Form>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Career;
