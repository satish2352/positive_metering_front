import React, { useState, useRef } from "react";
import "./blogdetails.css";
import { IoMdClose } from "react-icons/io";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Image from "react-bootstrap/Image";
import blogdetails_img1 from "../assets/img/Blogdetails/blogdetails_img1.png";
import blogdetails_img2 from "../assets/img/Blogdetails/blogdetails_img2.png";
import { Helmet } from "react-helmet";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Form from "react-bootstrap/Form";
import Heading from "../components/Heading";
import ResponsiveImage from "./ResponsiveImage";

import imgmobile from "../assets/img/aa/mobile/blog PAGE.jpg";
import imgtop from "../assets/img/aa/baner/BANER blog.jpg";

import ReCAPTCHA from "react-google-recaptcha";
import { captchaKey } from "../App";

function MyVerticallyCenteredModal({ show, onHide }) {
  document.title = "Blogs | Positive Metering Pumps I Private Limited,Nashik - Manufacturer of Dosing System and Agitators"


  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
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
        const response = await axios.post("/carousal-form/addcarousalform", {
          name: fullname,
          email,
          mobile,
          message,
        });
        alert("Thank You..! We Will Connect With You Soon.");
        if (response.status === 200) {

          try {
            const response = await axios.post(`${window.location.href}contacts.php`,
              {
                name: fullname,
                email,
                mobile,
                message
              },
              {
                headers: {
                  'Content-Type': 'application/json', // Ensure you're sending JSON data
                },
              }
            );
            if (response.status === 200) {
              console.log('Email sent successfully');
            } else {
              console.log('Failed to send email');
            }
          } catch (error) {
            console.error('There was an error sending the email!', error);
            console.log('Error sending email');
          }
          // Reset form fields and state after successful submission
          setFullname("");
          setEmail("");
          setMobile("");
          setMessage("");
          setErrors({});
          setCaptchaVerified(false);
          if (captchaRef.current) {
            captchaRef.current.reset();
          }
        } else {
          console.log("Failed to submit data.");
          // Handle failed submission without alert
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        console.error("Error response data:", error.response?.data);

        const newErrors = { ...errors };
        // Check if the error is a validation error for mobile number or email
        if (error.response?.data?.message === "Validation error: Mobile number already exists.") {
          newErrors.mobile = "Mobile number already exists.";
        } else if (error.response?.data?.message === "Validation error: Email already exists.") {
          newErrors.email = "Email already exists.";
        } else {
          newErrors.general = "Failed to submit data. Please try again later.";
        }
        setErrors(newErrors);
      }
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Body className="getquoteformback">
        <div className="d-flex justify-content-end">
          <Button onClick={onHide} style={{ backgroundColor: 'transparent', border: 'none' }}>
            <IoMdClose style={{ color: "white", fontSize: "20px", backgroundColor: 'transparent' }} />
          </Button>
        </div>
        <form onSubmit={handleSubmit} className="formbacks d-grid p-lg-5">
          <input
            type="text"
            name="fullName"
            className="bannerinp ms-2"
            placeholder="Enter Full Name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            required
          />
          {errors.fullname && (
            <span className="error ms-2 fw-light text-danger">{errors.fullname}</span>
          )}
          <input
            type="email"
            name="email"
            className="bannerinp ms-2"
            placeholder="Enter Email Id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && (
            <span className="error ms-2 fw-light text-danger">{errors.email}</span>
          )}
          <input
            type="tel"
            name="mobileNumber"
            placeholder="Enter Mobile No."
            pattern="^\d{10}$"
            className="bannerinp ms-2"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
          {errors.mobile && (
            <span className="error ms-2 fw-light text-danger">{errors.mobile}</span>
          )}
          <textarea
            name="message"
            placeholder="Enter Message"
            value={message}
            style={{ marginLeft: "7px" }}
            className="bannertxtarea2 bannertxtarea ps-3"
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          {errors.message && (
            <span className="error ms-2 fw-light text-danger">{errors.message}</span>
          )}
          <ReCAPTCHA
            className="my-4 ms-2"
            ref={captchaRef}
            // sitekey="6Lf6nU4qAAAAANWj2IVet0GaphDxzp0DLfPHSLMF"
            // sitekey="6Le657EpAAAAADHl0EnUi-58y19XOcORV9dehjAz"
            // positive.in
            //  sitekey="6LfKtTgqAAAAAGiBqsRqk3xuGrMnqfIlKQgMpT4f"
            // positive.com
            // sitekey="6Lc9fHAqAAAAAHnziHljOuI8xEvd4VU-xTikN5Y4"
            // positive.ae
            // sitekey="6LdscT8qAAAAAPbFHPpVbW3vesSLNAIEqdZuB8Dq"
            sitekey={captchaKey}
            onChange={onChange}
          />
          {errors.captcha && (
            <span className="error ms-2 fw-light text-danger">{errors.captcha}</span>
          )}
          <button
            type="submit"
            className="bannerbtn w-50 py-2 m-3 me-4 float-end"
          >
            SUBMIT
          </button>
          {errors.general && (
            <div className="text-center mt-3 text-danger">
              {errors.general}
            </div>
          )}
        </form>
      </Modal.Body>
    </Modal>
  );
}

function Blogdetails({ image, title, longetxt }) {


  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:description" content="Read more about this exciting topic!" />
        <meta property="og:image" content={imgmobile} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
      </Helmet>

      <ResponsiveImage mobileSrc={imgmobile} desktopSrc={imgtop} />
      <Heading heading={"Blog"} />
      <Container className="mt-3" heading={"Blog"}>
        <Row className="d-flex justify-content-between align-content-center">
          <Col lg={8} md={8} sm={12} className="d-flex justify-content-center">
            <div className=" col-lg-7">
              <img src={image} className="img-fluid rounded-4" alt={title} title={title} fluid />
            </div>
          </Col>
          <Col lg={4} md={4} sm={12} className=" d-none d-lg-block">
            <Image
              src={blogdetails_img2}
              rounded

              style={{ height: "31rem", width: "30rem" }}
              alt={title}
              title={title}
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
        <h1 className=" fs-4">{title}</h1>
      </Container>
      <div className="mt-3 mx-3"></div>
      <Container>
        <div dangerouslySetInnerHTML={{ __html: longetxt }}></div>
      </Container>
      <div className="mb-5"></div>
    </>
  );
}

export default Blogdetails;
