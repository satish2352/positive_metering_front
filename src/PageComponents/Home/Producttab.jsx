import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../assets/CSS/aboutus.css";
const ProductTab = ({ no }) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [productNo, setProductNo] = useState(no || 0); // use prop `no` if provided, otherwise default to 0
  const [activeTab, setActiveTab] = useState(no || 0); // initialize `activeTab` with `no` prop as well
  const handleProductClick = (productId) => {

    localStorage.setItem("prd", productId)
  };


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/productdetails/get-productdetails");
        if (response.data.result) {
          const productData = response.data.responseData;
          setProducts(productData);
          if (productData.length > 0) {
            const defaultProductNo = productData[0].id;
            setProductNo(defaultProductNo);
            setActiveTab(defaultProductNo); // Set default active tab to the first product
          }
        } else {
          setError("Failed to fetch product details");
        }
      } catch (err) {
        setError("Error fetching product details");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
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
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const activeProduct = products.find((product) => product.id === activeTab);

  let firstWord = "";
  let restOfText = "";

  if (activeProduct) {
    [firstWord, ...restOfText] = activeProduct.productName.split(" ");
    firstWord = firstWord.toUpperCase();
    restOfText = restOfText.join(" ");
  }

  return (
    <Container
      fluid
      className="mt-3 p-lg-5"
      style={{ background: "#EFEFEF", position: "relative" }}
    >
      <Row className="d-flex align-items-center">
        <Col
          lg={1}
          className="d-grid align-items-center round d-none d-lg-block"
        >
          <div className="graycircle"></div>
        </Col>
        <Col
          lg={11}
          style={{ backgroundColor: "#fff", position: "relative" }}
          className="box border-1 border-dark-subtle border p-lg-4"
        >
          {loading ? (
            <div></div>
          ) : error ? (
            <div></div>
          ) : (
            <Row className="align-items-center chartslider">
              {/* <Col lg={6} className="px-0">
                {activeProduct && (
                  <img
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    src={`https://positivebackend.sumagodemo.com/${activeProduct.images[0].img}`}
                    alt={activeProduct.productName}
                    className="img-fluid producttabimg p-5 p-lg-1"
                  />
                )}
              </Col> */}
              <Col lg={6} className="px-0">
                {activeProduct && (
                  <Carousel
                    key={activeProduct.id}  // Ensure the carousel resets when `activeProduct` changes
                    prevIcon={<span className="carousel-control-prev-icon" />}
                    nextIcon={<span className="carousel-control-next-icon" />}
                  >
                    {activeProduct.images.map((image) => (
                      <Carousel.Item key={image.id} interval={900}>
                        <div className="d-flex justify-content-center">
                          <img
                            src={image.img}
                            className="img-fluid"
                            alt={image.productName}
                            title={image.productName}
                          />
                        </div>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                )}
              </Col>



              <Col
                lg={6}
                className="homeaboutinfo text-black"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <div className="p-lg-3 p-4" style={{ textAlign: "justify" }}>
                  {activeProduct && (
                    <>
                      <div className="pulgertitle fs-4" style={{ color: "#434343" }}>
                        {activeProduct.productName}
                      </div>
                      <div
                        className="pulgersubtitle"
                        style={{ fontFamily: "Poppins", fontSize: "20px" }}
                      >
                        {activeProduct.subtitle}
                      </div>
                      <div
                        className="me-lg-5 me-0"
                        dangerouslySetInnerHTML={{
                          __html: activeProduct.application,
                        }}
                      ></div>
                      <div className="d-flex alignbtn justify-content-end">
                        <Button
                          variant="outline-dark"
                          className="rounded-5 py-2 fs-6 px-4 m-lg-3 shadow-sm"
                          onClick={() => {
                            handleProductClick(activeProduct.id);
                            navigate(`/product/${encodeURIComponent(activeProduct.productName.toLowerCase().replace(/\s+/g, '-'))}`);
                            // setprdname(activeProduct.productName);
                          }}

                        >
                          Read More
                        </Button>
                      </div>
                    </>
                  )}
                </div>
                <div className="pb-3">
                  {products.length < 4 ? (
                    <Row>
                      {products.map((product) => (
                        <Col
                          key={product.id}
                          className={`plungercard mx-1 d-grid justify-content-center ${activeTab === product.id ? "active" : ""}`}
                          onClick={() => {
                            handleTabClick(product.id);

                            //  prdname(product.productName); 
                          }}
                        >
                          <div className="prdimg">
                            {product.images && product.images.length > 0 && (
                              <img
                                variant="top"
                                src={`${product.images[0].img}`}
                                className="img-fluid p-2"
                                alt={product.productName}
                                title={product.productName}
                              />
                            )}
                          </div>
                          <div
                            style={{ fontSize: "12px" }}
                            className="text-center text-dark pb-3"
                          >
                            {product.productName}
                          </div>
                        </Col>
                      ))}
                    </Row>
                  ) : (
                    <Slider {...settings}>
                      {products.map((product) => (
                        <div
                          key={product.id}
                          className={`plungercard mx-1 d-grid justify-content-center ${activeTab === product.id ? "active" : ""}`}
                          onClick={() => handleTabClick(product.id)}
                        >
                          <div className="prdimg">
                            {product.images && product.images.length > 0 && (
                              <img
                                variant="top"
                                src={`${product.images[0].img}`}
                                className="img-fluid p-2"
                                alt={product.productName}
                                title={product.productName}
                              />
                            )}
                          </div>
                          <div
                            style={{ fontSize: "12px" }}
                            className="text-center text-dark pb-3"
                          >
                            {product.productName}
                          </div>
                        </div>
                      ))}
                    </Slider>
                  )}
                </div>

              </Col>
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ProductTab;
