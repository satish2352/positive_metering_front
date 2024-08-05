import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/CSS/aboutus.css";
import banner from "../assets/img/About/BANER about us.jpg";
import New from "../assets/img/About/about us  PAGE.jpg";
import lder1 from "../assets/img/About/Group 1000004058 (1).png";
import lder2 from "../assets/img/About/leadershipimg1.png";
import lder3 from "../assets/img/About/leadershipimg2.png";
import lder4 from "../assets/img/About/madhuli.jpeg";
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
      "Mr. Sudhir Mutalik, a first-generation entrepreneur, has consistently prioritized people while building his business from the ground up. He measures success by the number of jobs his company generates annually, reflecting his commitment to society and nature. Mr. Mutalik served as the Chairman of CII's Maharashtra State Council in 2021-22. His commendable efforts to aid people and industries in the state during the first and second waves of COVID-19 were officially recognized by the Honorable Governor of Maharashtra. Mr. Mutalik was honored as an 'Impact Creator' in a ceremony at Raj Bhavan. His personal goal is to foster entrepreneurship, inspiring and guiding young individuals to start their own enterprises."
  },
  {
    imgSrc: lder2,
    name: "Mrs. Jyotsana Mutalik",
    title: "CEO Finance Director",
    description:
      "Jyotsna Mutalik is a first-generation entrepreneur who has been managing various areas of business, with a strong focus on finance and costing. She is known for her critical thinking and problem-solving skills, making her a beloved figure within the organization. Over the years, she has trained many young professionals. Jyotsna played a pivotal role in achieving ISO certification for the organization and has consistently maintained this status. Her passion for digitalization led to the development of an in-house ERP system, which has been in operation since 2020 and continues to evolve to meet the organization's needs.",
  },
  {
    imgSrc: lder3,
    name: "Mr. Malhar Mutalik",
    title: "Cheif Technical Manager",
    description:
      "Mr. Malhar Sudhir Mutalik, 27, is a second-generation entrepreneur and the chief operating officer (COO) of the pumps division. He graduated as a mechanical engineer in 2019 and now leads the company's R&D wing. In 2018, he designed mechanical diaphragm pumps, leading to a new business vertical that dispatched over 2000 pumps in fiscal 2024. The following year, he developed GRM pumps with electrical actuators, making PMP the only Indian manufacturer with this technology, with the first consignment sent to Uzbekistan. In 2020, he designed and manufactured API-compliant pressure relief valves now used by major refineries in India and abroad. By 2022, he led the development of metallic diaphragm pumps, positioning PMP as one of three Indian companies with this product.",
  },
  {
    imgSrc: lder4,
    name: "Ms. Madhuli Mutalik",
    title: "Chief Material Manager",
    description:
      "Ms. Madhuli Mutalik is a second-generation entrepreneur and an integral part of Positive Metering Pumps (I) Pvt Ltd. She has been actively involved with the company for several years, starting her journey by mastering inventory management. Madhuli transformed our material flow by introducing practical approaches and implementing highly effective processes with guidance. She actively participates in material cost negotiations, aiming for win-win solutions that meet both parties' needs and goals. Together with her team, Madhuli ensures optimal inventory levels at all stages, from raw materials to final pump assembly, meeting production demands while minimizing excess stock. This includes generating appropriate reports, monitoring inventory levels and costs, and implementing .",   },
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
        <ResponsiveImage mobileSrc={New} desktopSrc={banner} />
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
                  <div className=" textinfff">
                    <h3
                      className="text-uppercase abtname fw-bold"
                      style={{
                        letterSpacing: "1px",
                        fontFamily: "Roboto",
                 
                      }}
                    >
                      {leader.name}
                    </h3>
                    <h5 >{leader.title}</h5>
                    <p
                      className="fw-medium abouttxt lh-base"
                      style={{
                        fontFamily: "Roboto",
                        textAlign: "justify",
                     
                        paddingup: "20px",
                      }}
                    >
                      {leader.description}
                    </p>
                    <div  className="social-icons">
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
                    <h3
                      className="text-uppercase abtname fw-bold"
                      style={{
                        letterSpacing: "1px",
                        fontFamily: "Roboto",
                        paddingLeft: "20px",
                      }}
                    >
                      {leader.name}
                    </h3>
                    <h5 className="" style={{ paddingLeft: "20px" }}>{leader.title}</h5>
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
