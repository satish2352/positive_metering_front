import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import "../../assets/CSS/cards.css";
import imgtop from "../../assets/img/aa/Group 1000004142 (2).jpg";
import imgmobile from "../../assets/img/aa/Group 1000004143 (1).jpg";
import ResponsiveImage from "../../pages/ResponsiveImage";

const ContactCard = () => {
  const [contactDetails, setContactDetails] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
    });

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
      <ResponsiveImage mobileSrc={imgmobile} desktopSrc={imgtop} />

      <Container
        fluid
        className="caontatctcardback py-5 mb-5"
        style={{ backgroundColor: "#EDEAEA" }}
      >
        <Row>
          {contactDetails
            .filter((contactDetails) => contactDetails.isActive)
            .map((contact) => (
              <Col
                key={contact.id}
                lg={4}
                md={6}
                className="caontatctcardimg py-4"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <div>
                  <img src={contact.img} alt={contact.title} title={contact.title} className="img-fluid" />
                </div>
                <div className="caontatctcardsubsection  py-4">
                  <div className="fw-bolder ps-3 fs-5">{contact.title}</div>

                  <Container className="txtcontact">
                    <Row className="pt-1">
                      <Col xs={3}>
                        <b>ContactTo</b>
                      </Col>
                      <Col xs={9}>: {contact.person_name}</Col>
                    </Row>
                    <Row className="pt-1">
                      <Col xs={3}>
                        <b>Mobile No</b>
                      </Col>
                      <Col xs={9}>
                        : <a href={`tel:${contact.phone}`} aria-label="Positive Metering Pumps" className=" text-dark text-decoration-none" >{contact.phone}</a>
                      </Col>
                    </Row>
                    <Row className="pt-1">
                      <Col xs={3}>
                        <b>Email Id</b>
                      </Col>
                      <Col xs={9}>
                        :{" "}
                        <a href={`mailto:${contact.email}`  } aria-label="Positive Metering Pumps" className='text-dark text-decoration-none'>{contact.email}</a>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default ContactCard;
