import React, { useState, useEffect, useContext } from "react";
import { Navbar, NavDropdown, Nav, Container, Col, Row } from "react-bootstrap";
import logo from "../assets/img/Home/Group 1000003789.png";
import { FiPhone } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { ProductContext } from "../ProductContext";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { productNo } = useContext(ProductContext);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    const fetchContacts = async () => {
      try {
        const response = await axios.get("/header-contact/getheaderContacts");
        if (response.data.result) {
          setContacts(response.data.responseData);
        } else {
          setError(response.data.message);
        }
      } catch (error) {
        setError("There was an error making the request!");
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getNavLinkClass = (path) => {
    return currentPath === path
      ? "text-decoration-none text-danger"
      : "text-decoration-none text-black";
  };

  return (
    <div className="d-none d-lg-block">
      <Container fluid>
        <Row className="d-flex justify-content-between mt-1">
          {loading ? (
            <p></p>
          ) : (
            <>
              <Col
                xs={4}
                lg={2}
                className="headercontact d-flex justify-content-evenly p-2 ps-lg-5"
              >
                <FiPhone className="callicon" />
                <a
                  className="headerphone"
                  href={`tel:${contacts[0]?.phone1}`}
                  style={{ textDecoration: "none" }}
                >
                  {contacts[0]?.phone1}
                </a>
              </Col>
              <Col xs={4} md={1}></Col>
              <Col
                xs={4}
                lg={2}
                className="headercontact2 d-flex  p-2 ps-3"
              >
                <FiPhone className="callicon me-3" />
                <a
                  className="headerphone"
                  href={`tel:${contacts[0]?.phone2}`}
                  style={{ textDecoration: "none" }}
                >
                  {contacts[0]?.phone2}
                </a>
              </Col>
            </>
          )}
        </Row>
      </Container>
      <div
        className={`header-wrapper ${
          isFixed ? "fixed hedershadow " : "navbarspacing "
        }`}
      >
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className={`ms-auto ${isFixed ? "" : "pe-5"}`}>
              <Nav.Link href="/">
                <Link
                  style={{ letterSpacing: 3 }}
                  onClick={() => window.scrollTo(0, 0)}
                  className={`${getNavLinkClass("/")} fw-bold nvlink mx-xxl-3`}
                  to="/"
                >
                  HOME
                </Link>
              </Nav.Link>
              <NavDropdown
                title="ABOUT"
                className="fw-bold mx-xxl-3 text-black nvlink"
                id="collapsible-nav-dropdown"
              >
                <NavDropdown.Item className="py-0 dropdown-menu-btn">
                  <Link
                    className={`${getNavLinkClass(
                      "/aboutleadership "
                    )} nvlink mx-xxl-3`}
                    onClick={() => window.scrollTo(0, 0)}
                    to="/aboutleadership"
                  >
                    {" "}
                    <strong>LEADERSHIP</strong> <hr className="m-0 border-2" />
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="py-0 dropdown-menu-btn"
                  to="/aboutourstory"
                >
                  <Link
                    className={`${getNavLinkClass(
                      "/aboutourstory"
                    )} nvlink  mx-xxl-3`}
                    onClick={() => window.scrollTo(0, 0)}
                    to="/aboutourstory"
                  >
                    {" "}
                    <strong>OUR STORY</strong> <hr className="m-0 border-2" />
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="py-0 dropdown-menu-btn"
                  to="/aboutourteam"
                >
                  <Link
                    className={`${getNavLinkClass(
                      "/aboutourteam"
                    )} nvlink  mx-xxl-3`}
                    onClick={() => window.scrollTo(0, 0)}
                    to="/aboutourteam"
                  >
                    {" "}
                    <strong>OUR TEAM</strong> <hr className="m-0 border-2" />
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <Link
                  style={{ letterSpacing: 3 }}
                  onClick={() => window.scrollTo(0, 0)}
                  className={`${getNavLinkClass(
                    `/product/${productNo}`
                  )}  nvlink fw-bold mx-xxl-3`}
                  to={`/product/${productNo}`}
                >
                  PRODUCT
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  style={{ letterSpacing: 3 }}
                  onClick={() => window.scrollTo(0, 0)}
                  className={`${getNavLinkClass(
                    "/service"
                  )} nvlink fw-bold mx-xxl-3`}
                  to="/service"
                >
                  SERVICE
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  style={{ letterSpacing: 3 }}
                  onClick={() => window.scrollTo(0, 0)}
                  className={`${getNavLinkClass("/blog")} nvlink fw-bold ${
                    isFixed ? "" : "blogspace"
                  }`}
                  to="/blog"
                >
                  BLOG
                </Link>
              </Nav.Link>
            </Nav>
            <Link to='/'>
              <img
                src={logo}
                alt="Positive logo"
                className={`header-logo mt-md-2 ${
                  isFixed ? "small-logo ms-4 mb-2" : ""
                }`}
              />
            </Link>
            <Nav className="me-auto">
              <Nav.Link>
                <Link
                  style={{ letterSpacing: 3 }}
                  onClick={() => window.scrollTo(0, 0)}
                  className={`${getNavLinkClass(
                    "/news-event"
                  )} fw-bold nvlink  ${isFixed ? "ps-3" : " "}`}
                  to="/news-event"
                >
                  NEWS & EVENT
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  style={{ letterSpacing: 3 }}
                  onClick={() => window.scrollTo(0, 0)}
                  className={`${getNavLinkClass(
                    "/career"
                  )} fw-bold nvlink mx-xxl-3`}
                  to="/career"
                >
                  CAREER
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  style={{ letterSpacing: 3 }}
                  onClick={() => window.scrollTo(0, 0)}
                  className={`${getNavLinkClass(
                    "/contactus"
                  )} fw-bold nvlink mx-xxl-3`}
                  to="/contactus"
                >
                  CONTACT US
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
