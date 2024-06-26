import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Replace these paths with your actual image paths
import productImage1 from '../../assets/img/Home/image-removebg-preview (83) 2 (2).png';
import productImage2 from '../../assets/img/Home/image-removebg-preview (85) 2 (1).png';
import productImage3 from '../../assets/img/Home/image-removebg-preview (87) 1.png';
import productImage4 from '../../assets/img/Home/Group 3430.png';

const products = [
  {
    id: 1,
    image: productImage1,
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

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <Container fluid className="mt-3 p-lg-5" style={{ background: "#EFEFEF", position: "relative" }}>
      <Row>
        <Col lg={1} className='d-grid align-items-center round d-none d-lg-block'>
          <div className='graycircle'></div>
        </Col>
        <Col lg={11} style={{ backgroundColor: "#fff", position: "relative" }} className='box border-1 border-dark-subtle border p-lg-4'>
          <Row className="align-items-center chartslider">
            <Col lg={6} className="px-0">
              <img src={products.find(product => product.id === activeTab).image} alt="Plunger Type Dosing Pump" className="img-fluid" />
            </Col>
            <Col lg={6} className="homeaboutinfo text-black">
              <div className="p-lg-3" style={{ textAlign: "justify" }}>
                <h1 className='pulgertitle'>{products.find(product => product.id === activeTab).title}</h1>
                <h3 className='pulgersubtitle'>{products.find(product => product.id === activeTab).subtitle}</h3>
                <ul className='pulgerlist'>
                  {products.find(product => product.id === activeTab).features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <Button variant="outline-dark" className='rounded-5 py-2 px-4 shadow-sm'>Read More</Button>
              </div>
              <div> <Row className="m-3 d-flex justify-content-evenly">
                {products.map((product) => (
                  <Col key={product.id} className={`plungercard mx-1 ${activeTab === product.id ? 'active' : ''}`} onClick={() => handleTabClick(product.id)}>
                    <Card.Img variant="top" src={product.image} className='img-fluid p-2' />
                    <div style={{ fontSize: "12px" }} className='text-center'>{product.title}</div>
                  </Col>
                ))}
              </Row></div>
            </Col>
          </Row>

        </Col>
      </Row>
    </Container>
  );
};

export default ProductTab;
