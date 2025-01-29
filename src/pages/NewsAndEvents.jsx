import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import "../assets/CSS/aboutus.css";
import Heading from "../components/Heading";
import ResponsiveImage from "./ResponsiveImage";
import imgmobile from "../assets/img/aa/mobile/news PAGE.jpg";
import imgtop from "../assets/img/aa/baner/BANER news.jpg";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import { FaDownload } from "react-icons/fa6";
import "aos/dist/aos.css";

const NewsAndEvents = () => {
  document.title = "News | Positive Metering Pumps I Private Limited,Nashik - Manufacturer of Dosing System and Agitators"
  const [cardData, setCardData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/news/get-news")
      .then((response) => {
        setCardData(response.data.responseData);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
    });
  }, []);

  const handleDownload = (pdfUrl) => {
    if (pdfUrl) {
      window.open(pdfUrl, "_blank");
    }
  };

  return (
    <>
      <ResponsiveImage mobileSrc={imgmobile} desktopSrc={imgtop} />
      <Container
        fluid
        className="my-0"
        style={{ backgroundColor: "#F7F5EF", paddingTop: "40px" }}
      >
    
        <Container>
                <Row className=' text-center'>
                    <h1 className='oueprd text-uppercase mt-3' >News</h1>
                </Row>
            </Container>
        <Row>
          {cardData
            .filter((cardData) => cardData.isActive)
            .map((card, index) => (
              <Col
                key={index}
                xs={12}
                md={6}
                lg={4}
                className="mb-4 rounded-4 p-lg-4"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
              >
                <Card className="h-100 rounded-4 infrastructurecard border-bottom border-3 border-danger border-end-0 border-top-0 border-start-0 d-flex flex-column justify-content-between">
                  <div>
                    <Card.Img
                      variant="top"
                      src={card.img}
                      alt={card.title}
                      className="rounded-4 bg-light"
                    />
                    <Card.Body className="d-flex flex-column">
                      <Card.Title
                        className="newsEventTitleFont fw-bolder"
                        style={{
                          fontSize: "18px",
                          flexGrow: 1,
                          textAlign: "justify",
                        }}
                      >
                        {card.title.length > 40
                          ? card.title.substring(0, 40) + "..."
                          : card.title}
                      </Card.Title>
                      <Card.Text
                        className="newsEventDescFont pt-3"
                        style={{
                          fontSize: "13px",
                          flexGrow: 1,
                          textAlign: "justify",
                          lineHeight: "23px",
                        }}
                        dangerouslySetInnerHTML={{
                          __html: `${card.shortDesc}. . .`,
                        }}
                      ></Card.Text>
                    </Card.Body>
                  </div>

                  <div className="d-flex justify-content-end pb-3 pe-4">
                    {card.pdf && (
                      <button
                        className="rounded-5 border-3 mx-3 px-3 py-2 border border-danger fw-bolder d-none d-lg-block"
                        onClick={() => handleDownload(card.pdf)}
                        style={{ cursor: "pointer" }}
                      >
                        <FaDownload />
                      </button>
                    )}
                     {card.pdf && (
                      <a
                        className="rounded-5 border-3 mx-3 px-3 py-2 border border-danger fw-bolder text-dark d-block d-lg-none"
                        // onClick={() => handleDownload(card.pdf)}
                        target="_blank"aria-label="Positive Metering Pumps"
                        href={card.pdf}
                        style={{ cursor: "pointer" }}
                      >
                        <FaDownload />
                      </a>
                    )}
                    <button
                      style={{ backgroundColor: "transparent" }}
                      className="rounded-5 border-3 px-3 py-2 border border-danger fw-bolder"
                      onClick={() => navigate(`/newevents/${card.title.toLowerCase().replace(/\s+/g, '-')}`)}
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
