import React, { useState, useEffect } from 'react';
import '../../assets/CSS/mainbanner.css';
import Slider from "react-slick";
import { Container, Row } from 'react-bootstrap';
import axios from 'axios';
import Heading from '../../components/Heading';

function OurProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get('homeslider/get-homeslider');
        if (response.data.result) {
          setProducts(response.data.responseData);
        } else {
          setError(response.data.message);
        }
      } catch (error) {
        setError('There was an error making the request!');
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

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
        breakpoint: 1400,
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
    <Container fluid className='my-5 py-lg-5'>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Slider {...settings}>
          {products.filter(product => !product.isActive).map(product => (
            <div key={product.id} className='ourprdcard d-flex justify-content-center p-4'>
             <img src={product.img} className='img-fluid ourprdimg w-100 h-100' alt="" />
            </div>
          ))}
        </Slider>
      )}
    </Container>
  );
}

export default OurProducts;
