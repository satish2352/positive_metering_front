import React, { useContext, useState, useEffect, useRef } from "react";
import { Col, Container, Row, Nav, Tab, Button } from "react-bootstrap";
import { ProductContext } from "../../ProductContext";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";

import ResponsiveImage from "../../pages/ResponsiveImage";
import "../../assets/CSS/productlist.css";
import ProductTechnicaldata from "./ProductTechnicaldata";
import ProductTab from "../Home/Producttab";
import imgmobile from "../../assets/img/aa/product PAGE (1).jpg";
import imgtop from "../../assets/img/aa/BANER product (1).jpg";

const ProductList = ({ no }) => {
  const { id } = useParams();

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
          setMaterialData(response.data.responseData.materialData);
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
                    .filter((product) => product.isActive)
                    .map((product, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          handleProductClick(product.id);
                          window.scrollTo(0, 400);
                        }}
                        className={`mx-xxl-3 product-list-item`}
                      >
                        <p
                          className={` ${getNavLinkClass(
                            `/product/${product.id}`
                          )} produclistcontetst ps-3 mx-lg-3 pb-2 mb-0 pt-3`}
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
                      <img
                        src={`http://positivebackend.sumagodemo.com/${productDetails.img}`}
                        rounded
                        fluid
                        className="rounded mx-auto img-fluid d-block"
                        style={{ height: "23rem" }}
                      />
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
                      <img
                        src={`http://positivebackend.sumagodemo.com/${productDetails.img}`}
                        alt={productDetails.productName}
                        className="img-fluid producttabimg p-5 p-lg-1 d-none d-lg-block"
                      />
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
                      {products.length < 2 ? (
                        <Row>
                          {products
                            .filter((product) => product.isActive)
                            .map((product) => (
                              <Col
                                key={product.id}
                                className={`plungercard mx-1 d-grid justify-content-center  ${getNavLinkClass(
                                  `/product/${product.id}`
                                )}
                          }`}
                                onClick={() => {
                                  handleProductClick(product.id);
                                  window.scrollTo(0, 400);
                                }}
                              >
                                <img
                                  variant="top"
                                  src={product.img}
                                  className="prdimg img-fluid p-2"
                                />
                                <div
                                  style={{ fontSize: "12px" }}
                                  className="text-center pb-3"
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
                              onClick={() => {
                                handleProductClick(product.id);
                                window.scrollTo(0, 400);
                              }}
                            >
                              <img
                                variant="top"
                                src={product.img}
                                className="prdimg img-fluid p-2"
                              />
                              <div
                                style={{ fontSize: "12px" }}
                                className="text-center pb-3"
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
              </Col>
            </Row>
          </Container>
        </>

        <Container fluid className="productTechnicaldata mt-5 mb-4">
          <Tab.Container id="left-tabs-example" defaultActiveKey="TECHNICAL">
            <Container>
              <Col>
                <Nav variant="pills" className="d-flex justify-content-center">
                  <Col lg={2} className="mx-2 mt-lg-0 mt-4">
                    <Nav.Item>
                      <Nav.Link
                        eventKey="TECHNICAL"
                        className="tabbuttons tabname text-center"
                      >
                        TECHNICAL
                      </Nav.Link>
                    </Nav.Item>
                  </Col>

                  <Col lg={2} className="mx-2 mt-lg-0 mt-4">
                    <Nav.Item>
                      <Nav.Link
                        eventKey="OPTION"
                        className="tabbuttons tabname text-center"
                      >
                        OPTION
                      </Nav.Link>
                    </Nav.Item>
                  </Col>

                  <Col lg={4} className="mx-2 mt-lg-0 mt-4">
                    <Nav.Item>
                      <Nav.Link
                        eventKey="MATERIAL OF CONSTRUCTION"
                        className="tabbuttons tabname text-center"
                      >
                        MATERIAL OF CONSTRUCTION
                      </Nav.Link>
                    </Nav.Item>
                  </Col>
                </Nav>
              </Col>
            </Container>

            <Col>
              <Tab.Content>
                <Tab.Pane eventKey="TECHNICAL">
                  <h1 className="tableheadstyle text-center pt-5 pb-3">
                    Technical Data
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
                        <div>No data found</div>
                      )}
                    </Col>
                  </Container>
                </Tab.Pane>
                <Tab.Pane eventKey="OPTION">
                  <h1 className="tableheadstyle text-center pt-5 pb-3">
                    Options Data
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
                          <div>No data found</div>
                        )}
                      </Col>
                    </Row>
                  </Container>
                </Tab.Pane>
                <Tab.Pane eventKey="MATERIAL OF CONSTRUCTION">
                  <h1 className="tableheadstyle text-center pt-5 pb-3">
                    Material Of Construction
                  </h1>
                  <Container>
                    <Row className="d-flex justify-content-center">
                      <Col lg={8}>
                        {materialData.length > 0 ? (
                          materialData.map((data) => (
                            <div
                              key={data.id}
                              dangerouslySetInnerHTML={{
                                __html: data.materialDescription,
                              }}
                            ></div>
                          ))
                        ) : (
                          <div>No data found</div>
                        )}
                      </Col>
                    </Row>
                  </Container>
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
