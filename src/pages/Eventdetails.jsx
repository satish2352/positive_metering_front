import React from "react";
import "./blogdetails.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ResponsiveImage from "./ResponsiveImage";
import Heading from "../components/Heading";

import imgmobile from "../assets/img/aa/mobile/news PAGE.jpg";
import imgtop from "../assets/img/aa/baner/BANER news.jpg";

// Helper function to count words
const countWords = (text) => {
  return text.trim().split(/\s+/).length;
};

function Eventdetails({ image, title, longetxt }) {
  document.title="Events | Positive Metering"

  // Determine grid classes based on word count
  const isLongText = countWords(longetxt) > 190;
  const imageColClass = isLongText ? "col-12 d-flex justify-content-center" : "col-lg-5  col-12";
  const textColClass = isLongText ? "col-12  justify-content-center" : "col-lg-7 col-12  mt-5 mt-lg-0";

  return (
    <>
      <ResponsiveImage mobileSrc={imgmobile} desktopSrc={imgtop} />
      <Heading heading={"News"} />
      <Container className="p-2 p-lg-5 newspaper-layout">
        <Row>
          <Col className={imageColClass}>
            <Image src={image}  fluid />
          </Col>
          <Col className={textColClass}>
            <h5 className="title">{title}</h5>
            <p dangerouslySetInnerHTML={{ __html: longetxt }} className="content-text"></p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Eventdetails;
