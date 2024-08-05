import React, { useState } from "react";
import "./blogdetails.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Image from "react-bootstrap/Image";
import blogdetails_img1 from "../assets/img/Blogdetails/blogdetails_img1.png";
import blogdetails_img2 from "../assets/img/Blogdetails/blogdetails_img2.png";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Form from "react-bootstrap/Form";
import Heading from "../components/Heading";
import ResponsiveImage from "./ResponsiveImage";

import imgmobile from "../assets/img/aa/mobile/news PAGE.jpg";
import imgtop from "../assets/img/aa/baner/BANER news.jpg";

function Eventdetails({ image, title, longetxt }) {


  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <ResponsiveImage mobileSrc={imgmobile} desktopSrc={imgtop} />
      <Heading heading={"News"} />
      <Container className=" p-2 p-lg-5" heading={"Blog"}>
        <Row>
          <Col lg={5} md={6} sm={12}>
            <Image src={`${image}`} height={"500rem"} fluid />
          </Col>
          <Col lg={7} md={6} sm={12} className=" mt-5 mt-lg-0">
            <h5>{title}</h5>
            
            <p dangerouslySetInnerHTML={{ __html: longetxt }}></p>
          </Col>
        </Row>
      </Container>

      <Container></Container>
    </>
  );
}

export default Eventdetails;
