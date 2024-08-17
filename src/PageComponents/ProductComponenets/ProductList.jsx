import React, { useContext, useState, useEffect, useRef } from "react";
import { Col, Container, Row, Nav, Tab, Carousel, Modal, Button } from "react-bootstrap";
import { ProductContext } from "../../ProductContext";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import ImageMagnifier from './ImageMagnifier'
import ResponsiveImage from "../../pages/ResponsiveImage";
import "../../assets/CSS/productlist.css";
import ProductTechnicaldata from "./ProductTechnicaldata";
import ProductTab from "../Home/Producttab";
import imgmobile from "../../assets/img/changes/changes/product PAGE.jpg";
import imgtop from "../../assets/img/changes/changes/BANER product.jpg";
import { IoMdClose } from "react-icons/io";

const ProductList = ({ no }) => {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const [productDetails, setProductDetails] = useState(null);
  const [technicalData, setTechnicalData] = useState([]);
  const [optionsData, setOptionsData] = useState([]);
  const [materialData, setMaterialData] = useState([]);
  const [ApplicationData, setApplicationData] = useState([]);
  const productDetailsRef = useRef(null); // Ref for scrolling
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [productNo, setProductNo] = useState(no);

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

  const handleImageClick = (imageUrl) => {
    setModalImage(imageUrl);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);
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
  }, [id]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `productAggregate/get-all-productdata/${id}`
        );
        if (response.data.result) {
          setProductDetails(response.data.responseData.productDetails);
          setTechnicalData(response.data.responseData.technicalData);
          setOptionsData(response.data.responseData.optionsData);
          setMaterialData(response.data.responseData.productDetails.images);
          setApplicationData(response.data.responseData.applicationData);
        } else {
          console.log("Failed to fetch product details");
        }
      } catch (err) {
        console.log("Error fetching product details");
      }
    };

    fetchProductDetails();
  }, [id, no]);

  const getNavLinkClass = (path) => {
    return currentPath === path
      ? "text-decoration-none text-white fw-bold"
      : "text-decoration-none text-white";
  };
  const isMobileView = () => {
    return window.innerWidth <= 768; // You can adjust this width as per your design
  };

  const scrollToProductDetails = () => {
    if (productDetailsRef.current) {
      productDetailsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
    if (isMobileView()) {
      setTimeout(() => {
        scrollToProductDetails();
      }, 400); // Adjust timeout as needed to ensure navigation completes
    }
  };

  if (loading) return <p></p>;
  if (error) return <p></p>;

  return (
    <>
      <ResponsiveImage mobileSrc={imgmobile} desktopSrc={imgtop} />
      {products.length === 0 ? (
        <> Data Not Found</>
      ) : (
        <>
          <Container fluid className="py-4 px-lg-5">
            <Row>
              <Col lg={4}>
                <Container className="produclistbox">
                  <div className="py-3 px-4" id="menu">
                    <h4
                      style={{ letterSpacing: "3px" }}
                      className="text-white text-center py-3"
                    >
                      PRODUCTS
                    </h4>


                    {products
                      // .filter((product) => product.isActive)
                      .map((product, index) => (
                        <div
                          key={index}
                          onClick={() => { handleProductClick(product.id); window.scrollTo(0, 400); }}
                          className={`mx-xxl-3 product-list-item`}
                        >
                          <p
                            className={` ${getNavLinkClass(
                              `/product/${product.id}`
                            )} produclistcontetst ps-3 mx-lg-3 pb-2`}
                            style={{ fontFamily: "Poppins" }}
                          >
                            {product.productName}
                          </p>
                        </div>
                      ))}
                  </div>
                </Container>
              </Col>
              <Col lg={8}>
                <div ref={productDetailsRef}>
                  {productDetails && (
                    <>
                      <div className="prdimgs">
                        {productDetails.images && productDetails.images.length > 0 && (
                          <img

                            src={`https://positivebackend.sumagodemo.com/${productDetails.images[0].img}`}
                            rounded
                            fluid
                            className="rounded mx-auto img-fluid d-block"
                            style={{ height: "23rem" }}
                          />)}
                      </div>
                      <h1 className="p-2">Application</h1>

                      {ApplicationData.map((data) => (
                        <div
                          key={data.id}
                          dangerouslySetInnerHTML={{
                            __html: data.applicationDescription,
                          }}
                        ></div>
                      ))}
                    </>
                  )}
                </div>
              </Col>
            </Row>
          </Container>

          <>
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
                  <Row className="align-items-center chartslider">
                    <Col lg={6} className="px-0">
                      {productDetails && (
                        <Carousel
                          key={productDetails.id}
                          prevIcon={<span className="carousel-control-prev-icon" />}
                          nextIcon={<span className="carousel-control-next-icon" />}
                        >{productDetails.images.map((image) => (

                          <Carousel.Item key={image.id} interval={900} >
                            <div className=" d-flex justify-content-center">
                              <img
                                src={`https://positivebackend.sumagodemo.com/${image.img}`}
                                className="img-fluid "

                              /></div>
                          </Carousel.Item>))}  </Carousel>
                      )}
                    </Col>
                    <Col lg={6} className="homeaboutinfo text-black">
                      <div
                        className="p-lg-3 p-4"
                        style={{ textAlign: "justify" }}
                      >
                        {productDetails && (
                          <>
                            <h4
                              className="pulgertitle"
                              style={{ color: "#434343" }}
                            >
                              {productDetails.productName}
                            </h4>
                            <h3
                              className="pulgersubtitle"
                              style={{ fontFamily: "Poppins", fontSize: "20px" }}
                            >
                              {productDetails.subtitle}
                            </h3>
                            <div
                              className="me-lg-5 me-0"
                              dangerouslySetInnerHTML={{
                                __html: productDetails.application,
                              }}
                            ></div>
                          </>
                        )}
                      </div>
                      <div className="pb-3">
                        {products.length < 3 ? (
                          <Row>
                            {products
                              .filter((product) => product.isActive)
                              .map((product) => (
                                <Col
                                  key={product.id}
                                  className={`plungercard mx-1 d-grid justify-content-center  ${getNavLinkClass(`/product/${product.id}`)}}`}
                                  onClick={() => {
                                    handleProductClick(product.id);
                                    window.scrollTo(0, 400);
                                  }}
                                >
                                  <div className="prdimg">
                                    {product.images && product.images.length > 0 && (
                                      <img
                                        variant="top"
                                        src={`https://positivebackend.sumagodemo.com/${product.images[0].img}`}
                                        className=" img-fluid p-2"
                                      />)}
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
                              <Col
                                key={product.id}
                                className={`plungercard mx-1 d-grid justify-content-center  ${getNavLinkClass(`/product/${product.id}`)}}`}

                                onClick={() => {
                                  handleProductClick(product.id);
                                  window.scrollTo(0, 400);
                                }}
                              >
                                <div className="prdimg">
                                  {product.images && product.images.length > 0 && (
                                    <img
                                      variant="top"
                                      src={`${product.images[0].img}`}

                                      className=" img-fluid p-2"
                                    />)}
                                </div>
                                <div
                                  style={{ fontSize: "12px" }}
                                  className="text-center text-dark pb-3"
                                >
                                  {product.productName}
                                </div>
                              </Col>
                            ))}
                          </Slider>
                        )}
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </>

          <Container fluid className="productTechnicaldata mt-5 mb-4">
            <Tab.Container id="left-tabs-example" defaultActiveKey="Models">
              <Container>
                <Col>
                  <Nav variant="pills" className="d-flex justify-content-center">
                    <Col lg={2} className="mx-2 mt-lg-0 mt-4">
                      <Nav.Item>
                        <Nav.Link
                          eventKey="Models"
                          className="tabbuttons tabname text-center"
                        >
                          Models
                        </Nav.Link>
                      </Nav.Item>
                    </Col>

                    <Col lg={4} className="mx-2 mt-lg-0 mt-4">
                      <Nav.Item>
                        <Nav.Link
                          eventKey="Accessories & Optional"
                          className="tabbuttons tabname text-center"
                        >
                          Accessories & Optional
                        </Nav.Link>
                      </Nav.Item>
                    </Col>

                    <Col lg={2} className="mx-2 mt-lg-0 mt-4">
                      <Nav.Item>
                        <Nav.Link
                          eventKey="Gallery"
                          className="tabbuttons tabname text-center"
                        >
                          Gallery
                        </Nav.Link>
                      </Nav.Item>
                    </Col>
                  </Nav>
                </Col>
              </Container>

              <Col>
                <Tab.Content>
                  <Tab.Pane eventKey="Models">
                    <h1 className="tableheadstyle text-center pt-5 pb-3">
                      Models
                    </h1>
                    <Container className="d-flex justify-content-center">
                      <Col lg={8} className="horizontal-scroll">
                        {technicalData.length > 0 ? (
                          technicalData.map((data) => (
                            <div
                              key={data.id}
                              dangerouslySetInnerHTML={{
                                __html: data.technicalDescription,
                              }}
                            ></div>
                          ))
                        ) : (
                          <div className=" text-center">No data found</div>
                        )}
                      </Col>
                    </Container>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Accessories & Optional">
                    <h1 className="tableheadstyle text-center pt-5 pb-3">
                      Accessories & Optional
                    </h1>
                    <Container>
                      <Row className="d-flex justify-content-center">
                        <Col lg={8}>
                          {optionsData.length > 0 ? (
                            optionsData.map((data) => (
                              <div
                                key={data.id}
                                dangerouslySetInnerHTML={{
                                  __html: data.optionsDescription,
                                }}
                              ></div>
                            ))
                          ) : (
                            <div className=" text-center">No data found</div>
                          )}
                        </Col>
                      </Row>
                    </Container>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Gallery">
                    <h1 className="tableheadstyle text-center pt-5 pb-3">Gallery</h1>
                    <Container>
                      <Row className="d-flex justify-content-center">
                        <Col lg={12}>
                          {materialData.length > 0 ? (
                            <Container>
                              <Row>
                                {materialData.map((data) => (
                                  <Col key={data.id} xs={12} lg={3} md={6} className="mb-4">
                                    <img
                                      src={`https://positivebackend.sumagodemo.com/${data.img}`}
                                      className="eventimg img-fluid rounded-4"
                                      alt={data.title}
                                      onClick={() => handleImageClick(`https://positivebackend.sumagodemo.com/${data.img}`)}
                                      style={{ cursor: "pointer" }}
                                    />
                                  </Col>
                                ))}
                              </Row>
                            </Container>
                          ) : (
                            <div className="text-center">No data found</div>
                          )}
                        </Col>
                      </Row>
                    </Container>

                    <Modal show={showModal} onHide={handleClose} centered>
                      <Button
                        onClick={handleClose}
                        style={{
                          position: "absolute",
                          top: "10px",
                          right: "10px",
                          backgroundColor: "black",
                          border: "none",
                          zIndex: 9999,
                        }}
                      >
                        <IoMdClose
                          style={{
                            color: "white",
                            fontSize: "24px",
                            backgroundColor: "transparent",
                          }}
                        />
                      </Button>
                      <Modal.Body className="p-0 d-flex justify-content-center align-items-center position-relative">
                        <img
                          src={modalImage}
                          className="img-fluid"
                          alt="Event"
                          style={{ width: "100%", height: "auto" }}
                        />
                      </Modal.Body>
                    </Modal>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Tab.Container>
          </Container>
        </>)}

      <ProductTechnicaldata />
    </>
  );
};

export default ProductList;