import React from 'react';
import { Navbar, Nav, Container, Col, Row } from 'react-bootstrap';
import logo from '../assets/img/Home/Group 1000003789.png'
import { FiPhone } from "react-icons/fi";
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

const Header = () => {
  return (
    <>

      <Container fluid className='  d-none d-lg-block'>
        <Row className=' d-flex  justify-content-between  my-2'>
          <Col xs={4} lg={2} className=" headercontact d-flex justify-content-evenly p-2 ps-lg-5">
            <FiPhone className='callicon' />
            <div className=' headerphone'>7890803429</div>
          </Col>
          <Col xs={4} lg={2}>
            <img
              src={logo} // Change this to the path of your logo
              alt="Positive logo"
              className='logo'
            /></Col>
          <Col xs={4} lg={2} className=" headercontact2 d-flex justify-content-evenly p-2 ps-lg-5">
            <FiPhone className='callicon' />
            <div className=' headerphone'>7890803429</div>
          </Col>
        </Row>
      </Container>

      <Container fluid className=' d-grid  justify-content-lg-evenly justify-content-sm-start'>
        <Navbar expand="lg" >

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="ml-auto "  >
              <Nav.Link className="custom-nav-link mx-1"><Link className="Link" to='/'>HOME</Link></Nav.Link>
              {/* <Nav.Link href="#about" className="custom-nav-link mx-1"><Link className="Link" to='/blog'>ABOUT US</Link></Nav.Link> */}
              <Dropdown>
                <Dropdown.Toggle className="custom-nav-link" id="dropdown-basic">
                  ABOUT US
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item ><Link className="Link" to='/aboutleadership'>ABOUT US</Link></Dropdown.Item>
                  <Dropdown.Item href="/aboutourstory">aboutourstory</Dropdown.Item>
                  <Dropdown.Item href="/aboutourteam">aboutourteam</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Link href="#product" className="custom-nav-link mx-1"><Link className="Link" to='/product'>PRODUCT</Link></Nav.Link>
              <Nav.Link href="#service" className="custom-nav-link mx-1 me-lg-5 "><Link className="Link" to='/service'>SERVICE</Link></Nav.Link>
              <Nav.Link href="#blog" className="custom-nav-link mx-1 ms-lg-5 ps-lg-5"><Link className="Link" to='/blog'>BLOG</Link></Nav.Link>
              <Nav.Link href="#news" className="custom-nav-link mx-1"><Link className="Link" to='/newsAndEvents'>NEWS & EVENT</Link></Nav.Link>
              <Nav.Link href="#career" className="custom-nav-link mx-1"><Link className="Link" to='/career'>CAREER</Link></Nav.Link>
              <Nav.Link href="#contact" className="custom-nav-link mx-1"><Link className="Link" to='/contactus'>CONTACT US</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar >
      </Container>

    </>
  );
};



export default Header

