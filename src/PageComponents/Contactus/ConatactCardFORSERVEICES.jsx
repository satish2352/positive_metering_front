import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import "../../assets/CSS/cards.css";
import imgtop from "../../assets/img/aa/Group 1000004142 (2).jpg";
import imgmobile from "../../assets/img/aa/Group 1000004143 (1).jpg";
import ResponsiveImage from "../../pages/ResponsiveImage";
import Card from 'react-bootstrap/Card';
import Heading from "../../components/Heading";
import { FaPhoneAlt , FaEnvelope, FaUser } from 'react-icons/fa';

const ConatactCardFORSERVEICES = () => {
  const [contactDetails, setContactDetails] = useState([]);

  useEffect(() => {


    // Fetch contact details from the API
    const fetchContactDetails = async () => {
      try {
        const response = await axios.get("/contactperson/get-contactpersons");
        if (response.data.result) {
          setContactDetails(response.data.responseData);
        }
      } catch (error) {
        console.error("Error fetching contact details:", error);
      }
    };

    fetchContactDetails();
  }, []);

  return (
    <>

      <Container
        fluid
        className="caontatctcardback py-5 mb-5"
        style={{ backgroundColor: "#EDEAEA" }}
      >    <Heading heading="Pre Order Services"></Heading>

        <Row className=" d-flex justify-content-center">
          <Col lg={10} >
            <Row>
              {contactDetails
                .filter((contactDetails) => contactDetails.isActive)
                .map((contact) => (
                  <>

                    <Col
                      key={contact.id}
                      xs={12}
                      md={6}
                      lg={4}
                      className="mb-4  rounded-4 py-2 px-lg-4"
                    >
                      <Card className="h-100 rounded-4 infrastructurecard border-bottom border-3 border-danger border-end-0 border-top-0 border-start-0 ">
                        <Card.Img
                          variant="top"
                          src={contact.img}
                          className="rounded-4"
                        />
                             <h5 className="fw-bolder ps-3 text-center">{contact.title}</h5>
                        <Card.Body className="infrastructurecardinfo">
                          <Container className="txtcontact1">
                            <Row className="pt-1">
                              <Col xs={2}>
                                <FaUser className="digital-icon" />
                              </Col>
                              <Col xs={10}> {contact.person_name}</Col>
                            </Row>
                            <Row className="pt-1">
                              <Col xs={2}>
                                <FaPhoneAlt  className="digital-icon" />
                              </Col>
                              <Col xs={10}>
                                 <a href={`tel:${contact.phone}`} className="text-dark text-decoration-none">{contact.phone}</a>
                              </Col>
                            </Row>
                            <Row className="pt-1">
                              <Col xs={2}>
                                <FaEnvelope className="digital-icon" />
                              </Col>
                              <Col xs={10}>
                                 <a href={`mailto:${contact.email}`} className='text-dark text-decoration-none'>{contact.email}</a>
                              </Col>
                            </Row>
                          </Container>
                        </Card.Body>

                      </Card>
                    </Col>
                  </>
                ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};



export default ConatactCardFORSERVEICES