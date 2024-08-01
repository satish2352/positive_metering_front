import React, { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import about from "../../assets/img/About/WhatsApp Image 2024-08-01 at 5.45.10 PM.jpeg";
import Heading from "../../components/Heading";

const HomeAboutus = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <Container fluid className="mt-lg-5 mt-2">
      <Row>
        <Col
          lg={6}
          className="order-lg-1 d-none d-lg-block order-2 px-0"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <img src={about} className="img-fluid" alt="About Us" />
        </Col>
        <Col
          lg={6}
          className="order-lg-2 order-1 homeaboutinfo text-white d-grid align-items-center"
          style={{ backgroundColor: "#EE585D" }}
        >
          <div
            className="p-lg-5 py-4"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <h1 style={{ letterSpacing: "4px" }}>ABOUT US</h1>
            <p style={{ fontSize: "15px" }}>
              Positive Metering Pumps (I) Limited, established in 1996, is a
              well-established manufacturer of Chemical Dosing Pumps and Skid
              Mounted Process Plants & Systems, serving various process
              industries. We offer a wide range of customized services and
              tailored solutions to meet the diverse needs of our clients. Our
              operations are divided into two main divisions: Pumps Division and
              Skid Mounted Process Plant Packages Division. Our state-of-the-art
              manufacturing facilities are located in Nashik and Sinnar,
              Maharashtra, India, and adhere to ISO/IS 9001:2015, ISO/IS
              14001:2015, and ISO/IS 18001:2018 quality standards.
              <br />
              Simplifyingchemicaltreatmentsworldwide, our esteemed market
              position is a testament to the dedicated efforts of
              ourmentor,Mr.SudhirMutalik, a Mechanical Engineering BE graduate
              with 28years of experience. His expertise has enabled us to design
              and customize products that meet the specific needs of our
              clients. We have earned a reputation for our user-friendly range,
              establishing a broad client network across India, and in Latin
              American, African, Asian, and European countries. To date, we have
              completed over 250,000installations in 40countries worldwide. For
              over two and a half decades, our core objectives and beliefs have
              centered around quality and customer satisfaction. We are a
              quality-driven company committed to continuous improvement in
              quality system inspection facilities to achieve total customer
              satisfaction. We prioritize environmental concerns in all aspects
              of our operations, ensuring that our products are designed
              according to mutually agreed specifications and terms
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeAboutus;
