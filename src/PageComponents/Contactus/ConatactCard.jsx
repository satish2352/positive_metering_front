import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../assets/CSS/cards.css';
import im1 from '../../assets/img/Contactus/image 16 (1).png';
import im2 from '../../assets/img/Contactus/image114.png';
import im3 from '../../assets/img/Contactus/image 16 (3).png';
import im4 from '../../assets/img/Contactus/image 16 (4).png';
import im5 from '../../assets/img/Contactus/image 16 (5).png';
import imgtop from '../../assets/img/Contactus/conatcttopimg.png';
import imgmobile from '../../assets/img/Contactus/mobileview.png';
import ResponsiveImage from '../../pages/ResponsiveImage';

const contactDetails = [
  {
    id: 1,
    img: im1,
    title: 'Spares',
    contactPerson: 'Ms. Kalpana Jadhav',
    phone: '+91 9552590843',
    email: 'support@positivemetering.com'
  },
  {
    id: 2,
    img: im2,
    title: 'Spares',
    contactPerson: 'Ms. Kalpana Jadhav',
    phone: '+91 9552590843',
    email: 'support@positivemetering.com'
  },
  {
    id: 3,
    img: im3,
    title: 'Spares',
    contactPerson: 'Ms. Kalpana Jadhav',
    phone: '+91 9552590843',
    email: 'support@positivemetering.com'
  },
  {
    id: 4,
    img: im4,
    title: 'Spares',
    contactPerson: 'Ms. Kalpana Jadhav',
    phone: '+91 9552590843',
    email: 'support@positivemetering.com'
  },
  {
    id: 5,
    img: im5,
    title: 'Spares',
    contactPerson: 'Ms. Kalpana Jadhav',
    phone: '+91 9552590843',
    email: 'support@positivemetering.com'
  },
  {
    id: 6,
    img: im1,
    title: 'Spares',
    contactPerson: 'Ms. Kalpana Jadhav',
    phone: '+91 9552590843',
    email: 'support@positivemetering.com'
  }
];

const ConatactCard = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <>
      <ResponsiveImage mobileSrc={imgmobile} desktopSrc={imgtop} />

      <Container fluid className='caontatctcardback py-5 mb-5' style={{backgroundColor:'#EDEAEA'}}>
        <Row>
          {contactDetails.map((contact) => (
            <Col
              key={contact.id}
              lg={4}
              md={6}
              className='caontatctcardimg py-4'
              data-aos="zoom-out"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div>
                <img src={contact.img} alt="" className='img-fluid' />
              </div>
              <div className='caontatctcardsubsection px-3 py-4'>
                <h4 className='fw-bolder'>{contact.title}</h4>
                <p className='fw-medium'>
                  Contact Person: {contact.contactPerson}<br />
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

export default ConatactCard;
