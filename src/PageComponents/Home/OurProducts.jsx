import React, { useState, useEffect } from "react";
import "../../assets/CSS/mainbanner.css";
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import Heading from "../../components/Heading";

function OurProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get("carrousal/get-carrousal");
        if (response.data.result) {
          setProducts(response.data.responseData);
          console.log(response);
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
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <Container fluid className="my-5 py-lg-0">
      {loading ? (
        <p></p>
      ) : error ? (
        <p> </p>
      ) : products.length > 5 ? (
        <Slider {...settings}>
          {products
            .filter((product) => product.isActive)
            .map((product) => (
              <div
                key={product.id}
                className="ourprdcard d-flex justify-content-center p-4"
              >
                <img
                  src={product.img}
                  className="img-fluid ourprdimg w-100 h-100"
                  alt=""
                />
              </div>
            ))}
        </Slider>
      ) : (
        <Row>
          {products
            .filter((product) => product.isActive)
            .map((product) => (
              <Col key={product.id} xs={12} sm={6} md={2} className="mb-4">
                <div className=" d-flex justify-content-center ">
                  <img
                    src={product.img}
                    className="img-fluid ourprdimg w-100 h-100"
                    alt=""
                  />
                </div>
              </Col>
            ))}
        </Row>
      )}
    </Container>
  );
}

export default OurProducts;
