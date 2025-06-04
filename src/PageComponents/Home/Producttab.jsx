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

  const trimHtmlFeatures = (html, maxItems = 4) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
  
    const ul = doc.querySelector("ul");
    if (ul) {
      const items = Array.from(ul.querySelectorAll("li"));
  
      // Simpler way to count total characters
      const totalText = items.map(li => li.textContent || "").join("");
      
      if (totalText.length > 50) {
        items.slice(maxItems).forEach(item => item.remove());
      }
    }
  
    return doc.body.innerHTML;
  };
  
  

  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
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
              <Col lg={12} className="px-0">
                {activeProduct && (
                  <Carousel
                    key={activeProduct.id}  // Ensure the carousel resets when `activeProduct` changes
                    prevIcon={<span className="carousel-control-prev-icon" />}
                    nextIcon={<span className="carousel-control-next-icon" />}
                  >
                    {products.map((item) => (
                      
                      <Carousel.Item className="homeProduct" key={item.id} interval={5000}>
                        <Row className="align-items-center chartslider">
                          <Col lg={6} className="px-0">
                            <div className="d-flex justify-content-center">
                              <img
                                src={item?.images[0]?.img}
                                className="img-fluid"
                                alt={item.productName}
                                title={item.productName}
                              />
                            </div>
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
                                    {item.productName}
                                  </div>
                                  <div
                                    className="pulgersubtitle"
                                    style={{ fontFamily: "Poppins", fontSize: "20px" }}
                                  >
                                    {item.subtitle}
                                  </div>
                                  <div
                                    className="me-lg-5 me-0"
                                    dangerouslySetInnerHTML={{
                                      __html: trimHtmlFeatures(item.application, ),
                                    }}
                                  ></div>
                                  <div className="d-flex alignbtn justify-content-end">
                                    <Button
                                      variant="outline-dark"
                                      className="rounded-5 py-2 fs-6 px-4 m-lg-3 shadow-sm"
                                      onClick={() => {
                                        handleProductClick(item.id);
                                        navigate(`/product/${encodeURIComponent(item.productName.toLowerCase().replace(/\s+/g, '-'))}`);
                                      }}
                                    >
                                      Read More
                                    </Button>
                                  </div>
                                </>
                              )}
                            </div>
                          </Col>
                        </Row>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                )}
              </Col>
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ProductTab;
