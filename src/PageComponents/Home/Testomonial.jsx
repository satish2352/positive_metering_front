import React, { useState, useEffect } from "react";
import { Container, Col, Modal, Button } from "react-bootstrap";
import { Rating } from "react-simple-star-rating"; // Importing Rating component
import Slider from "react-slick";
import Heading from "../../components/Heading";
import axios from "axios";

const Testimonial = () => {
  const [testimonial, setTestimonial] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get("testimonials/get-testimonials");
        if (response.data.result) {
          setTestimonial(response.data.responseData);
        } else {
          setError(response.data.message);
        }
      } catch (error) {
        setError("There was an error making the request!");
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
    return review.substring(0, limit) + "...";
  };

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    speed: 20000,
    autoplaySpeed: 7000,
    cssEase: "linear",
    infinite: true,
    responsive: [
      {
        breakpoint: 1600,
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
    <>
      {loading ? (
        <></>
      ) : error ? (
        <></>
      ) : testimonial.length === 0 ? (
        <></>
      ) : (
        <Container
          fluid
          className="testomonialback py-5 text-center"
          style={{ marginTop: "-90px" }}
        >
          <Heading heading={"TESTIMONIALS"} />
          <Slider {...settings}>
            {testimonial.map((testimonial) => (
              <div key={testimonial.id} className="text-center">
                <Col>
                  <div className="testback">
                    <p>
                      {truncateReview(testimonial.review, 200)}
                      {testimonial.review.length > 200 && (
                        <span
                          className="read-more"
                          onClick={() => handleShowModal(testimonial)}
                        >
                          ... <b>read more</b>
                        </span>
                      )}
                    </p>
                    <Rating
                      iconsCount={5}
                      initialValue={testimonial.star}
                      size={20}
                      readonly
                      fillColor="orange"
                      emptyColor="gray"
                    />
                  </div>
                </Col>
              </div>
            ))}
            {testimonial
              .filter((testimonial) => testimonial.isActive)
              .map((testimonial) => {
                console.log("testimonials", testimonial);
                return (
                  <div key={testimonial.id} className="text-center">
                    <Col style={{ marginTop: "-50px" }}>
                      <div className="profileposition">
                        <img
                          src={testimonial.img}
                          alt=""
                          className="testomonialprofile img-fluid"
                        />
                      </div>
                      <div className="testback">
                        <h1>{testimonial.title}</h1>
                        <p>
                          {truncateReview(testimonial.review, 200)}
                          {testimonial.review.length > 200 && (
                            <span
                              className="read-more"
                              onClick={() => handleShowModal(testimonial)}
                            >
                              ... <b>read more</b>
                            </span>
                          )}
                        </p>
                        <Rating
                          iconsCount={5}
                          initialValue={testimonial.star}
                          size={20}
                          readonly
                          fillColor="orange"
                          emptyColor="gray"
                        />
                      </div>
                    </Col>
                  </div>
                );
              })}
          </Slider>

          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>{selectedTestimonial?.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="profileposition">
                <img
                  src={selectedTestimonial?.img}
                  alt=""
                  className="testomonialprofile img-fluid"
                />
              </div>
              <div className="testback">
                <p>{selectedTestimonial?.review}</p>
                <Rating
                  iconsCount={5}
                  initialValue={selectedTestimonial?.star}
                  size={20}
                  readonly
                  fillColor="orange"
                  emptyColor="gray"
                />
              </div>
            </Modal.Body>
          </Modal>
        </Container>
      )}
    </>
  );
};

export default Testimonial;
