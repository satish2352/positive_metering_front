import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import '../../assets/CSS/cards.css';
import imgtop from '../../assets/img/Contactus/conatcttopimg.png';
import imgmobile from '../../assets/img/Contactus/mobileview.png';
import ResponsiveImage from '../../pages/ResponsiveImage';

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
        const response = await axios.get('/contactperson/get-contactpersons');
        if (response.data.result) {
          setContactDetails(response.data.responseData);
        }
      } catch (error) {
        console.error('Error fetching contact details:', error);
      }
    };

    fetchContactDetails();
  }, []);

  return (
    <>
      <ResponsiveImage mobileSrc={imgmobile} desktopSrc={imgtop} />

      <Container fluid className='caontatctcardback py-5 mb-5' style={{ backgroundColor: '#EDEAEA' }}>
        <Row>
          {contactDetails.map((contact) => (
            <Col
              key={contact.id}
              lg={4}
              md={6}
              className='caontatctcardimg py-4'
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div>
                <img src={contact.img} alt="" className='img-fluid' />
              </div>
              <div className='caontatctcardsubsection px-3 py-4'>
                <h4 className='fw-bolder'>{contact.title}</h4>
                <p className='fw-medium'>
                  Contact Person: {contact.person_name}<br />
                  Phone: {contact.phone}<br />
                  Mail: {contact.email}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ContactCard;
