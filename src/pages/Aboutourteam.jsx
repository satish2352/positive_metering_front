import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Col, Container, Row } from "react-bootstrap";
import Heading from "../components/Heading";
import New from "../assets/img/services/Frame 98 (1).jpg";
import banner from "../assets/img/services/2540 x 1023 222.jpg";
import ResponsiveImage from "./ResponsiveImage";
import MetaTags from "../components/MetaTags";
const metaDetails = {
  title: 'About Positive Metering Pvt. Ltd: Leading Metering Pump Manufacturer',
  description: 'Positive Metering Pvt. Ltd, a top manufacturer of metering pumps, including chlorine dosing pumps in India. Trust our dosing pump and diaphragm pump expertise.',
  keywords: 'Metering Pump Manufacturer in India',
  slug: 'aboutleadership',
  alt: 'About Positive Metering Pvt. Ltd: Leading Metering Pump Manufacturer',
};
const Aboutourteam = () => {
  document.title = "Aboutus | Positive Metering Pumps I Private Limited,Nashik - Manufacturer of Dosing System and Agitators"
  const [hoveredCard, setHoveredCard] = useState(null);
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get("/team/get-teammembers");
        if (response.data.result) {
          const sortedData = response.data.responseData.sort(
            (a, b) => a.position_no - b.position_no
          );
          setTeamMembers(sortedData);
        }
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    };

    fetchTeamMembers();
  }, []);

  const handleHover = (cardId) => {
    setHoveredCard(cardId);
  };

  const handleLeave = () => {
    setHoveredCard(null);
  };

  return (
    <>
      <MetaTags
        title={metaDetails.title}
        description={metaDetails.description}
        keywords={metaDetails.keywords}
        slug={metaDetails.slug}
        alt={metaDetails.alt}
      />
      {" "}
      {teamMembers.length === 0 ? (
        <> Data Not Found</>
      ) : (
        <>
          <Container fluid className="px-0">
            <ResponsiveImage mobileSrc={New} desktopSrc={banner} />
          </Container>
          <Container
            fluid
            style={{ background: "#F7F5EF", paddingTop: "30px" }}
            className="pb-lg-5"
          >
      
            <Container>
                <Row className=' text-center'>
                    <h1 className='oueprd text-uppercase mt-3 py-3' >OUR TEAM</h1>
                </Row>
            </Container>
            <Container>
              <Row>
                {teamMembers
                  .filter((teamMembers) => teamMembers.isActive)
                  .map((member) => (
                    <Col md={6} lg={4} key={member.id} className="mb-5">
                      <Card
                        onMouseEnter={() => handleHover(member.position_no)}
                        onMouseLeave={handleLeave}
                        className="team-card"
                      >
                        <div className="image-container">
                          <img
                            variant="top"
                            src={member.img}
                            alt={member.name}
                            title={member.name}
                            className={
                              hoveredCard === member.position_no
                                ? "colored-image teamimg"
                                : "black-white-image teamimg"
                            }
                            style={{ backgroundColor: "#363636" }}
                          />
                        </div>
                        <Card.Body
                          className={
                            hoveredCard === member.position_no
                              ? "d-none"
                              : "d-block"
                          }
                        >
                          <div className="px-2 py-4">
                            <h5 className="fw-bold text-center">
                              {member.name}
                            </h5>
                            <Card.Text className="text-center">
                              {member.designation}
                            </Card.Text>
                          </div>
                        </Card.Body>
                        <Card.Body
                          className={
                            hoveredCard === member.position_no
                              ? "d-block sencodetext"
                              : "d-none"
                          }
                        >
                          <div className="sencodesubtext p-lg-3 p-2 text-white">
                            <h5 className="text-center">{member.name}</h5>
                            <Card.Subtitle className="mb-lg-2 text-center">
                              {member.designation}
                            </Card.Subtitle>
                            <Card.Text style={{ fontSize: "12px" }}>
                              {member.description}
                            </Card.Text>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
              </Row>
            </Container>
          </Container>
        </>
      )}
    </>
  );
};

export default Aboutourteam;
