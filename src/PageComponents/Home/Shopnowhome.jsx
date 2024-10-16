import React, { useState, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../../assets/CSS/shophome.css";
import axios from "axios";
import im from "../../assets/img/Home/Group 1000004137.png";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import ReCAPTCHA from "react-google-recaptcha";
import { IoMdClose } from "react-icons/io";
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

          try {
            const response = await axios.post('https://positivemetering.ae/contacts.php', 
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
          alert("Mobile number already exists.")
        } else if (error.response?.data?.message === "Validation error: Email already exists.") {
          newErrors.email = "Email already exists.";
          alert("Email already exists.");
          
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
            // sitekey="6LevTFsqAAAAAD5gvKBNZTzNtgPHTX38UAlQdV_E" // local
            // sitekey="6Le657EpAAAAADHl0EnUi-58y19XOcORV9dehjAz"
            // positive.in
            //  sitekey="6LfKtTgqAAAAAGiBqsRqk3xuGrMnqfIlKQgMpT4f"
            // positive.ae
            sitekey="6LdscT8qAAAAAPbFHPpVbW3vesSLNAIEqdZuB8Dq"
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
const Shopnowhome = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div
      style={{
        background: "rgb(239, 239, 239)",
        paddingTop: "50px",
        marginTop: "-71px",
      }}
    >
      <Container fluid className="shopnow py-sm-4 my-5 py-lg-0s">
        <Row>
          <Col
            md={8}
            xs={12}
            className="mt-5 mt-lg-0 justify-content-center d-flex text-center text-lg-start  "
          >
            <div className=" align-content-center">

              <h1
                className=" text-uppercase"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                {" "}
              "  Shop Now {" "}
              </h1>
              <h2
                className=" text-uppercase"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                Streamline Your Dispensing Process <span className=" fs-1"> !"</span>
              </h2>
              <button
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className=" bg-transparent border border-2 border-white text-white rounded-5 px-3 py-3 fw-bold fs-6"
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
            md={4}
            xs={12}
            className="d-none d-lg-flex align-items-end justify-content-end"
          >
            <img className="imshopnow" src={im} alt="Shop Now" title="Shop Now" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Shopnowhome;
