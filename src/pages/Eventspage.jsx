import React, { useEffect, useState } from "react";
import axios from "axios";
import im from "../assets/img/DGHGF.png";
import Heading from "../components/Heading";
import ResponsiveImage from "./ResponsiveImage";
import imgmobile from "../assets/img/aa/events PAGE.jpg";
import imgtop from "../assets/img/aa/BANER event.jpg";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { IoMdClose } from "react-icons/io";

const Eventspage = () => {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("/events/get-events");
        setEvents(response.data.responseData);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const handleImageClick = (imageUrl) => {
    setModalImage(imageUrl);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <div>
      <ResponsiveImage mobileSrc={imgmobile} desktopSrc={imgtop} />
      <Heading heading="Events" />

      <Container>
        <Row>
          {events.map((event) => (
            <Col key={event.id} xs={12} lg={4} md={6} className="mb-4">
              <img
                src={event.img}
                className="eventimg rounded-4"
                alt={event.title}
                onClick={() => handleImageClick(event.img)}
                style={{ cursor: "pointer" }}
              />
            </Col>
          ))}
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleClose} centered>    <Button
          onClick={handleClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            backgroundColor: "transparent",
            border: "none",
            zIndex: 9999
          }}
        >
          <IoMdClose
            style={{
              color: "white",
              fontSize: "24px",
              backgroundColor: "transparent",
            }}
          />
        </Button>
      <Modal.Body className="p-0 d-flex justify-content-center align-items-center position-relative">
    
        <img
          src={modalImage}
          className="img-fluid"
          alt="Event"
          style={{ width: "100%", height: "auto" }}
        />
      </Modal.Body>
    </Modal>
    </div>
  );
};

export default Eventspage;
