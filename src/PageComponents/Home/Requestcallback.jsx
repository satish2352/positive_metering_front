import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import "../../assets/CSS/requestcall.css";
import homepagevideo from '../../assets/video/VE Project 111.mp4';
import mobilepagevideo from '../../assets/video/WhatsApp-Video-2024-07-18-at-115.mp4';

const Requestcallback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!name.trim()) {
      errors.name = "Name is required";
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

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      let newData = {
        name,
        email,
        message,
      };

      try {
        const response = await axios.post("/requestcallbackform/add-requestcallback", newData);
        if (response.status === 200) {
          setSuccessMessage("Data submitted successfully");
          setName("");
          setEmail("");
          setMessage("");
          setErrors({});
        }
      } catch (error) {
        console.error("There was an error submitting the form!", error);
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
          style={{ width: '100%' }}
          className="viod"
        >
          <source src={homepagevideo} type="video/mp4" />
        </video>

        <div className="requestcallback d-flex align-items-center justify-content-evenly">
          <Container className="p-4">
            <Row className="d-flex justify-content-evenly fw-bold">
              <Col md={7} className="requestcallbackleft">
                <div className="requestcallbacklefttop">
                  <h4 className="text-white text-center py-3">PLUNGER TYPE DOSING PUMPS</h4>
                </div>
                <div className="p-3 p-lg-5 lh-3" style={{ textAlign: 'justify' }}>
                  <p>
                    Dosing Pumps are extensively utilized in a range of industries
                    to maintain precise chemical dosing and control. Dosing Pumps
                    economy in India has played a essential role in various sectors
                    , like Oil and Gas , Water treatment, Chemical, Pharmaceutical,
                    Agriculture, which brings Precision, costeffectiveness and
                    efficiency in various process. Which enhance Productivity and
                    Quality standards.
                  </p>
                </div>
              </Col>
              <Col md={4} className="requestcallbackleft">
                <div className="requestcallbacklefttop">
                  <h4 className="text-white text-center py-3 text-uppercase">Request A CALL BACK</h4>
                </div>
                <div className="p-3 px-5">
              
                  <form onSubmit={handleSubmit}>
                    <div className="d-grid fw-bold requestinputlb">
                      <label>Name</label>
                      <input
                        type="text"
                        className="requestinput"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      {errors.name && <span className="error text-danger">{errors.name}</span>}
                    </div>
                    <div className="d-grid requestinputlb">
                      <label>Email</label>
                      <input
                        type="text"
                        className="requestinput"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {errors.email && <span className="error text-danger">{errors.email}</span>}
                    </div>
                    <div className="d-grid requestinputlb">
                      <label>Message</label>
                      <input
                        type="text"
                        className="requestinput"
                        placeholder="Comment"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                      {errors.message && <span className="error text-danger">{errors.message}</span>}
                    </div>
                    <div className="d-flex justify-content-end pt-4">
                      <button className="px-4 py-2 text-center formrequestbtn" type="submit">
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
          style={{ width: '100%' }}
          className="viod"
        >
          <source src={mobilepagevideo} type="video/mp4" />
        </video>

        <div className="requestcallback d-flex align-items-center justify-content-evenly">
          <Container className="p-4">
            <Row className="d-flex justify-content-evenly fw-bold">
              <Col md={7} className="requestcallbackleft">
                <div className="requestcallbacklefttop">
                  <h4 className="text-white text-center py-3">PLUNGER TYPE DOSING PUMPS</h4>
                </div>
                <div className="p-3 p-lg-5" style={{ textAlign: 'justify' }}>
                  <p>
                    Dosing Pumps are extensively utilized in a range of industries
                    to maintain precise chemical dosing and control. Dosing Pumps
                    economy in India has played a essential role in various sectors
                    , like Oil and Gas , Water treatment, Chemical, Pharmaceutical,
                    Agriculture, which brings Precision, costeffectiveness and
                    efficiency in various process. Which enhance Productivity and
                    Quality standards.
                  </p>
                </div>
              </Col>
              <Col md={4} className="requestcallbackleft">
                <div className="requestcallbacklefttop">
                  <h4 className="text-white text-center py-3 text-uppercase">Request A CALL BACK</h4>
                </div>
                <div className="p-3 px-5">
                 
                  <form onSubmit={handleSubmit}>
                    <div className="d-grid fw-bold requestinputlb">
                      <label>Name</label>
                      <input
                        type="text"
                        className="requestinput"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      {errors.name && <span className="error text-danger">{errors.name}</span>}
                    </div>
                    <div className="d-grid requestinputlb">
                      <label>Email</label>
                      <input
                        type="text"
                        className="requestinput"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {errors.email && <span className="error text-danger">{errors.email}</span>}
                    </div>
                    <div className="d-grid requestinputlb">
                      <label>Message</label>
                      <input
                        type="text"
                        className="requestinput"
                        placeholder="Comment"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                      {errors.message && <span className="error text-danger">{errors.message}</span>}
                    </div>
                    <div className="d-flex justify-content-end pt-4">
                      <button className="px-4 py-2 text-center formrequestbtn" type="submit">
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
