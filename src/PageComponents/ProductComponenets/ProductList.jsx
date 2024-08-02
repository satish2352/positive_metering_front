import React, { useContext, useState, useEffect, useRef } from "react";
import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import { ProductContext } from "../../ProductContext";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";

import ResponsiveImage from "../../pages/ResponsiveImage";
import "../../assets/CSS/productlist.css";
import ProductTechnicaldata from "./ProductTechnicaldata";
import ProductTab from "../Home/Producttab";
import imgmobile from "../../assets/img/aa/product PAGE.jpg";
import imgtop from "../../assets/img/aa/BANER product.jpg";

const ProductList = () => {
  const { products, loading, error, productNo } = useContext(ProductContext);
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
  }, [id]);

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

                {products.map((product, index) => (
                  <div
                    key={index}
                    onClick={() => handleProductClick(product.id)}
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

      <ProductTab />

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
                  Plunger type dosing pumps Technical Data
                </h1>
                <Container className="d-flex justify-content-center">
                  <Col lg={8} className="horizontal-scroll">
                    {technicalData.map((data) => (
                      <div
                        key={data.id}
                        dangerouslySetInnerHTML={{
                          __html: data.technicalDescription,
                        }}
                      ></div>
                    ))}
                  </Col>
                </Container>
              </Tab.Pane>
              <Tab.Pane eventKey="OPTION">
                <h1 className="tableheadstyle text-center pt-5 pb-3">OPTION</h1>
                <Container>
                  <Row className="d-flex justify-content-center">
                    <Col lg={8}>
                      {optionsData.map((data) => (
                        <div
                          key={data.id}
                          dangerouslySetInnerHTML={{
                            __html: data.optionsDescription,
                          }}
                        ></div>
                      ))}
                    </Col>
                  </Row>
                </Container>
              </Tab.Pane>
              <Tab.Pane eventKey="MATERIAL OF CONSTRUCTION">
                <h1 className="tableheadstyle text-center pt-5 pb-3">
                  MATERIAL OF CONSTRUCTION
                </h1>
                <Container>
                  <Row className="d-flex justify-content-center">
                    <Col lg={8}>
                      {materialData.map((data) => (
                        <div
                          key={data.id}
                          dangerouslySetInnerHTML={{
                            __html: data.materialDescription,
                          }}
                        ></div>
                      ))}
                    </Col>
                  </Row>
                </Container>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Tab.Container>
      </Container>
                      
      <ProductTechnicaldata />
    </>
  );
};

export default ProductList;
