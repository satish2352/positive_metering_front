import React, { useState,useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../assets/CSS/shopnow.css";
import axios from "axios";
import im from "../../assets/img/Home/homepage img mobileview.png";
import Image from "react-bootstrap/Image";
import ResponsiveImage from "../../pages/ResponsiveImage";
import im1 from "../../assets/img/Home/image.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ReCAPTCHA from "react-google-recaptcha";

function MyVerticallyCenteredModal(props) {
  const [fullname, setfullname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setmobile] = useState("");
  const [message, setmessage] = useState("");
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
        if (response.status === 200) {
          alert("Thank you. we will connect with you soon..");
          console.log("newData", response.data);
        } else {
          alert("Failed to submit data.");
        }
        setEmail("");
        setmessage("");
        setmobile("");
        setfullname("");
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
    <Modal {...props} centered closeButton>
      <Modal.Body className=" getquoteformback">
        <Modal.Header className="text-white" closeButton></Modal.Header>
        <form onSubmit={handleSubmit} className=" formbacks d-grid p-lg-5">
          <input
            type="text"
            name="fullName"
            className="bannerinp ms-2"
            placeholder="Enter Full Name"
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
            className="bannerinp ms-2"
            placeholder="Enter Email Id"
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
            placeholder="Enter Mobile No."
            className="bannerinp ms-2"
            value={mobile}
            onChange={(e) => setmobile(e.target.value)}
            required
          />
          {errors.mobile && (
            <span className=" ps-4 text-danger">{errors.mobile}</span>
          )}
          <textarea
            name="message"
            placeholder="Enter Message"
            value={message}
            style={{ marginLeft: "7px" }}
            className="bannertxtarea2 bannertxtarea ps-3 "
            onChange={(e) => setmessage(e.target.value)}
            required
          />
          {errors.message && (
            <span className="error text-danger">{errors.message}</span>
          )}
          <ReCAPTCHA
            className=" my-4 ms-2"
            ref={captchaRef}
            //  testserver
            // sitekey="6Ld6HxwqAAAAAMOTx6ZQC9PINxSPNpfAsWnO9_Ni"
            // local
            sitekey="6Le657EpAAAAADHl0EnUi-58y19XOcORV9dehjAz"
            onChange={onChange}
          />
          {errors.captcha && (
            <span className="error text-danger">{errors.captcha}</span>
          )}
          <button
            type="submit"
            className="bannerbtn w-50 py-2 m-3 me-4 float-end"
          >
            SUBMIT
          </button>
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
          <h2 className="bannerH text-center" style={{ letterSpacing: "3px" }}>
            ADDRESS
          </h2>
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
              href="tel:+91-253-6613206"
              className="BannerT "
              style={{ textDecoration: "none" }}
            >
              Phone: +91-253-6613206/6613218/6613214
            </a>
            <br />
            <a href="" className="BannerT " style={{ textDecoration: "none" }}>
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
          <img className="imshopnow" src={im1} alt="Shop Now" />
        </Col>
      </Row>
    </Container>
  );
};

export default Shopnow;
