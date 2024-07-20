import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import "../../assets/CSS/aboutus.css";
import { ProductContext } from '../../ProductContext';
import { useNavigate } from 'react-router-dom';
const ProductTab = () => {
  const [activeTab, setActiveTab] = useState(11);
  const { products } = useContext(ProductContext);
  const navigate =useNavigate()
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
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const activeProduct = products.find((product) => product.id === activeTab);

  return (
    <Container fluid className="mt-3 p-lg-5" style={{ background: '#EFEFEF', position: 'relative' }}>
      <Row className="d-flex align-items-center">
        <Col lg={1} className="d-grid align-items-center round d-none d-lg-block">
          <div className="graycircle"></div>
        </Col>
        <Col lg={11} style={{ backgroundColor: '#fff', position: 'relative' }} className="box border-1 border-dark-subtle border p-lg-4">
          <Row className="align-items-center chartslider">
            <Col lg={6} className="px-0">
              {activeProduct && (
                <img
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                  src={activeProduct.img}
                  alt={activeProduct.productName}
                  className="img-fluid p-5 p-lg-1"
                  style={{ width: '700px', height: '400px', marginBottom: '30px' }}
                />
              )}
            </Col>
            <Col lg={6} className="homeaboutinfo text-black" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
              <div className="p-lg-3 p-4" style={{ textAlign: 'justify' }}>
                {activeProduct && (
                  <>
                    <h1 className="pulgertitle" style={{ color: '#434343' }}>
                      {activeProduct.productName}
                    </h1>
                    <h3 className="pulgersubtitle" style={{ fontFamily: 'Poppins', fontSize: '20px' }}>
                      {activeProduct.subtitle}
                    </h3>
                    <p style={{ fontFamily: 'Poppins', fontSize: '16px' }}>
                      {activeProduct.application}
                    </p>
                    {activeProduct.features && (
                      <ul className="pulgerlist" style={{ fontFamily: 'Poppins' }}>
                        {activeProduct.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    )}
                    <Button variant="outline-dark" className="rounded-5 py-2 px-4 shadow-sm"
                    onClick={()=>navigate(`/Product/${activeProduct.id}`)}
                    >
                      Read More
                    </Button>
                  </>
                )}
              </div>
              <div className="pb-3">
                <Slider {...settings}>
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className={`plungercard mx-1  d-grid justify-content-center ${activeTab === product.id ? 'active' : ''}`}
                      onClick={() => handleTabClick(product.id)}
                    >
                      <img variant="top" src={product.img} className="prdimg img-fluid p-2" />
                      <div style={{ fontSize: '12px' }} className="text-center pb-3">
                        {product.productName}
                      </div>
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
