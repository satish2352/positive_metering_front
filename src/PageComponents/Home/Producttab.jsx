import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import "../../assets/CSS/aboutus.css";
import productImage1 from '../../assets/img/Home/image-removebg-preview (83) 2 (2).png';
import productImage2 from '../../assets/img/Home/image-removebg-preview (85) 2 (1).png';
import productImage3 from '../../assets/img/Home/image-removebg-preview (87) 1.png';
import productImage4 from '../../assets/img/Home/Group 3430.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const products = [
  {
    id: 1,
    image: productImage4,
    title: 'PLUNGER',
    subtitle: 'type dosing pumps',
    features: [
      'Performance Conforms To API 675.',
      'Precise Metering Devices.',
      'Plunger Is Hard Chrome Plated.',
      'Flow Rate Is Linear To Stroke Length Variation.'
    ]
  },
  {
    id: 2,
    image: productImage2,
    title: 'PLUNGER2',
    subtitle: '',
    features: [
      'Performance Conforms To API 675.',
      'Precise Metering Devices.',
      'Plunger Is Hard Chrome Plated.',
      'Flow Rate Is Linear To Stroke Length Variation.'
    ]
  },
  {
    id: 3,
    image: productImage3,
    title: 'PLUNGER 3',
    subtitle: '',
    features: [
      'Performance Conforms To API 675.',
      'Precise Metering Devices.',
      'Plunger Is Hard Chrome Plated.',
      'Flow Rate Is Linear To Stroke Length Variation.'
    ]
  },
  {
    id: 4,
    image: productImage4,
    title: 'PLUNGER 4',
    subtitle: '',
    features: [
      'Performance Conforms To API 675.',
      'Precise Metering Devices.',
      'Plunger Is Hard Chrome Plated.',
      'Flow Rate Is Linear To Stroke Length Variation.'
    ]
  }
];

const ProductTab = () => {
  const [activeTab, setActiveTab] = useState(1); // Initialize active tab to the first product

  useEffect(() => {
    AOS.init();
  }, []);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <Container fluid className="mt-3 p-lg-5" style={{ background: "#EFEFEF", position: "relative" }}>
      <Row className='d-flex align-items-center'>
        <Col lg={1} className='d-grid align-items-center round d-none d-lg-block'>
          <div className='graycircle'></div>
        </Col>
        <Col lg={11} style={{ backgroundColor: "#fff", position: "relative" }} className='box border-1 border-dark-subtle border p-lg-4'>
          <Row className="align-items-center chartslider">
            <Col lg={6} className="px-0">
              <img data-aos="fade-up"data-aos-easing="linear"
              data-aos-duration="1500" src={products.find(product => product.id === activeTab).image} alt="Plunger Type Dosing Pump" className="img-fluid p-5 p-lg-1" style={{ width: '700px' }} />
            </Col>
            <Col lg={6} className="homeaboutinfo text-black" data-aos="fade-up"data-aos-easing="linear"
              data-aos-duration="1500">
              <div className="p-lg-3 p-4" style={{ textAlign: "justify" }}>
                <h1 className='pulgertitle' style={{color:'#434343'}}>{products.find(product => product.id === activeTab).title}</h1>
                <h3 className='pulgersubtitle' style={{fontFamily:'Poppins' , fontSize:'20px' }}>{products.find(product => product.id === activeTab).subtitle}</h3>
                <ul className='pulgerlist' style={{fontFamily:'Poppins'}}>
                  {products.find(product => product.id === activeTab).features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <Button variant="outline-dark" className='rounded-5 py-2 px-4 shadow-sm'>Read More</Button>
              </div>
              <div className='pb-3'>
                <Slider {...settings}>
                  {products.map((product) => (
                    <div key={product.id} className={`plungercard mx-1 ${activeTab === product.id ? 'active' : ''}`} onClick={() => handleTabClick(product.id)}>
                      <Card.Img variant="top" src={product.image} className='prdimg img-fluid p-2' />
                      <div style={{ fontSize: "12px" }} className='text-center'>{product.title}</div>
                    </div>
                  ))}
                </Slider>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductTab;
