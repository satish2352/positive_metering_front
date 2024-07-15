import React from 'react';
import '../../assets/CSS/mainbanner.css';
import Slider from "react-slick";
import { Container, Row } from 'react-bootstrap';

const products = [
  { id: 1, img: require('../../assets/img/Home/Rectangle 114 (1).png') },
  { id: 2, img: require('../../assets/img/Home/Rectangle 114 (1).png') },
  { id: 3, img: require('../../assets/img/Home/Rectangle 114 (1).png') },
  { id: 4, img: require('../../assets/img/Home/Rectangle 114 (1).png') },
  { id: 5, img: require('../../assets/img/Home/Rectangle 114 (1).png') },
  { id: 6, img: require('../../assets/img/Home/Rectangle 114 (1).png') },
];

function OurProducts() {
  const slidesToShow = 5;
  const slidesToScroll = 0;

  const settings = {
    speed: 500,
    centerMode: true,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    initialSlide: slidesToShow,
    autoplay: true,
    speed: 3500,
    autoplaySpeed: 3500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
    <Container fluid className='my-5'>
      <Slider {...settings}>
        {products.map(product => (
          <div key={product.id} className='ourprdcard d-flex justify-content-center' >
            <h3><img src={product.img} className='img-fluid ourprdimg' alt="" /></h3>
          </div>
        ))}
      </Slider>
      <Row className='text-center'>
        {/* <h1 className='oueprd'>OUR PRODUCTS</h1> */}
      </Row>
    </Container>
  );
}

export default OurProducts;
