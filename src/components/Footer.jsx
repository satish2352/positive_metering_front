import React, { useEffect, useState, useContext } from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import logo from "../assets/img/Home/Group 1000003789.png";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { Link } from "react-router-dom";
import axios from 'axios'
import { ProductContext } from '../ProductContext';
import { useNavigate } from 'react-router-dom';
const Footer = () => {
  const { products } = useContext(ProductContext);
  const half = Math.ceil(products.length / 2);
  const firstHalf = products.slice(0, half);
  const secondHalf = products.slice(half);
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
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


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      try {
        const response = await axios.post("/subscribe/add-subscribeemail", { email });
        alert("Data Submitted Successfully.");
        console.log("Response:", response.data);
        setEmail("");
      } catch (error) {
        console.error("Error submitting data:", error);
        alert("Failed to submit data.");
      }
    }
  };
  return (
    <Container className="footerback " fluid>
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
                  <Button className="footerenquriybtn" type="submit" style={{ fontSize: '16px' }}>Subscribe</Button>
                </InputGroup>
              </Form>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center fw-medium footertext">
          <Col xs={12} md={10} lg={4} className=" footertext mb-4 mx-lg-3 ">
            <div className="d-grid justify-content-center">
              {" "}
              <img
                src={logo}
                alt="Company Logo"
                style={{ maxWidth: "100px" }}
              />
            </div>
            <p className="mt-3" style={{ textAlign: "justify" }}>
              Dosing Pumps are extensively utilized in a range of industries to maintain precise chemical dosing and control. Dosing Pumps economy in India has played a essential role in various sectors, like Oil and Gas , Water treatment, Chemical, Pharmaceutical, Agriculture, which brings Precision,costeffectiveness and efficiency in various process. Which enhance Productivity and Quality standards.

              We, Positive Metering Pumps India Pvt Ltd, are among the well established companies engaged in manufacturing of all your Dosing needs
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
          <Col xs={12} md={8} lg={5}>

            <Row>
              <Col xs={12} md={6} lg={6} className="mx-lg-3x">
                <h5 className=" fw-bold" style={{ marginTop: '-30px' }}>Product</h5>
                <ul className="list-unstyled lh-lg">
                  {
                    firstHalf.map((a) => {
                      return (
                        <>
                          <li>
                            <Link
                              onClick={() => window.scrollTo(0, 500)}
                              to={`/Product/${a.id}`}
                              style={{ textDecoration: "none", color: "black" }

                              }
                            >
                              {a.productName}
                            </Link>
                          </li >
                        </>
                      )
                    })
                  }
                </ul>
              </Col>
              <Col xs={12} md={6} lg={6} className="mx-lg-3x">

                <ul className="list-unstyled lh-lg">
                  {
                    secondHalf.map((a) => {
                      return (
                        <>
                          <li>
                            <Link
                              onClick={() => window.scrollTo(0, 500)}
                              to={`/Product/${a.id}`}
                              style={{ textDecoration: "none", color: "black" }}
                            >
                              {a.productName}
                            </Link>
                          </li >
                        </>
                      )
                    })
                  }
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />
        <Row className="mt-4 d-flex pb-5">
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
