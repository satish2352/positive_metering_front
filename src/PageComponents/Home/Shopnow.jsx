import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../assets/CSS/shopnow.css";
import axios from "axios";
import im from "../../assets/img/Home/homepage img mobileview.png";
import Image from "react-bootstrap/Image";
import ResponsiveImage from "../../pages/ResponsiveImage";
import im1 from "../../assets/img/Home/image1.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ReCAPTCHA from "react-google-recaptcha";
import { IoIosCloseCircle } from "react-icons/io";

import { IoMdClose } from "react-icons/io";
import { captchaKey } from "../../App";


function MyVerticallyCenteredModal({ show, onHide }) {
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
          // Reset form fields and state after successful submission

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
          alert("Mobile number already exists.")
        } else if (error.response?.data?.message === "Validation error: Email already exists.") {
          newErrors.email = "Email already exists.";
          alert("Email already exists.")
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
            //  sitekey="6LevTFsqAAAAAD5gvKBNZTzNtgPHTX38UAlQdV_E"
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


const Shopnow = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Container fluid className="shopnow py-sm-4 py-lg-0">
      <Row>
        <Col
          md={3}
          xs={12}
          className="d-flex mt-5 justify-content-end align-items-center ls-2"
        >
          <h1 className="bannerH text-center fs-2" style={{ letterSpacing: "3px" }}>
            ADDRESS
          </h1>
        </Col>
        <Col
          md={6}
          xs={12}
          className=" justify-content-start d-flex text-center text-lg-start "
        >
          <div className=" align-content-center  mt-4  BannerT">
            <a href="" className="BannerT " style={{ textDecoration: "none" }}>
              Head Office, Nashik M-8, MIDC, Ambad, Nashik - 422010, India.
            </a>
            <br />
            <a
              href="tel:+91-253-6613206" aria-label="Positive Metering Pumps"
              className="BannerT "
              style={{ textDecoration: "none" }}
            >
              Phone: +91-253-6613206/6613218/6613214
            </a>
            <br />
            <a href="mailto:info@positivemetering.com" aria-label="Positive Metering Pumps" className="BannerT " style={{ textDecoration: "none" }}>
              Mail: info@positivemetering.com
            </a>
            <br />
            <button
              className=" BannerB mt-2 bg-transparent border border-4 border-danger text-white rounded-5 px-3 py-3 fw-bold fs-5"
              style={{ letterSpacing: "2px" }}
              onClick={() => setModalShow(true)}
            >
              {" "}
              CONTACT US
            </button>
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>
        </Col>
        <Col
          md={3}
          xs={12}
          className="d-none d-lg-flex align-items-end justify-content-end"
        >
          <img className="imshopnow" src={im1} alt="Shop Now" title="Shop Now" />
        </Col>
      </Row>
    </Container>
  );
};

export default Shopnow;
