import React, { useState, useEffect } from 'react';
import { Container, Col, Modal, Button, Row } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating';
import Slider from 'react-slick';
import Heading from '../../components/Heading';
import axios from 'axios';

const Testomonial = () => {
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
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
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

    <Container fluid className='testomonialback py-5 text-center d-block d-lg-none' style={{ marginTop: '-90px' }}>
      <Heading heading={'TESTIMONIALS'} />

      {testimonial.length < 2 ? (
        <Row className="">
          {testimonial.filter((testimonial) => testimonial.isActive).map((testimonial) => (
            <Col key={testimonial.id} md={4} className='text-center' style={{ marginTop: '-50px' }}>
              <div onClick={() => handleShowModal(testimonial)}>
                <div className='profileposition'>
                  <h2
                    className='testomonialprofile fs-1'
                    style={{ backgroundImage: `url(${testimonial.img})` }}
                  >{testimonial.experience}
                    {/* &nbsp; */}
                    {/* <span style={{ fontSize: "10px" }}>Years</span> */}
                  </h2>                 </div>
                <div className='testback'>
                  <h4>{testimonial.company_Name}</h4>

                  <p>
                    {truncateReview(testimonial.review, 200)}
                    {testimonial.review.length > 200 && (
                      <span className='read-more' onClick={() => handleShowModal(testimonial)}>
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
                  <div className='text-dark py-2' style={{ fontStyle: "italic" }}>
                    <div>
                      -{testimonial.name}
                    </div>

                  </div>

                </div>

              </div>



            </Col>
          ))}
        </Row>
      ) : (
        <Slider {...settings}>
          {testimonial.filter((testimonial) => testimonial.isActive).map((testimonial) => (
            <div onClick={() => handleShowModal(testimonial)}>
              <div className='profileposition'>
                <div
                  className='testomonialprofile fs-1'
                  style={{ backgroundImage: `url(${testimonial.img})` }}
                >
                  {testimonial.experience}

                  {/* &nbsp;
                  <span style={{ fontSize: "10px" }}>Years</span> */}
                </div>              </div>
              <div className='testback'>
                <h3 className=''>{testimonial.company_Name}</h3>

                <p>
                  {truncateReview(testimonial.review, 200)}
                  {testimonial.review.length > 200 && (
                    <span className='read-more' onClick={() => handleShowModal(testimonial)}>
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
                <div className='text-dark py-2' style={{ fontStyle: "italic" }}>
                  <div>
                    -{testimonial.name}
                  </div>

                </div>

              </div>

            </div>
          ))}
        </Slider>
      )}

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedTestimonial?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <Col className='text-center'>

            <div className='profileposition'>
              <h2
                className='testomonialprofile'
                style={{ backgroundImage: `url(${selectedTestimonial?.img})` }}
              >{selectedTestimonial?.experience}
                {/* &nbsp;
              <span style={{ fontSize: "10px" }}>Years</span>*/}
              </h2>
            </div>
            <div className='testback2'>
              <h4>{selectedTestimonial?.company_Name}</h4>

              <p >{selectedTestimonial?.review}</p>
              <Rating
                iconsCount={5}
                initialValue={selectedTestimonial?.star}
                size={20}
                readonly
                fillColor='orange'
                emptyColor='gray'
              />
              <div className='text-dark py-2' style={{ fontStyle: "italic" }}>
                -{selectedTestimonial?.name}
              </div>
            </div>
          </Col>
        </Modal.Body>
      </Modal>
    </Container>)

};



export default Testomonial

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        right: "10px", // Adjust position
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <i className="fas fa-chevron-right" style={{ fontSize: "24px" }}></i>
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        left: "1px", // Adjust position
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <i className="fas fa-chevron-left" style={{ fontSize: "24px" }}></i>
    </div>
  );
};
