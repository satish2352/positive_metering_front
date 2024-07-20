import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavDropdown, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/img/Home/Group 1000003789.png';

const NewNavbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getNavLinkClass = (path) => {
    return currentPath === path ? 'text-decoration-none text-danger' : 'text-decoration-none text-black';
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <div className="mobile-navbar d-lg-none d-block">
      <div className="navbar-header">
        <img src={logo} alt="Logo" className="logo" />
        <button className="toggle-button" onClick={toggleNavbar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <Nav className="ms-auto pe-5">
          <Nav.Link href="/" onClick={closeNavbar}>
            <Link className={`${getNavLinkClass('/')} fw-bold mx-xxl-3`} to="/">HOME</Link>
          </Nav.Link>
    
          <NavDropdown title="ABOUT" style={{ backgroundColor: "#333" }} className='my-0 ms-3 fw-bold mx-xxl-3 text-black' id="collapsible-nav-dropdown">
            <NavDropdown.Item style={{ backgroundColor: "#333" }} href="" onClick={closeNavbar}>
              <Link className={`${getNavLinkClass('/aboutleadership')} fw-bold mx-xxl-3`} to="/aboutleadership">LEADERSHIP</Link>
            </NavDropdown.Item>
            <NavDropdown.Item style={{ backgroundColor: "#333" }} href="" onClick={closeNavbar}>
              <Link className={`${getNavLinkClass('/aboutourstory')} fw-bold mx-xxl-3`} to="/aboutourstory">OUR STORY</Link>
            </NavDropdown.Item>
            <NavDropdown.Item style={{ backgroundColor: "#333" }} href="" onClick={closeNavbar}>
              <Link className={`${getNavLinkClass('/aboutourteam')} fw-bold mx-xxl-3`} to="/aboutourteam">OUR TEAM</Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/product" onClick={closeNavbar}>
            <Link className={`${getNavLinkClass('/product')} fw-bold mx-xxl-3`} to="/Product/11">PRODUCT</Link>
          </Nav.Link>
          <Nav.Link href="/service" onClick={closeNavbar}>
            <Link className={`${getNavLinkClass('/service')} fw-bold mx-xxl-3`} to="/service">SERVICE</Link>
          </Nav.Link>
          <Nav.Link href="/blog" onClick={closeNavbar}>
            <Link className={`${getNavLinkClass('/blog')} fw-bold me-5 pe-5`} to="/blog">BLOG</Link>
          </Nav.Link>
        </Nav>
        <Nav className="me-auto">
          <Nav.Link href="/news-event" onClick={closeNavbar}>
            <Link className={`${getNavLinkClass('/news-event')} fw-bold`} to="/news-event">NEWS & EVENT</Link>
          </Nav.Link>
          <Nav.Link href="/career" onClick={closeNavbar}>
            <Link className={`${getNavLinkClass('/career')} fw-bold mx-xxl-3`} to="/career">CAREER</Link>
          </Nav.Link>
          <Nav.Link href="/contactus" onClick={closeNavbar}>
            <Link className={`${getNavLinkClass('/contactus')} fw-bold mx-xxl-3`} to="/contactus">CONTACT US</Link>
          </Nav.Link>
        </Nav>
      </div>
    </div>
  );
};

export default NewNavbar;
