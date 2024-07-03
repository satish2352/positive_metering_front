import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import sampleImage from "../assets/img/News/Rectangle 4345 (1).png";
import newsEventImg1 from "../assets/img/News/newsEvent-img-1.png";
import newsEventImg2 from "../assets/img/News/newsEvent-img-2.png";
import newsEventImg4 from "../assets/img/News/newsEvent-img-4.png";
import "../assets/CSS/aboutus.css";
import Heading from "../components/Heading";
import ResponsiveImage from "./ResponsiveImage";
import imgmobile from "../assets/img/services/mobileview.png";
import imgtop from "../assets/img/services/diskimg.png";
const cardData = [
  {
    title:
      "Phosphate Dosing in propane Dehydrogenation PDH Unit integrated with Polypropylene PP Unit",
    description: "Propylene can be produced as a by-product in the Ethylene Plants or Oil Refining processes.But the demand of Propylene is much higher as compared to the produce that is available in the above sources.Therefore Propane Dehydrogenation like methods are very important these days.",
    imgSrc: newsEventImg1,
  },
  {
    title: "For Sonatrach Refinery, Algeria",
    description:
      "Sonatrach Refinery is the national state-owned oil company of Algeria. Founded in 1963, it is known today to be the largest company in Africa with 154 subsidiaries, and is often referred to as the first African oil “major”. The Sonatrach Refinery is to set up three Central Processing (CPF) facilities at: Hassi Ba Hamou and Reg Mouaded Field (6 MMSCMD capacity) Hassi ",
    imgSrc: newsEventImg2,
  },
  {
    title:
      "Plastic to diesel",
      description:" Feeling Proud to contribute successfully in the first Plant in India to convert Diesel from Plastic. Dosing Pumps specially designed & manufactured by my engineers (@Positive Metering Pumps India Pvt Ltd ) for this plant established in Dehradun, India is being used for an important role. Many thanks to Technip FMC for the opportunity. A demonstration plant for converting plastic waste ",
    imgSrc: sampleImage,

  },
  {
    title: "Wash Filthy Water",
    description: "We are a company into manufacturing of : 1) Chemical Dosing Pumps 2) Skid Mounted Chemical Dosing system 3) Progressive Cavity Screw Pumps 4) High-Pressure Triplex Plunger Pumps 5) Electronic Dosing Pumps 6) Stirrers / Agitators We are supplying to all the well-known EPC companies in the field of Water & Waste Water Treatment like BHEL, L&T, VA Tech ...",
    imgSrc: newsEventImg4,
  },

];

const NewsAndEvents = () => {
  window.scrollTo(0, 0);
  // test 1 making readmore btn bottom
  return (
    <>
      <ResponsiveImage mobileSrc={imgmobile} desktopSrc={imgtop} />
      <Container className="my-5">
        <Heading heading="News & Events" />
        <Row>
          {cardData.map((card, index) => (
            <Col
              key={index}
              xs={12}
              md={6}
              lg={4}
              className="mb-4 rounded-4 p-lg-4"
            >
              <Card className="h-100 rounded-4 infrastructurecard border-bottom border-3 border-danger border-end-0 border-top-0 border-start-0 d-flex flex-column justify-content-between">
                <div>
                  <Card.Img
                    variant="top"
                    src={card.imgSrc}
                    alt={card.title}
                    className="rounded-4 bg-light"
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="newsEventTitleFont fw-bolder"
                    style={{ fontSize: "18px", flexGrow: 1 ,textAlign:"justify"}}
                    >{card.title}
                    
                    </Card.Title>
                    <Card.Text
                      className="newsEventDescFont pt-3"
                      style={{ fontSize: "13px", flexGrow: 1 ,textAlign:"justify",lineHeight:"23px"}}
                    >
                      {card.description}
                    </Card.Text>
                  </Card.Body>
                </div>

                <div className="d-flex justify-content-start pb-3 ps-5">
                  <button
                    style={{ backgroundColor: "transparent" }}
                    className="rounded-5 border-3 px-3 py-2 border border-danger fw-bolder"
                  >
                    Read more
                  </button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default NewsAndEvents;
