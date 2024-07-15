import React, { useState } from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import logo from "../assets/img/Home/Group 1000003789.png";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!email.trim()) {
      errors.email = "email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "invalid email address";
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
        email,
      };
      alert("Data Submited Successfully..");
      console.log("newData", newData);
    }
  };

  return (
    <Container className="footerback" fluid>
      <Container>
        <Row className="justify-content-center  mb-4">
          <Col
            xs={12}
            md={10}
            className="text-center justify-content-center d-flex"
          >
            <div className=" footerenqury">
              <h2 className="text-white">Subscribe to our News letter</h2>

              <Form className="d-flex justify-content-center mt-3 pb-3 " onSubmit={handleSubmit}>
                <InputGroup
                  className=" p-1 rounded-2 "
                  style={{ backgroundColor: "#fff" }}
                >
                  <InputGroup.Text
                    style={{
                      backgroundColor: "#fff",
                      border: "none",
                      fontSize: "20px",
                      color: "gray",
                    }}
                  >
                    <MdOutlineEmail />
                  </InputGroup.Text>
                  <Form.Control
                    type="email"
                    className=" emailfeild"
                    style={{ border: "none" }}
                    placeholder="Enter your mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                      {errors.email && (
                  <span className="error text-danger">{errors.email}</span>
                )}
                  <Button className="footerenquriybtn" type="submit" style={{fontSize:'16px'}}>Subscribe</Button>
                </InputGroup>
              </Form>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center fw-medium footertext">
          <Col xs={12} md={10} lg={3} className=" footertext mb-4 mx-lg-3 ">
            <div className="d-grid justify-content-center">
              {" "}
              <img
                src={logo}
                alt="Company Logo"
                style={{ maxWidth: "100px" }}
              />
            </div>
            <p className="mt-3" style={{ textAlign: "justify" }}>
              Poshwave Pumps are extensively utilized in a variety of industrial
              applications like process chemicals dosing and transfer, brine
              injection systems in the food industry, power plants, and sugar
              industries. Our pump range includes various models catering to
              different needs.
            </p>
          </Col>

          <Col xs={12} md={4} lg={2} className="mx-lg-3">
            <h5 className=" fw-bold">Company</h5>
            <ul className="list-unstyled lh-lg">
              <li>
                <Link
                  to="/aboutleadership"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/service"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/product"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutleadership"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  to="/newsAndEvents"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  NewsAndEvents
                </Link>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={4} lg={3} className="mx-lg-3">
            <h5 className=" fw-bold" style={{marginTop:'-1px'}}>Product</h5>
            <ul className="list-unstyled lh-lg">
              <li>Plunger type dosing pumps</li>
              <li>Plunger type dosing pumps</li>
              <li>Electric type dosing pumps</li>
              <li>Plunger type dosing pumps</li>
              <li>Plunger type dosing pumps</li>
              <li>Electric type dosing pumps</li>

              {/* <li>Diaphragm type dosing pumps</li>
              <li>Magnet type dosing pumps</li>
              <li>Electric type dosing pumps</li>
              <li>Solenoid type dosing pumps</li> */}
            </ul>
          </Col>
          <Col xs={12} md={4} lg={2} className="mx-lg-3x">
            <h5 className=" fw-bold" style={{marginTop:'-20px'}}>Product</h5>
            <ul className="list-unstyled lh-lg">
              <li>Agitator</li>
              <li>Emulsifier</li>
              <li>Static Mixers</li>
              <li>Portable mixers</li>
              <li>Portable stirrers</li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row className="mt-4 d-flex">
          <Col
            xs={12}
            lg={6}
            className="text-center d-flex justify-content-evenly align-items-cente"
          >
            <p>
              &copy; 2024 Copyright :{" "}
              <ins> Made with Passion by Sumago Infotech</ins>{" "}
            </p>
          </Col>
          <Col xs={12} lg={6}>
            <div className=" text-center d-grid d-lg-flex justify-content-center align-items-center">
              <div>Terms & Conditions</div>
              <div className="d-flex justify-content-center">
                <CiFacebook className="icon-hover mx-2 " />
                <FaInstagram className="icon-hover mx-2" />
                <MdOutlineMail className="icon-hover mx-2" />
                <FaWhatsapp className="icon-hover mx-2" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
