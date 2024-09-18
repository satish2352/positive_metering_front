import React, { useState, useEffect } from 'react';
import { Container, Col, Modal, Button, Row } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating';
import Slider from 'react-slick';
import Heading from '../../components/Heading';
import axios from 'axios';

const Testomonial2 = () => {
  const [testimonial, setTestimonial] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get('testimonials/get-testimonials');
        if (response.data.result) {
          setTestimonial(response.data.responseData);
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

  const handleShowModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedTestimonial(null);
  };

  const truncateReview = (review, limit = 200) => {
    if (review.length <= limit) return review;
    return review.substring(0, limit) + '...';
  };

  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    speed: 20000,
    autoplaySpeed: 7000,
    cssEase: 'linear',
    infinite: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
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
    <Container fluid className='testomonialback d-none d-lg-block py-5 text-center'>
      <Heading heading={'TESTIMONIALS'} />
  
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>No Data Found</p>
      ) : (
        <>
          {testimonial.length < 3 ? (
            <Row>
              {testimonial.map((testimonial) => (
                <Col key={testimonial.id} md={4} className='text-center'>
                  <div onClick={() => handleShowModal(testimonial)}>
                    <div className='profileposition'>
                      <h1 className='testomonialprofile'>{testimonial.experience}</h1>
                    </div>
                    <div className='testback'>
                      <h4>{testimonial.company_Name}</h4>
                      <p style={{fontSize:"13px"}}>
                        {truncateReview(testimonial.review, 200)}
                        {testimonial.review.length > 200 && (
                          <span className='read-more'>
                            ... <b>Read More</b>
                          </span>
                        )}
                      </p>
                      <Rating
                        iconsCount={5}
                        initialValue={testimonial.star}
                        size={20}
                        readonly
                        fillColor='orange'
                        emptyColor='gray'
                      />
                      <div className='text-dark py-2' style={{ fontStyle: 'italic' }}>
                        -{testimonial.name}
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          ) : (
            <Slider {...settings}>
              {testimonial.map((testimonial) => (
                <div key={testimonial.id} onClick={() => handleShowModal(testimonial)}>
                  <div className='profileposition'>
                    <h1 className='testomonialprofile'>{testimonial.experience}</h1>
                  </div>
                  <div className='testback'>
                    <p>
                      {truncateReview(testimonial.review, 200)}
                      {testimonial.review.length > 200 && (
                        <span className='read-more'>
                          ... <b>Read More</b>
                        </span>
                      )}
                    </p>
                    <Rating
                      iconsCount={5}
                      initialValue={testimonial.star}
                      size={20}
                      readonly
                      fillColor='orange'
                      emptyColor='gray'
                    />
                    <div className='text-dark py-2' style={{ fontStyle: 'italic' }}>
                      -{testimonial.name}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          )}
        </>
      )}
  
      {selectedTestimonial && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedTestimonial.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Col className='text-center'>
              <div className='profileposition'>
                <h1 className='testomonialprofile'>{selectedTestimonial.experience}</h1>
              </div>
              <div className='testback2'>
                <h4>{selectedTestimonial.company_Name}</h4>
                <p>{selectedTestimonial.review}</p>
                <Rating
                  iconsCount={5}
                  initialValue={selectedTestimonial.star}
                  size={20}
                  readonly
                  fillColor='orange'
                  emptyColor='gray'
                />
                <div className='text-dark py-2' style={{ fontStyle: 'italic' }}>
                  -{selectedTestimonial.name}
                </div>
              </div>
            </Col>
          </Modal.Body>
        </Modal>
      )}
    </Container>
  );
  

};



export default Testomonial2