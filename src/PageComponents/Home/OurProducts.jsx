import React from 'react'
import '../../assets/CSS/mainbanner.css'

import Slider from "react-slick";
import im from "../../assets/img/Home/Rectangle 116 (1).png"
import im1 from "../../assets/img/Home/Rectangle 114 (1).png"
import im2 from "../../assets/img/Home/Rectangle 113.png"
import { Container, Row } from 'react-bootstrap';



function OurProducts() {

  var settings = {
    infinite: false,
    speed: 500,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Container fluid>
      <Slider {...settings}>
        <div className=' ourprdcard'>
          <h3><img src={im} className=' img-fluid  ' alt="" /></h3>
        </div>
        <div className=' ourprdcard'>
          <h3><img src={im2} className=' img-fluid  ' alt="" /></h3>
        </div>
        <div className=' ourprdcard'>
          <h3><img src={im1} className=' img-fluid  ' alt="" /></h3>
        </div>
        <div className=' ourprdcard'>
          <h3><img src={im} className=' img-fluid  ' alt="" /></h3>
        </div>
        <div className=' ourprdcard'>
          <h3><img src={im2} className=' img-fluid  ' alt="" /></h3>
        </div>
        <div className=' ourprdcard'>
          <h3><img src={im} className=' img-fluid  ' alt="" /></h3>
        </div>
      </Slider>
      <Row className=' text-center '>
        <h1 className='oueprd'>OUR PRODUCTS</h1>
      </Row>
    </Container>
  );
}

export default OurProducts