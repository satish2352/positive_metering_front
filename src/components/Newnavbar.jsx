import React, { useState, useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavDropdown, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/img/Home/Group 1000003789.png";
import { ProductContext } from "../ProductContext";

const NewNavbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getNavLinkClass = (path) => {
    return currentPath === path
      ? "text-decoration-none text-danger"
      : "text-decoration-none text-black";
  };

  const [isOpen, setIsOpen] = useState(false);
  const { productNo } = useContext(ProductContext);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <div className="mobile-navbar d-lg-none d-block">
      <div className="navbar-header">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <button className="toggle-button" onClick={toggleNavbar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <Nav className="ms-auto pe-5">
          <Nav.Link href="/" onClick={closeNavbar}>
            <Link
              className={`${getNavLinkClass("/")} fw-bold mx-xxl-3 nvlink`}
              onClick={() => window.scrollTo(0, 0)}
              to="/"
            >
              HOME
            </Link>
          </Nav.Link>

          <NavDropdown
            title="ABOUT"
            style={{ backgroundColor: "#333" }}
            className="my-0 ms-3 fw-bold mx-xxl-3 text-black nvlink"
            id="collapsible-nav-dropdown"
          >
            <NavDropdown.Item
              style={{ backgroundColor: "#333" }}
              href=""
              onClick={closeNavbar}
            >
              <Link
                className={`${getNavLinkClass(
                  "/aboutleadership"
                )} fw-bold nvlink mx-xxl-3`}
                onClick={() => window.scrollTo(0, 0)}
                to="/aboutleadership"
              >
                LEADERSHIP
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item
              style={{ backgroundColor: "#333" }}
              href=""
              onClick={closeNavbar}
            >
              <Link
                className={`${getNavLinkClass(
                  "/aboutourstory"
                )} fw-bold nvlink mx-xxl-3`}
                onClick={() => window.scrollTo(0, 0)}
                to="/aboutourstory"
              >
                OUR STORY
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item
              style={{ backgroundColor: "#333" }}
              href=""
              onClick={closeNavbar}
            >
              <Link
                className={`${getNavLinkClass(
                  "/aboutourteam"
                )} fw-bold nvlink mx-xxl-3`}
                onClick={() => window.scrollTo(0, 0)}
                to="/aboutourteam"
              >
                OUR TEAM
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/product" onClick={closeNavbar}>
            <Link
              className={`${getNavLinkClass(
                "/product"
              )} fw-bold nvlink mx-xxl-3`}
              onClick={() => window.scrollTo(0, 0)}
              to={`/product/${productNo}`}
            >
              PRODUCT
            </Link>
          </Nav.Link>
          <Nav.Link href="/service" onClick={closeNavbar}>
            <Link
              className={`${getNavLinkClass(
                "/service"
              )} fw-bold nvlink mx-xxl-3`}
              onClick={() => window.scrollTo(0, 0)}
              to="/service"
            >
              SERVICE
            </Link>
          </Nav.Link>
          <Nav.Link href="/blog" onClick={closeNavbar}>
            <Link
              className={`${getNavLinkClass("/blog")} fw-bold nvlink me-5 pe-5`}
              onClick={() => window.scrollTo(0, 0)}
              to="/blog"
            >
              BLOG
            </Link>
          </Nav.Link>
        </Nav>
        <Nav className="me-auto">
          <NavDropdown
            title="NEWS&EVENTS"
            style={{ backgroundColor: "#333" }}
            className="my-0 ms-3 fw-bold mx-xxl-3 text-black nvlink"
            id="collapsible-nav-dropdown"
          >
            <NavDropdown.Item
              style={{ backgroundColor: "#333" }}
              href=""
              onClick={closeNavbar}
            >
              <Link
                className={`${getNavLinkClass(
                  "/news"
                )} fw-bold nvlink mx-xxl-3`}
                onClick={() => window.scrollTo(0, 0)}
                to="/news"
              >
                NEWS
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item
              style={{ backgroundColor: "#333" }}
              href=""
              onClick={closeNavbar}
            >
              <Link
                className={`${getNavLinkClass(
                  "/events"
                )} fw-bold nvlink mx-xxl-3`}
                onClick={() => window.scrollTo(0, 0)}
                to="/events"
              >
               EVENTS
              </Link>
            </NavDropdown.Item>
           
          </NavDropdown>
          <Nav.Link href="/career" onClick={closeNavbar}>
            <Link
              className={`${getNavLinkClass(
                "/career"
              )} fw-bold nvlink mx-xxl-3`}
              onClick={() => window.scrollTo(0, 0)}
              to="/career"
            >
              CAREER
            </Link>
          </Nav.Link>
          <Nav.Link href="/contactus" onClick={closeNavbar}>
            <Link
              className={`${getNavLinkClass(
                "/contactus"
              )} fw-bold nvlink mx-xxl-3`}
              onClick={() => window.scrollTo(0, 0)}
              to="/contactus"
            >
              CONTACT US
            </Link>
          </Nav.Link>
        </Nav>
      </div>
    </div>
  );
};

export default NewNavbar;
