import React from "react";
import im from "../assets/img/DGHGF.png";
import Heading from "../components/Heading";
import ResponsiveImage from "./ResponsiveImage";
import imgmobile from "../assets/img/services/mobileview.png";
import imgtop from "../assets/img/services/diskimg.png";
import { Container, Row, Col } from "react-bootstrap";
const Eventspage = () => {
  return (
    <div>
      <ResponsiveImage mobileSrc={imgmobile} desktopSrc={imgtop} />
      <Heading heading="News & Events" />

      <Container>
        <Row>
          <Col xs={12} lg={4}>
            <img src={im} className="eventimg rounded-4" alt="" />
            <div className=" d-grid justify-content-center">
              <div className="evntttle rounded-pill p-3">
                o maintain precise chemical dosing and control. Dosing Pumps
                economy in
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Eventspage;
