import React, { useEffect, useState, useContext } from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import logo from "../assets/img/Home/Group 1000003789.png";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { Link } from "react-router-dom";
import axios from "axios";
import { ProductContext } from "../ProductContext";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  const { products, productNo } = useContext(ProductContext);
  const half = Math.ceil(products.length / 2);
  const firstHalf = products.slice(0, half);
  const secondHalf = products.slice(half);
  const [email, setEmail] = useState("");
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const capitalizeFirstLetter = (str) => {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email address";
      isValid = false;
    }
    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      try {
        const response = await axios.post("/subscribe/add-subscribeemail", {
          email,
        });
        alert("thank you will connect with you soon");
        console.log("Response:", response.data);
        setEmail("");
        setErrors({});
      } catch (error) {
        const newErrors = { ...errors };
        console.error("Error submitting data:", error);
        if (
          error.response?.data?.message ===
          "Validation error: Email already exists."
        ) {
          newErrors.email = "Email Id already exists.";
        } else {
          newErrors.email = "Failed to submit data. Please try again.";
        }
        setErrors(newErrors); // <- Ensure errors are set
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
            <div className=" footerenqury justify-content-center d-grid">
              <h2 className="text-white text-center">
                Subscribe to our News letter
              </h2>

              <div className=" d-flex justify-content-center">
                <Form className=" mt-3 pb-3 subscribe" onSubmit={handleSubmit}>
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
                    <input
                      type="email"
                      className=" emailfeild"
                      style={{ border: "none", outline: "none" }}
                      placeholder="Enter Your Email Id"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button
                      className="footerenquriybtn"
                      type="submit"
                      style={{ fontSize: "16px" }}
                    >
                      Subscribe
                    </Button>
                  </InputGroup>
                  <div className=" text-start">
                    {errors.email && (
                      <span className=" text-white bg-danger mt-1">{errors.email}</span>
                    )}
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center fw-medium footertext">
          <Col xs={12} md={10} lg={4} className=" footertext mb-4 mx-lg-3 ">
            <div className="d-grid justify-content-center">
              {" "}
              <Link to="/">
                {" "}
                <img
                  src={logo}
                  alt="Company Logo"
                  style={{ maxWidth: "100px" }}
                />
              </Link>
            </div>
            <p className="mt-3" style={{ textAlign: "justify" }}>
              Dosing Pumps are extensively utilized in a range of industries to
              maintain precise chemical dosing and control. Dosing Pumps economy
              in India has played a essential role in various sectors, like Oil
              and Gas , Water treatment, Chemical, Pharmaceutical, Agriculture,
              which brings Precision,costeffectiveness and efficiency in various
              process. Which enhance Productivity and Quality standards. We,
              Positive Metering Pumps India Pvt Ltd, are among the well
              established companies engaged in manufacturing of all your Dosing
              needs.
            </p>
          </Col>

          <Col xs={12} md={4} lg={2} className="mx-lg-3">
            <h5 className=" fw-bold mb-lg-4">Company</h5>
            <ul className="list-unstyled lh-lg">
              <li className="pt-1 ">
                <Link
                  className="nvlink"
                  onClick={() => window.scrollTo(0, 0)}
                  to="/"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Home
                </Link>
              </li>
              <li className="pt-1 ">
                <Link
                  className="nvlink"
                  onClick={() => window.scrollTo(0, 0)}
                  to="/aboutourstory"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  About Us
                </Link>
              </li>
              <li className="pt-1 ">
                <Link
                  className="nvlink"
                  onClick={() => window.scrollTo(0, 0)}
                  to="/service"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Services
                </Link>
              </li>

              <li className="pt-1">
                <Link
                  className="nvlink"
                  onClick={() => window.scrollTo(0, 0)}
                  to="/blog"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Blog
                </Link>
              </li>
              <li className="pt-1">
                <Link
                  className="nvlink"
                  onClick={() => window.scrollTo(0, 0)}
                  to="/event"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  News And Events
                </Link>
              </li>

            
              <li className="pt-1">
                <Link
                  className="nvlink"
                  onClick={() => window.scrollTo(0, 0)}
                  to="/career"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Career
                </Link>
              </li>
              <li className="pt-1">
                <Link
                  className="nvlink"
                  onClick={() => window.scrollTo(0, 0)}
                  to="/contactus"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </Col>
          <Col
            xs={12}
            md={8}
            lg={5}
            className=" d-none d-lg-block d-grid align-items-start"
          >
            <h5 className=" fw-bold mb-lg-2">Product</h5>
            <Row>
              <Col xs={12} md={6} lg={6} className="mx-lg-3x  pt-lg-0">
                <ul className=" lh-lg list-style-type:disc">
                  {firstHalf.map((a) => {
                    return (
                      <>
                        <li className="pt-2">
                          <Link
                            className="nvlink"
                            onClick={() => window.scrollTo(0, 500)}
                            to={`/product/${a.id}`}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            {capitalizeFirstLetter(a.productName)}
                          </Link>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </Col>
              <Col xs={12} md={6} lg={6} className="mx-lg-3x">
                <ul className=" lh-lg list-style-type:disc">
                  {secondHalf.map((a) => {
                    return (
                      <>
                        <li className="pt-2">
                          <Link
                            className="nvlink"
                            onClick={() => window.scrollTo(0, 500)}
                            to={`/product/${a.id}`}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            {capitalizeFirstLetter(a.productName)}
                          </Link>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={8} lg={5} className=" d-block d-lg-none">
            <h5 className=" fw-bold mb-lg-5">Product</h5>
            <Row>
              <Col
                xs={12}
                md={6}
                lg={6}
                className="mx-lg-3x  pt-lg-0 d-grid align-content-lg-start"
              >
                <ul className="list-unstyled lh-lg">
                  {products.map((a) => {
                    return (
                      <>
                        <li className="pt-1">
                          <Link
                            className="nvlink"
                            onClick={() => window.scrollTo(0, 500)}
                            to={`/product/${a.id}`}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            {capitalizeFirstLetter(a.productName)}
                          </Link>
                          <hr className=" m-0 p-0" />
                        </li>
                      </>
                    );
                  })}
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />
        <Row className="mt-3 d-flex pb-3">
          {/* <Col
            xs={12}
            lg={6}
            className="text-center d-flex justify-content-evenly align-items-center"
          >
            {" "} */}
          {/* <div>
              <a href="https://www.sumagoinfotech.com/" target="_blank" className="smglink">
                &copy; {currentYear} Copyright :{" "}
                <ins className=""> Made with Passion by Sumago Infotech</ins>{" "}
              </a>
            </div> */}
          {/* </Col> */}
          <Col xs={12} lg={12}>
            <div className=" text-center d-grid d-lg-flex justify-content-center align-items-center">
              <div className="d-flex justify-content-center">
                <a
                  href="https://www.facebook.com/PositiveMetering"
                  target="_blank"
                >
                  <CiFacebook className="icon-hover mx-2 " />
                </a>
                <a
                  href="https://www.instagram.com/positive_metering_pumps/?hl=en"
                  target="_blank"
                >
                  <FaInstagram className="icon-hover mx-2" />
                </a>
                <a href="mailto:info@positivemetering.com" target="_blank">
                  <MdOutlineMail className="icon-hover mx-2" />
                </a>
                <a href={`https://wa.me/${91 - 253 - 6613218}`} target="_blank">
                  <FaWhatsapp className="icon-hover mx-2" />
                </a>
                <a
                  href="https://www.linkedin.com/company/positive-metering-pumps-i-pvt-ltd/"
                  target="_blank"
                >
                  {" "}
                  <CiLinkedin className="icon-hover mx-2" />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
