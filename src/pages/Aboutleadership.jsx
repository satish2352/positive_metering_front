import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/CSS/aboutus.css";
import banner from "../assets/img/About/Rectangle 4417.png";
import New from "../assets/img/About/Frame 19.png";
import lder1 from "../assets/img/About/Group 1000004058 (1).png";
import lder2 from "../assets/img/About/leadershipimg1.png";
import lder3 from "../assets/img/About/leadershipimg2.png";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import Heading from "../components/Heading";
import AOS from "aos";
import "aos/dist/aos.css";
import ResponsiveImage from "./ResponsiveImage";

const leadershipData = [
  {
    imgSrc: lder1,
    name: "Mr. Sudhir Mutalik",
    title: "Founder And Managing Director",
    description:
      "The Founder of our company Mr. Sudhir Mutalik is a passionate mechanical engineer graduated from the reputed Government College of Engineering, Karad near Pune, India. Diesel Engines has been his interest for study since his university days. He was selected by the world's well-known Diesel Engine manufacturer Kirloskar Oil Engines Ltd through campus recruitment.",
  },
  {
    imgSrc: lder2,
    name: "Mrs. Jyotsana Mutalik",
    title: "CEO Finance Director",
    description:
      "The Founder of our company Mr. Sudhir Mutalik is a passionate mechanical engineer graduated from the reputed Government College of Engineering, Karad near Pune, India. Diesel Engines has been his interest for study since his university days. He was selected by the world's well-known Diesel Engine manufacturer Kirloskar Oil Engines Ltd through campus recruitment.",
  },
  {
    imgSrc: lder3,
    name: "Mr. Malhar Mutalik",
    title: "Cheif Technical Manager",
    description:
      "The Founder of our company Mr. Sudhir Mutalik is a passionate mechanical engineer graduated from the reputed Government College of Engineering, Karad near Pune, India. Diesel Engines has been his interest for study since his university days. He was selected by the world's well-known Diesel Engine manufacturer Kirloskar Oil Engines Ltd through campus recruitment.",
  },
  {
    imgSrc: lder2,
    name: "Mr. Ravindra Jadhav",
    title: "Head Operations Pump's Businessr",
    description:
      "The Founder of our company Mr. Sudhir Mutalik is a passionate mechanical engineer graduated from the reputed Government College of Engineering, Karad near Pune, India. Diesel Engines has been his interest for study since his university days. He was selected by the world's well-known Diesel Engine manufacturer Kirloskar Oil Engines Ltd through campus recruitment",
  },
];

const Aboutleadership = () => {
  window.scrollTo(0, 0);
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <>
      {/* <Heading heading="leadership"/> */}

      <Container fluid className="px-0">
        <ResponsiveImage mobileSrc={banner} desktopSrc={banner} />
      </Container>
      <Container fluid className=" mt-1">
        {leadershipData.map((leader, index) => (
          <Row key={index} className="mb-5 mb-lg-0 my-3 leadershippara">
            {index % 2 === 0 ? (
              <>
                <Col
                  xs={12}
                  lg={6}
                  className="px-0 "
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <img
                    src={leader.imgSrc}
                    className="img-fluid"
                    alt={leader.name}
                  />
                </Col>
                <Col
                  xs={12}
                  lg={6}
                  className="p-lg-5 p-3 d-flex align-items-center"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <div>
                    <h2
                      className="text-uppercase abtname fw-bold"
                      style={{
                        letterSpacing: "1px",
                        fontFamily: "Roboto",
                        paddingLeft: "20px",
                      }}
                    >
                      {leader.name}
                    </h2>
                    <h4 style={{ paddingLeft: "20px" }}>{leader.title}</h4>
                    <p
                      className="fw-medium abouttxt lh-base"
                      style={{
                        fontFamily: "Roboto",
                        textAlign: "justify",
                        paddingLeft: "20px",
                        paddingup: "20px",
                      }}
                    >
                      {leader.description}
                    </p>
                    <div style={{ paddingLeft: "20px" }}className="social-icons">
                      <FaFacebook className="icon" />
                      <FaInstagram className="icon" />
                      <FaLinkedin className="icon" />
                    </div>
                  </div>
                </Col>
              </>
            ) : (
              <>
                <Col
                  xs={12}
                  lg={{ order: "last", span: 6 }}
                  className="px-0"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <img
                    src={leader.imgSrc}
                    className="img-fluid"
                    alt={leader.name}
                  />
                </Col>
                <Col
                  xs={12}
                  lg={{ order: "first", span: 6 }}
                  className="p-lg-5 p-3  d-flex align-items-center"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <div>
                    <h2
                      className="text-uppercase abtname fw-bold"
                      style={{
                        letterSpacing: "1px",
                        fontFamily: "Roboto",
                        paddingLeft: "20px",
                      }}
                    >
                      {leader.name}
                    </h2>
                    <h4 className="" style={{ paddingLeft: "20px" }}>{leader.title}</h4>
                    <p
                      className="fw-medium abouttxt lh-base"
                      style={{
                        fontFamily: "Roboto",
                        textAlign: "justify",
                        paddingLeft: "20px",
                        paddingup: "20px",
                      }}
                    >
                      {leader.description}
                    </p>
                    <div style={{ paddingLeft: "20px" }} className="social-icons">
                      <FaFacebook className="icon" />
                      <FaInstagram className="icon" />
                      <FaLinkedin className="icon" />
                    </div>
                  </div>
                </Col>
              </>
            )}
          </Row>
        ))}
      </Container>
      <div className="spaceing"></div>
    </>
  );
};

export default Aboutleadership;
