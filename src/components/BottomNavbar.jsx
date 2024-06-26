import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaHome, FaSearch, FaPlusCircle, FaHeart, FaUser } from 'react-icons/fa';

const BottomNavbar = () => {
  return (
    <Navbar fixed="bottom" bg="light" variant="light" className="justify-content-around">
      <Nav>
        <Nav.Link href="#home"><FaHome size={24} /></Nav.Link>
        <Nav.Link href="#search"><FaSearch size={24} /></Nav.Link>
        <Nav.Link href="#add"><FaPlusCircle size={24} /></Nav.Link>
        <Nav.Link href="#notifications"><FaHeart size={24} /></Nav.Link>
        <Nav.Link href="#profile"><FaUser size={24} /></Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default BottomNavbar;
