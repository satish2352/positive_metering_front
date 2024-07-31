import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../assets/CSS/shophome.css";
import axios from "axios";
import im from "../../assets/img/Home/Group 1000004137.png";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
function MyVerticallyCenteredModal(props) {
  const [fullname, setfullname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setmobile] = useState("");
  const [message, setmessage] = useState("");
  const [errors, setErrors] = useState({});

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
          alert("Thank you. I will connect with you soon.");
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
    <Modal {...props} centered>
      <Modal.Body className=" getquoteformback">
        <Modal.Header className="text-white" closeButton></Modal.Header>
        <form onSubmit={handleSubmit} className=" formbacks d-grid p-lg-5">
          <input
            type="text"
            name="fullName"
            className="bannerinp ms-2"
            placeholder="Full name"
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
            placeholder="Email Address"
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
            placeholder="Mobile Number"
            className="bannerinp ms-2"
            value={mobile}
            onChange={(e) => setmobile(e.target.value)}
            required
          />
          {errors.mobile && (
            <span className="error text-danger">{errors.mobile}</span>
          )}
          <textarea
            name="message"
            placeholder="Message"
            value={message}
            className="bannertxtarea bannertxtarea2 ps-3"
            onChange={(e) => setmessage(e.target.value)}
            required
          />
          {errors.message && (
            <span className="error text-danger">{errors.message}</span>
          )}
          <button
            type="submit"
            className="bannerbtn  w-50 py-2 m-3 me-4 float-end"
            
          >
            SEND
          </button>
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
              <h2
                className=" text-uppercase"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                "Streamline Your Dispensing Process
              </h2>
              <h1
                className=" text-uppercase"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                {" "}
                Shop Now <span className=" fs-1"> !"</span>{" "}
              </h1>
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
            <img className="imshopnow" src={im} alt="Shop Now" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Shopnowhome;
