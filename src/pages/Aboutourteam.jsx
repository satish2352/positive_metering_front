import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import lder1 from '../assets/img/About/image 6.png';
import Heading from '../components/Heading';

const teamMembers = [
  { id: 1, name: "LA. THARUNAKUMAR", title: "Chairman", image: lder1 },
  { id: 2, name: "MS. JOTHIMONI AMMU", title: "CEO", image: lder1 },
  { id: 3, name: "MR. RANJITH KUMAR", title: "Member", image: lder1 },
  // Add all team members here
];

const Aboutourteam = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleHover = (cardId) => {
    setHoveredCard(cardId);
  };

  const handleLeave = () => {
    setHoveredCard(null);
  };

  return (
    <Container fluid style={{ background: "#F7F5EF" }}>
           <Heading heading="OUR TEAM" className="py-3"/>
      <Container>
        <Row>
          {teamMembers.map(member => (
            <Col md={4} xs={12} key={member.id} className="mb-4">
              <Card
                onMouseEnter={() => handleHover(member.id)}
                onMouseLeave={handleLeave}
                className="team-card"
              >
                <div className="image-container">
                  <Card.Img
                    variant="top"
                    src={member.image}
                    className={hoveredCard === member.id ? 'colored-image' : 'black-white-image'}
                  />
                </div>
                <Card.Body className={hoveredCard === member.id ? 'd-none' : 'd-block'}>
                  <div className='px-2 py-4'>
                    <h5 className='fw-bold text-center'>{member.name}</h5>
                    <Card.Text className=' text-center'>{member.title}</Card.Text>
                  </div>
                </Card.Body>
                <Card.Body className={hoveredCard === member.id ? 'd-block sencodetext' : 'd-none'}>
                  <div className='sencodesubtext p-lg-3 text-white'>
                    <h5 className='text-center'>Mrs. Jyotsana Mutalik</h5>
                    <Card.Subtitle className="mb-lg-2 text-center">CEO Finance Director</Card.Subtitle>
                    <Card.Text style={{ fontSize: "12px" }}>
                      After working over the product for a few years and studying applications
                      in various sectors,
                      Positive Metering Pumps company was founded in 1996 for manufacturing
                      of Chemical Dosing Pumps and
                      Skid Mounted Chemical Dosing Systems.
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Aboutourteam;
