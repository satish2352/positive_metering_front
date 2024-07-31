import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import "../assets/CSS/aboutus.css";
import Heading from "../components/Heading";
import ResponsiveImage from "./ResponsiveImage";
import imgmobile from "../assets/img/services/mobileview.png";
import imgtop from "../assets/img/services/diskimg.png";
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
const NewsAndEvents = () => {
  const [cardData, setCardData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    axios.get('/newsandevent/get-newevents')
      .then(response => {
        setCardData(response.data.responseData);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <>
      <ResponsiveImage mobileSrc={imgmobile} desktopSrc={imgtop} />
      <Container fluid className="my-0" style={{ backgroundColor: '#F7F5EF', paddingTop: '40px' }}>
        <Heading heading="News & Events" />
        <Row>
          {cardData.map((card, index) => (
            <Col
              key={index}
              xs={12}
              md={6}
              lg={4}
              className="mb-4 rounded-4 p-lg-4" data-aos="fade-up"
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
                    <Card.Title className="newsEventTitleFont fw-bolder"
                      style={{ fontSize: "18px", flexGrow: 1, textAlign: "justify" }}
                    >
                      
                      {card.title.length > 40
                              ? card.title.substring(0, 40) + "..."
                              : card.title}
                    </Card.Title>
                    <Card.Text
                      className="newsEventDescFont pt-3"
                      style={{ fontSize: "13px", flexGrow: 1, textAlign: "justify", lineHeight: "23px" }}
                    >
                      {card.shortDesc}
                    </Card.Text>
                  </Card.Body>
                </div>

                <div className="d-flex justify-content-end pb-3 pe-4">
                  <button
                    style={{ backgroundColor: "transparent" }}
                    className="rounded-5 border-3 px-3 py-2 border border-danger fw-bolder"
                    onClick={() => navigate(`/newevents/${card.id}`)}
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
