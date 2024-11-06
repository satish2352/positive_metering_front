import React, { useState, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { Col, Container, Row, Button } from "react-bootstrap";
import "../../assets/CSS/getaquote.css";
import im1 from "../../assets/img/About/Group 1000003851.png";
import im from "../../assets/img/About/Layer71.png";
import ResponsiveImage from "../../pages/ResponsiveImage";
import imgmobile from "../../assets/img/About/aboutmobileview.png";
import ReCAPTCHA from "react-google-recaptcha";
import { IoMdClose } from "react-icons/io";
import { captchaKey } from "../../App";

// Form component
const QuoteForm = ({ onClose }) => {
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
        if (response.status === 200) {
          alert("Thank You..! We Will Connect With You Soon.");
          try {
            const response = await axios.post('https://positivemetering.in/contacts.php',
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
          console.log("newData", response.data);
          onClose && onClose(); // Close the modal if onClose function is provided
          resetForm();
        } else {
          alert("Failed to submit data.");
        }
      } catch (error) {
        alert("Failed to submit data.");
        console.error("Error submitting form:", error);
      }
    }
  };

  const resetForm = () => {
    setFullname("");
    setEmail("");
    setMobile("");
    setMessage("");
    setErrors({});
    captchaRef.current.reset();
    setCaptchaVerified(false);
  };

  const renderError = (error) => (
    <span className="error text-danger">{error}</span>
  );

  return (
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
        // sitekey="6LfKtTgqAAAAAGiBqsRqk3xuGrMnqfIlKQgMpT4f"
        // positive.com
        // sitekey="6Lc9fHAqAAAAAHnziHljOuI8xEvd4VU-xTikN5Y4"
        // positive.ae
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
  );
};

// Modal component
function MyVerticallyCenteredModal(props) {
  return (
    <Modal {...props} centered>
      <Modal.Body className="getquoteformback">
        <div className="d-flex justify-content-end">
          <Button
            onClick={props.onHide}
            style={{ backgroundColor: "transparent", border: "none" }}
          >
            <IoMdClose
              style={{
                color: "white",
                fontSize: "20px",
                backgroundColor: "transparent",
              }}
            />
          </Button>
        </div>
        <QuoteForm onClose={props.onHide} />
      </Modal.Body>
    </Modal>
  );
}

// Main component
const Getaquote = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Container
      fluid
      className="my-1 mt-2 my-lg-0"
      style={{ position: "relative" }}
    >
      <Row className="getaquoteback">
        <Col lg={3} className="d-none d-lg-block">
          <img src={im} className="img-fluid h-50" alt="Contact" title="Contact" />
        </Col>
        <Col
          lg={6}
          className="getaquotebackone"
          style={{ letterSpacing: "3px" }}
        >
          <h1 className="p-5 text-white fw-light">
            "Streamline Your Dispensing Process{" "}
            <span className="fw-bold fs-1">Shop Now!</span>"
          </h1>
        </Col>
        <Col lg={3}>
          <img src={im1} alt="Get A Quote" title="Get A Quote" className="getaquotebackleftimg img-fluid" />
          <div className="getaquotebackleft text-center px-3">
            <h2 className="text-white mx-4 fs-4">
              Its Not Just About The Machinery..
            </h2>
            <h3 className="text-uppercase fw-bold fs-5">
              Its about the efficiency!!
            </h3>
            <button
              style={{ background: "#636262" }}
              onClick={() => setModalShow(true)}
              className="text-white border-0 fs-4 py-2 px-4 rounded-5"
            >
              Get A Quote
            </button>
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Getaquote;
