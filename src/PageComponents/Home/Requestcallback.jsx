import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../assets/CSS/requestcall.css";
const Requestcallback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!email.trim()) {
      errors.email = "email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "invalid email address";
      isValid = false;
    }

    if (!message.trim()) {
      errors.message = "message is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };
  console.log("errors", errors);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      let newData = {
        name,
        email,

        message,
      };
      alert("Data Submit Successfully...");
      console.log("newData", newData);
    }
  };

  return (
    <div className=" requestcallback d-flex align-items-center justify-content-evenly ">
      <Container className=" p-4">
        <Row className="d-flex  justify-content-evenly  fw-bold">
          <Col md={7} className="requestcallbackleft ">
            <div className="requestcallbacklefttop">
              <h4 className=" text-white text-center py-3">
                PLUNGER TYPE DOSING PUMPS
              </h4>
            </div>
            <div className="p-3 p-lg-5 lh-3">
              <p>
                Dosing Pumps are extensively utilized in a range of industries
                to maintain precise chemical dosing and control. Dosing Pumps
                economy in India has played a essential role in various sectors
                , like Oil and Gas , Water treatment, Chemical, Pharmaceutical,
                Agriculture, which brings Precision,costeffectiveness and
                efficiency in various process. Which enhance Productivity and
                Quality standards.
              </p>
            </div>
          </Col>
          <Col md={4} className="requestcallbackleft">
            <div className="requestcallbacklefttop">
              <h4 className=" text-white text-center py-3 text-uppercase">
                Request A CALL BACK
              </h4>
            </div>
            <div className="p-3 px-5">
              <form action="" onSubmit={handleSubmit}>
                <div className=" d-grid fw-bold requestinputlb">
                  <label htmlFor=""> Name</label>
                  <input
                    type="text"
                    className="requestinput"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {errors.name && (
                    <span className="error text-danger">{errors.name}</span>
                  )}
                </div>
                <div className=" d-grid requestinputlb">
                  <label htmlFor=""> Email</label>
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
                <div className=" d-grid requestinputlb">
                  <label htmlFor=""> Message</label>
                  <input
                    type="text"
                    className="requestinput"
                    placeholder="comment"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  {errors.message && (
                    <span className="error text-danger">{errors.message}</span>
                  )}
                </div>
                <div className=" d-flex justify-content-end pt-4">
                  <button
                    className="px-4 py-2 text-center formrequestbtn "
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
  );
};

export default Requestcallback;
