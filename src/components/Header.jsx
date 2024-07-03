import React from 'react';
import { Navbar, NavDropdown, Nav, Container, Col, Row } from 'react-bootstrap';
import logo from '../assets/img/Home/Group 1000003789.png'
import { FiPhone } from "react-icons/fi";
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getNavLinkClass = (path) => {
    return currentPath === path ? 'text-decoration-none text-danger' : 'text-decoration-none text-black';
  };
  return (
    <>

      <Container fluid className='  d-none d-lg-block'>
        <Row className=' d-flex  justify-content-between  my-2'>
          <Col xs={4} lg={2} className=" headercontact d-flex justify-content-evenly p-2 ps-lg-5">
            <FiPhone className='callicon' />
            {/* <div className=' headerphone'>7890803429</div> */}
            <a className=' headerphone' href="tel:7890803429" style={{ textDecoration: 'none' }}>7890803429</a>


          </Col>
          <Col xs={4} md={1}>
            <img
              src={logo}
              alt="Positive logo"
              className='header-logo mt-md-2'

            />
          </Col>
          <Col xs={4} lg={2} className=" headercontact2 d-flex justify-content-evenly p-2 ps-lg-5">
            <FiPhone className='callicon' />
            {/* <div className=' headerphone'>7890803429</div> */}
            <a className=' headerphone' href="tel:7890803429" style={{ textDecoration: 'none' }}>7890803429</a>

          </Col>
        </Row>
      </Container>



      <Navbar collapseOnSelect expand="lg" className="">
        <Container>
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto pe-5">
              <Nav.Link href="/">
                <Link style={{letterSpacing:3}} className={`${getNavLinkClass('/')} fw-bold mx-xxl-3`} to="/">HOME</Link>
              </Nav.Link>
              <NavDropdown title="ABOUT" className='fw-bold mx-xxl-3 text-black' id="collapsible-nav-dropdown">
                <NavDropdown.Item className='py-0 dropdown-menu-btn' href="/aboutleadership">
                  <strong>LEADERSHIP</strong> <hr className='m-2 border-2' />
                </NavDropdown.Item>
                <NavDropdown.Item className='py-0 dropdown-menu-btn' href="/aboutourstory">
                  <strong>OUR STORY</strong> <hr className='m-2 border-2' />
                </NavDropdown.Item>
                <NavDropdown.Item className='py-0 dropdown-menu-btn' href="/aboutourteam">
                  <strong>OUR TEAM</strong> <hr className='m-2 border-2' />
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/product">
                <Link style={{letterSpacing:3}} className={`${getNavLinkClass('/product')} fw-bold mx-xxl-3`} to="/product">PRODUCT</Link>
              </Nav.Link>
              <Nav.Link href="/service">
                <Link style={{letterSpacing:3}} className={`${getNavLinkClass('/service')} fw-bold mx-xxl-3`} to="/service">SERVICE</Link>
              </Nav.Link>
              <Nav.Link href="/blog">
                <Link style={{letterSpacing:3}} className={`${getNavLinkClass('/blog')} fw-bold  me-5 pe-5`} to="/blog">BLOG</Link>
              </Nav.Link>
            </Nav>
            <Nav className="me-auto ">
              <Nav.Link href="/news-event">
                <Link style={{letterSpacing:3}} className={`${getNavLinkClass('/news-event')} fw-bold  `} to="/news-event">NEWS & EVENT</Link>
              </Nav.Link>
              <Nav.Link href="/career">
                <Link style={{letterSpacing:3}} className={`${getNavLinkClass('/career')} fw-bold mx-xxl-3`} to="/career">CAREER</Link>
              </Nav.Link>
              <Nav.Link href="/contactus">
                <Link style={{letterSpacing:3}} className={`${getNavLinkClass('/contactus')} fw-bold mx-xxl-3`} to="/contactus">CONTACT US</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr className='m-0 mt-3 mb-0'/>
    </>
  );
};



export default Header