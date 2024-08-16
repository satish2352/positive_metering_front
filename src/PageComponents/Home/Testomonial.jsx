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

    <Container fluid className='testomonialback py-5 text-center d-block d-lg-none' style={{ marginTop: '-90px' }}>
      <Heading heading={'TESTIMONIALS'} />

      {testimonial.length < 2 ? (
        <Row className="">
          {testimonial.filter((testimonial) => testimonial.isActive).map((testimonial) => (
            <Col key={testimonial.id} md={4} className='text-center' style={{ marginTop: '-50px' }}>
              <div onClick={() => handleShowModal(testimonial)}>
                <div className='profileposition'>
                  <img src={testimonial.img} alt='' className='testomonialprofile img-fluid' />

                </div>
                <div className='testback'>
                  <h4>{testimonial.company_Name}</h4>

                  <p>
                    {truncateReview(testimonial.review, 200)}
                    {testimonial.review.length > 200 && (
                      <span className='read-more' onClick={() => handleShowModal(testimonial)}>
                        ... <b>read more</b>
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
                    -{testimonial.name}
                    <h1 className='testomonialprofile2'>{testimonial.experience}</h1>
                  </div>
                  {/* <div className=' d-flex jus'>                  <h1 className='testomonialprofile2'>{testimonial.experience}</h1>
                    </div> */}
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
             <img src={testimonial.img} alt='' className='testomonialprofile img-fluid' />

           </div>
           <div className='testback'>
             <h4>{testimonial.company_Name}</h4>

             <p>
               {truncateReview(testimonial.review, 200)}
               {testimonial.review.length > 200 && (
                 <span className='read-more' onClick={() => handleShowModal(testimonial)}>
                   ... <b>read more</b>
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
               -{testimonial.name}
               <h1 className='testomonialprofile2'>{testimonial.experience}</h1>
             </div>
             {/* <div className=' d-flex jus'>                  <h1 className='testomonialprofile2'>{testimonial.experience}</h1>
               </div> */}
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
          <Col className='text-center' style={{ marginTop: '-50px' }}>

            <div className='profileposition'>
              <img src={selectedTestimonial?.img} alt='' className='testomonialprofile img-fluid' />
            </div>
            <div className='testback2'>
              <h4>{selectedTestimonial?.company_Name}</h4>

              <p>{selectedTestimonial?.review}</p>
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
                <h1 className='testomonialprofile2'>{selectedTestimonial?.experience}</h1>
              </div>
            </div>
          </Col>
        </Modal.Body>
      </Modal>
    </Container>)

};



export default Testomonial