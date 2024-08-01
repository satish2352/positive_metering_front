import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import "../../assets/CSS/requestcall.css";
import homepagevideo from "../../assets/video/positive.mp4";
import mobilepagevideo from "../../assets/video/WhatsApp-Video-2024-07-18-at-115.mp4";

const Requestcallback = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

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
      errors.email = "Invalid Email Id";
      isValid = false;
    }

    if (!mobile.trim()) {
      errors.mobile = "Mobile is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(mobile)) {
      errors.mobile = "Mobile No Must Be  10 Digits";
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
          alert("Thank you. we will connect with you soon.");
          setFullname("");
          setEmail("");
          setMobile("");
          setMessage("");
          setErrors({});
        } else {
          setSuccessMessage("Failed to submit data.");
        }
      } catch (error) {
        setSuccessMessage("Failed to submit data.");
        console.error("Error submitting form:", error);
      }
    }
  };

  return (
    <>
      <Container fluid className="requestcallbackcontainer d-none d-md-block">
        <video
          autoPlay
          loop
          muted
          poster="https://assets.codepen.io/6093409/river.jpg"
          style={{ width: "100%" }}
          className="viod"
        >
          <source src={homepagevideo} type="video/mp4" />
        </video>

        <div className="requestcallback d-flex align-items-center justify-content-evenly">
          <Container className="p-4">
            <Row className="d-flex justify-content-evenly fw-bold">
              <Col md={7} className="requestcallbackleft">
                <div className="requestcallbacklefttop">
                  <h4 className="text-white text-center py-3">
                    PLUNGER TYPE DOSING PUMPS
                  </h4>
                </div>
                <div className="p-3 p-lg-5" style={{ textAlign: "justify" }}>
                  <p>
                    <div class="title">Plunger Type Dosing Pumps</div>
                    <div class="description">
                      Unlock unparalleled dosing precision and reliability with
                      our state-of-the-art Plunger Type Dosing Pumps. Engineered
                      to surpass industry standards and meet the most demanding
                      applications, our pumps redefine excellence in fluid
                      handling.
                    </div>
                    <ul class="features">
                      <li>Plunger-style dosing pump featuring gland packing</li>
                      <li>Accurate metering instruments</li>
                      <li>
                        Consistent metering accuracy regardless of back pressure
                      </li>
                      <li>
                        Flow rate linearly related to changes in stroke length
                      </li>
                      <li>
                        Optional external setup for flushing the gland packing
                      </li>
                    </ul>
                  </p>
                </div>
              </Col>
              <Col md={4} className="requestcallbackleft">
                <div className="requestcallbacklefttop">
                  <h4 className="text-white text-center py-3 text-uppercase">
                    Request A CALL BACK
                  </h4>
                </div>
                <div className="p-3 px-5">
                  <form onSubmit={handleSubmit}>
                    <div className="d-grid fw-bold">
                      <label className="requestinputlb ms-2 p-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="requestinput"
                        placeholder="Enter Full Name"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        required
                      />
                      {errors.fullname && (
                        <span className="error text-danger">
                          {errors.fullname}
                        </span>
                      )}
                    </div>
                    <div className="d-grid">
                      <label className="requestinputlb ms-2 p-2">
                        Email Id
                      </label>
                      <input
                        type="text"
                        className="requestinput"
                        placeholder="Enter Email Id"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      {errors.email && (
                        <span className=" ms-4 fw-light text-danger">
                          {errors.email}
                        </span>
                      )}
                    </div>
                    <div className="d-grid">
                      <label className="requestinputlb ms-2 p-2">
                        Mobile No
                      </label>
                      <input
                        type="text"
                        className="requestinput"
                        placeholder="Enter Mobile No"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        required
                      />
                      {errors.mobile && (
                        <span className=" ms-4 fw-light text-danger">
                          {errors.mobile}
                        </span>
                      )}
                    </div>
                    <div className="d-grid">
                      <label className="requestinputlb ms-2 p-2">Message</label>
                      <textarea
                        className="requesttext"
                        placeholder="Enter Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      ></textarea>
                      {errors.message && (
                        <span className="error text-danger">
                          {errors.message}
                        </span>
                      )}
                    </div>
                    <div className="d-flex justify-content-end pt-4">
                      <button
                        className="px-4 py-2 text-center formrequestbtn"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>

      <Container fluid className="requestcallbackcontainer d-block d-md-none">
        <video
          autoPlay
          loop
          muted
          poster="https://assets.codepen.io/6093409/river.jpg"
          style={{ width: "100%" }}
          className="viod"
        >
          <source src={mobilepagevideo} type="video/mp4" />
        </video>

        <div className="requestcallback d-flex align-items-center justify-content-evenly">
          <Container className="p-4">
            <Row className="d-flex justify-content-evenly fw-bold">
              <Col md={7} className="requestcallbackleft">
                <div className="requestcallbacklefttop">
                  <h4 className="text-white text-center py-3">
                    PLUNGER TYPE DOSING PUMPS
                  </h4>
                </div>
                <div className="p-3 p-lg-5" style={{ textAlign: "justify" }}>
                  <p>
                    Dosing Pumps are extensively utilized in a range of
                    industries to maintain precise chemical dosing and control.
                    Dosing Pumps economy in India has played a essential role in
                    various sectors, like Oil and Gas, Water treatment,
                    Chemical, Pharmaceutical, Agriculture, which brings
                    Precision, cost-effectiveness and efficiency in various
                    processes. This enhances productivity and quality standards.
                  </p>
                </div>
              </Col>
              <Col md={4} className="requestcallbackleft">
                <div className="requestcallbacklefttop">
                  <h4 className="text-white text-center py-3 text-uppercase">
                    Request A CALL BACK
                  </h4>
                </div>
                <div className="p-3 px-5">
                  <form onSubmit={handleSubmit}>
                    <div className="d-grid fw-bold requestinputlb">
                      <label className="requestinputlb ms-2 p-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="requestinput"
                        placeholder="Enter Full Name"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                      />
                      {errors.fullname && (
                        <span className=" text-danger">{errors.fullname}</span>
                      )}
                    </div>
                    <div className="d-grid">
                      <label className="requestinputlb ms-2 p-2">
                        Email id
                      </label>
                      <input
                        type="text"
                        className="requestinput"
                        placeholder="Enter Email id"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {errors.email && (
                        <span className=" text-danger">{errors.email}</span>
                      )}
                    </div>
                    <div className="d-grid">
                      <label className="requestinputlb ms-2 p-2">Mobile</label>
                      <input
                        type="text"
                        className="requestinput"
                        placeholder="Enter Mobile"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                      />
                      {errors.mobile && (
                        <span className=" text-danger">{errors.mobile}</span>
                      )}
                    </div>
                    <div className="d-grid">
                      <label className="requestinputlb ms-2 p-2">Message</label>
                      <textarea
                        className="requesttext"
                        placeholder="Enter Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                      {errors.message && (
                        <span className=" text-danger">{errors.message}</span>
                      )}
                    </div>
                    <div className="d-flex justify-content-end pt-4">
                      <button
                        className="px-4 py-2 text-center formrequestbtn"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default Requestcallback;
