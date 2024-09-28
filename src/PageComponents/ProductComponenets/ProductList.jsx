import React, { useContext, useState, useEffect, useRef } from "react";
import { Col, Container, Row, Nav, Tab, Carousel, Modal, Button } from "react-bootstrap";
import { ProductContext } from "../../ProductContext";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";

import ResponsiveImage from "../../pages/ResponsiveImage";
import "../../assets/CSS/productlist.css";
import ProductTechnicaldata from "./ProductTechnicaldata";
import ProductTab from "../Home/Producttab";
import imgmobile from "../../assets/img/changes/changes/product PAGE.jpg";
import imgtop from "../../assets/img/changes/changes/BANER product.jpg";
import { IoMdClose } from "react-icons/io";
import MetaTags from "../../components/MetaTags";
const ProductList = ({ no }) => {
  const [prdname, setprdname] = useState("Product")

  document.title = `Product |Positive Metering Pumps I Private Limited,Nashik - Manufacturer of Dosing System and Agitators`
  // const { id } = useParams();
  const id = localStorage.getItem('prd')
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

    localStorage.setItem("prd", productId)
    if (isMobileView()) {
      setTimeout(() => {
        scrollToProductDetails();
      }, 400); // Adjust timeout as needed to ensure navigation completes
    }
  };
  const metaData = [
    {
      id: 25,
      title: "Precision Plunger Dosing Pumps | Positive Metering Pvt. Ltd.",
      description: "Discover precision dosing pumps for chemicals like chlorine with Positive Metering Pvt. Ltd. Trust PC technology for accuracy and efficiency in dosing solutions.",
      focusKeyword: "chemical Dosing plunger pump",
      slug: "plunger-dosing-pump",
      altTag: "chemical high pressure plunger pump"
    },
    {
      id: 26,
      title: "Hydraulic Diaphragm Pump | Positive Metering Pvt. Ltd",
      description: "Our high-pressure hydraulic diaphragm pump for accurate chemical dosing. Trust Positive Metering Pvt. Ltd for reliable & efficient diaphragm metering solutions.",
      focusKeyword: "Hydraulic Diaphragm dosing Pump",
      slug: "hydraulic-diaphragm-dosing-pump",
      altTag: "Hydraulic Diaphragm dosing Pump - Positive Metering Pvt. Ltd"
    },
    {
      id: 27,
      title: "Mechanical Diaphragm Dosing Pump | Positive Metering Pvt. Ltd",
      description: "Our reliable mechanical diaphragm dosing pump for precise chemical dosing water treatment applications. Trust Positive Metering Pvt. Ltd for quality solutions.",
      focusKeyword: "mechanical diaphragm dosing pump",
      slug: "mechanical-diaphragm-dosing-pump",
      altTag: "Mechanical Diaphragm Dosing Pump"
    },
    {
      id: 28,
      title: "ED Series Electronic Dosing Pump | Positive Metering Pvt. Ltd",
      description: "Precise dosing with our ED Series Electronic Dosing Pump. Trust Positive Metering Pvt. Ltd for digital metering pumps & accurate chemical dosing solutions.",
      focusKeyword: "Electronic Dosing Pump",
      slug: "ed-series-electronic-dosing-pump",
      altTag: "ED Series Electronic Dosing Pump"
    },
    {
      id: 1,
      title: "DD Series Electronic Dosing Pump | Positive Metering Pvt. Ltd",
      description: "Discover precise dosing with our DD Series Electronic Dosing Pump. Trust Positive Metering Pvt. Ltd for accurate chemical dosing solutions.",
      focusKeyword: "Electronic Dosing Pump",
      slug: "dd-series-electronic-dosing-pump",
      altTag: "DD Series Electronic Dosing Pump"
    },
    {
      id: 29,
      title: "Progressive Cavity Screw Pump | Positive Metering Pvt. Ltd",
      description: "Discover our reliable progressive cavity screw pump for precise dosing, including chlorine. Trust Positive Metering Pvt. Ltd, leaders in screw pump manufacturing.",
      focusKeyword: "Progressive Cavity Screw Pump",
      slug: "progressive-cavity-screw-pump",
      altTag: "Progressive Cavity Screw Pump - Positive Metering Pvt. Ltd"
    },
    {
      id: 30,
      title: "Chemical Injection Skid by Positive Metering Pvt. Ltd",
      description: "Our dependable chemical injection skid for precise dosing in cooling water systems. Trust Positive Metering Pvt. Ltd for efficient chemical dosing solutions.",
      focusKeyword: "Chemical Injection Skid",
      slug: "chemical-injection-skid",
      altTag: "Chemical Injection Skid"
    },
    {
      id: 31,
      title: "High-Efficiency Agitators | Positive Metering Pvt. Ltd",
      description: "Discover high-efficiency agitators, like flash mixers, for optimal mixing. Trust Positive Metering Pvt. Ltd for superior agitation solutions.",
      focusKeyword: "Agitators",
      slug: "high-efficiency-agitators",
      altTag: "High-Efficiency Agitators - Positive Metering Pvt. Ltd"
    }
  ];

  const metaDetails = metaData.find(meta => meta.id === parseInt(id, 10));
  if (loading) return <p></p>;
  if (error) return <p></p>;

  return (
    <>

      <MetaTags
        title={metaDetails?.title}
        description={metaDetails?.description}
        keywords={metaDetails?.focusKeyword}
        slug={metaDetails?.slug}
        alt={metaDetails?.altTag}
      />
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
                    <div
                      style={{ letterSpacing: "3px" }}
                      className="text-white text-center py-3 fs-4"
                    >
                      PRODUCTS
                    </div>


                    {products
                      // .filter((product) => product.isActive)
                      .map((product, index) => (
                        <div
                          key={index}
                          onClick={() => { handleProductClick(product.id); window.scrollTo(0, 400); setprdname(product.productName); 
                            navigate(`/product/${encodeURIComponent(product.productName.toLowerCase().replace(/\s+/g, '-'))}`);
                          }}
                            
                          className={`mx-xxl-3 product-list-item`}
                        >
                          <p
                            className={` ${getNavLinkClass(
                           `/product/${encodeURIComponent(product.productName.toLowerCase().replace(/\s+/g, '-'))}`
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
                            alt={productDetails.productName}
                            title={productDetails.productName}
                            src={`https://api.positivemetering.ae/${productDetails.images[0].img}`}
                            rounded
                            fluid
                            className="rounded mx-auto img-fluid d-block"
                            style={{ height: "23rem" }}
                          />)}
                      </div>
                      <div className="p-2 fs-1">Application</div>

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
                                alt={productDetails.productName}
                                title={productDetails.productName}
                                src={`https://api.positivemetering.ae/${image.img}`}
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
                            <h1
                              className="pulgertitle fs-4"
                              style={{ color: "#434343" }}
                            >
                              {productDetails.productName}
                            </h1>
                            <div
                              className="pulgersubtitle fs-2"
                              style={{ fontFamily: "Poppins", fontSize: "20px" }}
                            >
                              {productDetails.subtitle}
                            </div>
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
                                  className={`plungercard mx-1 d-grid justify-content-center  ${getNavLinkClass(`/product/${product.productName}`)}}`}
                                  onClick={() => {
                                    handleProductClick(product.id);
                                    navigate(`/product/${encodeURIComponent(product.productName.toLowerCase().replace(/\s+/g, '-'))}`);
                                    window.scrollTo(0, 400);
                                  }}
                                >
                                  <div className="prdimg">
                                    {product.images && product.images.length > 0 && (
                                      <img
                                        alt={product.productName}
                                        title={product.productName}
                                        variant="top"
                                        src={`https://api.positivemetering.ae/${product.images[0].img}`}
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
                                className={`plungercard mx-1 d-grid justify-content-center  ${getNavLinkClass(`/product/${product.productName}`)}}`}

                                onClick={() => {
                                  handleProductClick(product.id);
                                  navigate(`/product/${encodeURIComponent(product.productName.toLowerCase().replace(/\s+/g, '-'))}`);
                                  window.scrollTo(0, 400);
                                }}
                              >
                                <div className="prdimg">
                                  {product.images && product.images.length > 0 && (
                                    <img
                                      title={product.productName}
                                      alt={product.productName}
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
                    <Col lg={2} className="mx-2 mt-lg-0 mt-4 order-1 order-lg-1 ">
                      <Nav.Item>
                        <Nav.Link
                          eventKey="Models"
                          className="tabbuttons tabname text-center"
                        >
                          Models
                        </Nav.Link>
                      </Nav.Item>
                    </Col>

                    <Col lg={4} className="mx-2 mt-lg-0 mt-4  order-3 order-lg-2">
                      <Nav.Item>
                        <Nav.Link
                          eventKey="Accessories & Optional"
                          className="tabbuttons tabname text-center"
                        >
                          Accessories & Optional
                        </Nav.Link>
                      </Nav.Item>
                    </Col>

                    <Col lg={2} className="mx-2 mt-lg-0 mt-4 order-2 order-lg-3">
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
                    {/* <h1 className="tableheadstyle text-center pt-5 pb-3">
                      Models
                    </h1> */}
                    <Container className="d-flex justify-content-center my-lg-5 my-3">
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
                    {/* <h1 className="tableheadstyle text-center pt-5 pb-3">
                      Accessories & Optional
                    </h1> */}
                    <Container>
                      <Row className="d-flex justify-content-center my-lg-5 my-3">
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
                    {/* <h1 className="tableheadstyle text-center pt-5 pb-3">Gallery</h1> */}
                    <Container>
                      <Row className="d-flex justify-content-center my-lg-5 my-3">
                        <Col lg={12}>
                          {materialData.length > 0 ? (
                            <Container>
                              <Row className="d-flex justify-content-center">
                                {materialData.map((data) => (
                                  <Col key={data.id} xs={12} lg={3} md={6} className="mb-4">
                                    <img
                                      alt={data.productName}
                                      title={data.productName}
                                      src={`https://api.positivemetering.ae/${data.img}`}
                                      className="eventimg img-fluid rounded-4"
                                      onClick={() => handleImageClick(`https://api.positivemetering.ae/${data.img}`)}
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
                          backgroundColor: "transparent",
                          border: "none",
                          zIndex: 9999,
                        }}
                      >
                        <IoMdClose
                          style={{
                            color: "black",
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
                          title="Event"
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