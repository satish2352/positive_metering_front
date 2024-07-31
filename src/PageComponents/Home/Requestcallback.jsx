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
        const response = await axios.post(
          "/carousal-form/addcarousalform",
          {
            name: fullname,
            email,
            mobile,
            message,
          }
        );
        if (response.status === 200) {
          alert("Thank you. I will connect with you soon.");
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
                    The Founder of our company Mr. Sudhir Mutalik is a
                    passionate mechanical engineer graduated from the reputed
                    Government College of Engineering, Karad near Pune, India.
                    Diesel Engines has been his interest for study since his
                    university days. He was selected by the world's well-known
                    Diesel Engine manufacturer Kirloskar Oil Engines Ltd through
                    campus recruitment. After working with KOEL for a short
                    while his love for Diesel Engines and precisely the
                    slider-crank mechanism attracted him towards Chemical Dosing
                    Pumps, the drive end of which also works on a similar
                    principle. After working over the product for a few years
                    and studying applications in various sectors Positive
                    Metering Pumps company was founded in 1996 for manufacturing
                    of Chemical Dosing Pumps and Skid Mounted Chemical Dosing
                    Systems. With a vision to "Simplify Chemical Treatments in
                    the world" after 25 years today Positive Metering Pumps (I)
                    Pvt Ltd has done more than 125,000 installations of various
                    products in 40 different countries of the world.
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
                      <label className="requestinputlb ms-2 p-2">Full Name</label>
                      <input
                        type="text"
                        className="requestinput"
                        placeholder="Enter Full Name"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                      />
                      {errors.fullname && (
                        <span className="error text-danger">{errors.fullname}</span>
                      )}
                    </div>
                    <div className="d-grid">
                      <label className="requestinputlb ms-2 p-2">Email</label>
                      <input
                        type="text"
                        className="requestinput"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {errors.email && (
                        <span className="error text-danger">{errors.email}</span>
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
                        <span className="error text-danger">{errors.mobile}</span>
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
                        <span className="error text-danger">{errors.message}</span>
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
                      <label className="requestinputlb ms-2 p-2">Full Name</label>
                      <input
                        type="text"
                        className="requestinput"
                        placeholder="Enter Full Name"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                      />
                      {errors.fullname && (
                        <span className="error text-danger">{errors.fullname}</span>
                      )}
                    </div>
                    <div className="d-grid">
                      <label className="requestinputlb ms-2 p-2">Email</label>
                      <input
                        type="text"
                        className="requestinput"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {errors.email && (
                        <span className="error text-danger">{errors.email}</span>
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
                        <span className="error text-danger">{errors.mobile}</span>
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
                        <span className="error text-danger">{errors.message}</span>
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
