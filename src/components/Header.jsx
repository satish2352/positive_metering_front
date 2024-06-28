import React from 'react';
import { Navbar, NavDropdown, Nav, Container, Col, Row } from 'react-bootstrap';
import logo from '../assets/img/Home/Group 1000003789.png'
import { FiPhone } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>

      <Container fluid className='  d-none d-lg-block'>
        <Row className=' d-flex  justify-content-between  my-2'>
          <Col xs={4} lg={2} className=" headercontact d-flex justify-content-evenly p-2 ps-lg-5">
            <FiPhone className='callicon' />
            {/* <div className=' headerphone'>7890803429</div> */}
            <a className=' headerphone' href="tel:7890803429" style={{ textDecoration: 'none' }}>7890803429</a>


          </Col>
          <Col xs={4} lg={2}>
            {/* <img
              src={logo} // Change this to the path of your logo
              alt="Positive logo"
              className='logo'
            /> */}
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
            <Nav className="mx-auto">
              <Nav.Link href="/"><Link className='text-decoration-none text-black' to={"/"}>Home</Link></Nav.Link>
              <NavDropdown title="About" id="collapsible-nav-dropdown">
                <NavDropdown.Item className='py-0 dropdown-menu-btn' href="/aboutleadership"><strong>LEADERSHIP</strong> <hr className='m-2 border-2' /></NavDropdown.Item>
                <NavDropdown.Item className='py-0 dropdown-menu-btn' href="/aboutourstory"><strong>OUR STORY</strong> <hr className='m-2 border-2' /></NavDropdown.Item>
                <NavDropdown.Item className='py-0 dropdown-menu-btn' href="/aboutourteam"><strong>OUR TEAM</strong> <hr className='m-2 border-2' /></NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr />
    </>
  );
};



export default Header