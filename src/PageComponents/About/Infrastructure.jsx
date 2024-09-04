import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import "../../assets/CSS/aboutus.css";
import Heading from "../../components/Heading";

const Infrastructure = () => {
  const [infrastructureData, setInfrastructureData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/infrastructure/get-infrastructure");
        setInfrastructureData(response.data.responseData);
        console.log(response);
      } catch (error) {
        console.error("Error fetching the infrastructure data:", error);
      }
    };

    fetchData();
  }, []);

  const handleShowModal = (card) => {
    setSelectedCard(card);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCard(null);
  };

  return (
    <Container style={{ backgroundColor: "white" }}>
      <Heading heading="Infrastructure" />
      {infrastructureData.length === 0 ? (
        <> Data Not Found</>
      ) : (
        <>
          <Row>
            {infrastructureData
              .filter((item) => item.isActive)
              .map((card, index) => (
                <Col
                  key={index}
                  xs={12}
                  md={6}
                  lg={4}
                  className="mb-4 rounded-4 p-lg-4 text-center"
                >
                  <Card className="h-100 rounded-4 infrastructurecard border-bottom border-3 border-danger border-end-0 border-top-0 border-start-0">
                    <Card.Img
                      variant="top"
                      src={card.img}
                      alt={card.title}
                      className="rounded-4"
                    />
                    <Card.Body className="infrastructurecardinfo">
                      <Card.Title className="fw-bolder">
                        {card.title}
                      </Card.Title>
                      <Card.Text className="px-lg-3">
                        {card.desc.length > 70
                          ? `${card.desc.substring(0, 70)}...`
                          : card.desc}
                      </Card.Text>

                    </Card.Body>
                    
                    <p onClick={() => handleShowModal(card)} className=" fw-bold" style={ {position:"relative" , bottom:"-1px"}}> Read More</p>
                  </Card>
                </Col>
              ))}
          </Row>

          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>{selectedCard?.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={selectedCard?.img}
                alt={selectedCard?.title}
                className="img-fluid rounded-4 mb-3"
              />
              <p>{selectedCard?.desc}</p>
            </Modal.Body>
          </Modal>
        </>
      )}
    </Container>
  );
};

export default Infrastructure;
