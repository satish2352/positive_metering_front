import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Heading from '../components/Heading';
import banner from '../assets/img/About/Rectangle 4417.png';

const Aboutourteam = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get('/team/get-teammembers');
        if (response.data.result) {
          const sortedData = response.data.responseData.sort((a, b) => a.position_no - b.position_no);
          setTeamMembers(sortedData);
        }
      } catch (error) {
        console.error('Error fetching team members:', error);
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
      <Container fluid className='px-0'>
        <img src={banner} className='img-fluid' alt="Banner" />
      </Container>
      <Container fluid style={{ background: "#F7F5EF", paddingTop: '30px' }} className='pb-lg-5'>
        <Heading heading="OUR TEAM" className="py-3 " />
        <Container>
          <Row>
            {teamMembers.map(member => (
              <Col md={4} key={member.id} className="mb-5">
                <Card
                  onMouseEnter={() => handleHover(member.position_no)}
                  onMouseLeave={handleLeave}
                  className="team-card"
                >
                  <div className="image-container">
                    <img
                      variant="top"
                      src={member.img}
                      className={hoveredCard === member.position_no ? 'colored-image teamimg' : 'black-white-image teamimg'}
                      style={{ backgroundColor: '#363636' }}
                    />
                  </div>
                  <Card.Body className={hoveredCard === member.position_no ? 'd-none' : 'd-block'}>
                    <div className='px-2 py-4'>
                      <h5 className='fw-bold text-center'>{member.name}</h5>
                      <Card.Text className='text-center'>{member.designation}</Card.Text>
                    </div>
                  </Card.Body>
                  <Card.Body className={hoveredCard === member.position_no ? 'd-block sencodetext' : 'd-none'}>
                    <div className='sencodesubtext p-lg-3 p-2 text-white'>
                      <h5 className='text-center'>{member.name}</h5>
                      <Card.Subtitle className="mb-lg-2 text-center">{member.designation}</Card.Subtitle>
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
  );
};

export default Aboutourteam;
