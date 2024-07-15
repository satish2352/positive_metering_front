import React from 'react';
import { Container, Col } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import Slider from 'react-slick';
import Heading from '../../components/Heading';
import im1 from '../../assets/img/Home/8538f65b57b894ab67325c5349657e23.png';

const Testomonial = () => {
  // Testimonial data (for example)
  const testimonials = [
    {
      id: 1,
      profileImg: im1,
      title: 'Good service',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      stars: 4,
    },
    {
      id: 2,
      profileImg: im1,
      title: 'Good service',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      stars: 4,
    },
    {
      id: 3,
      profileImg: im1,
      title: 'Good service',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      stars: 4,
    },,   {
      id: 1,
      profileImg: im1,
      title: 'Good service',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      stars: 4,
    },
    {
      id: 2,
      profileImg: im1,
      title: 'Good service',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      stars: 4,
    },
    {
      id: 3,
      profileImg: im1,
      title: 'Good service',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      stars: 4,
    },
    // Add more testimonials as needed
  ];

  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 100,
    cssEase: "linear",
    infinite: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container fluid className='testomonialback py-5 text-center' style={{marginTop:'-90px'}}>
      <Heading heading={'TESTIMONIALS'}/>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className='text-center'>
            <Col>
              <div className='profileposition'>
                <img
                  src={testimonial.profileImg}
                  alt=''
                  className='testomonialprofile img-fluid'
                />
              </div>
              <div className='testback'>
                <h1>{testimonial.title}</h1>
                <p>{testimonial.content}</p>
                <div className='d-flex justify-content-center'>
                  {[...Array(testimonial.stars)].map((_, index) => (
                    <FaStar key={index} className='star' />
                  ))}
                  {[...Array(5 - testimonial.stars)].map((_, index) => (
                    <FaStar key={index + 5} className='star1' />
                  ))}
                </div>
              </div>
            </Col>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default Testomonial;
