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

  const [socialLinks, setSocialLinks] = useState({});
  console.log("socialLinks", socialLinks);

  useEffect(() => {
    // Fetching social media links
    axios
      .get("/social-contact/get-socialcontacts")
      .then((response) => {
        setSocialLinks(response.data.responseData[0]);
      })
      .catch((error) => {
        console.error("There was an error fetching the social media links!", error);
      });
  }, []);

  const { products, productNo } = useContext(ProductContext);
  const half = Math.ceil(products.length / 2);
  const firstHalf = products.slice(0, half);
  const secondHalf = products.slice(half);

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const capitalizeFirstLetter = (str) => {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };


  const [cardData, setCardData] = useState([]);
  const [abc, setAbc] = useState(null);
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get("/news/get-news")
      .then((response) => {
        const data = response.data.responseData;
        setCardData(data);
        // Extract the pdf from the last object
        const lastObjectPdf = data.length > 0 ? data[data.length - 1].pdf : null;
        setAbc(lastObjectPdf);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);
  const capitalizeWords = (str) => {
    if (!str) return str;
    return str
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const validateForm = () => {
    // Your form validation logic here
    return true; // Return true if the form is valid
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      try {
        const response = await axios.post("/subscribe/add-subscribeemail", {
          email,
        });
        alert("Thank you for subscribing to us!");
        console.log("Response:", response.data);
        setEmail("");
        setErrors({});

        // Open the PDF in a new tab after a successful subscription
        if (abc) {
          window.open(abc, "_blank");
        }
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
        setErrors(newErrors);
      } finally {
        setIsLoading(false);
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
        <Row className="justify-content-center align-items-start fw-medium footertext">
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
            <p className="mt-3" >
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
                            {capitalizeWords(a.productName)}
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
                            {capitalizeWords(a.productName)}
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
                            {capitalizeWords(a.productName)}
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
          <Col
            xs={12}
            lg={6}
            className="text-center d-flex justify-content-evenly align-items-center"
          > <div>
              <a href="https://website.positivemetering.in/" className="smglink">
                &copy; {currentYear}
                <ins className="">  Positive Metering Pumps All Rights Reserved.</ins>{" "}
              </a>
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <div className=" text-center d-grid d-lg-flex justify-content-center align-items-center">
              <div className="d-flex justify-content-center">

                {socialLinks && (
                  <>
                    <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                      <CiFacebook className="icon-hover mx-2" />
                    </a>
                    <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                      <FaInstagram className="icon-hover mx-2" />
                    </a>
                    <a href="mailto:info@positivemetering.com" target="_blank" rel="noopener noreferrer">
                      <MdOutlineMail className="icon-hover mx-2" />
                    </a>
                    <a href={`https://wa.me/${socialLinks.whatsapp}`} target="_blank" rel="noopener noreferrer">
                      <FaWhatsapp className="icon-hover mx-2" />
                    </a>
                    <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                      <CiLinkedin className="icon-hover mx-2" />
                    </a>
                  </>
                )}

              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
