import React, { useContext, useState, useEffect } from 'react';
import { Col, Container, Row, Image,Nav,Tab } from 'react-bootstrap';
import { ProductContext } from '../../ProductContext';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import ResponsiveImage from '../../pages/ResponsiveImage';
import '../../assets/CSS/productlist.css';
import ProductTechnicaldata from './ProductTechnicaldata';
import ProductTab from '../Home/Producttab';
import imgmobile from '../../assets/img/productimgs/productmobileview.png'
import imgtop from '../../assets/img/services/diskimg.png'
const ProductList = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { products, loading, error } = useContext(ProductContext);
    const [productDetails, setProductDetails] = useState(null);
    const [technicalData, setTechnicalData] = useState([]);
    const [optionsData, setOptionsData] = useState([]);
    const [materialData, setMaterialData] = useState([]);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await axios.get(`productAggregate/get-all-productdata/${id}`);
                if (response.data.result) {
                    setProductDetails(response.data.responseData.productDetails);
                    setTechnicalData(response.data.responseData.technicalData);
                    setOptionsData(response.data.responseData.optionsData);
                    setMaterialData(response.data.responseData.materialData);
                } else {
                    console.log('Failed to fetch product details');
                }
            } catch (err) {
                console.log('Error fetching product details');
            }
        };

        fetchProductDetails();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading products</p>;

    return (
        <>
              <ResponsiveImage mobileSrc={imgmobile} desktopSrc={imgtop} />

            <Container className='py-4'>
                <Row>
                    <Col lg={4}>
                        <Container className='produclistbox'>
                            <div className='py-3' id='menu'>
                                <h5 className='text-white text-center py-3'>Products</h5>
                                <hr></hr>
                                {products.map((product, index) => (
                                    <div
                                        key={index}
                                        className='product-list-item'
                                        onClick={() => navigate(`/Product/${product.id}`)}
                                    >
                                        <p className='produclistcontetst ps-3 mx-3 pb-2' style={{ fontFamily: 'Poppins' }}>
                                            {product.productName}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </Container>
                    </Col>
                    <Col lg={8}>
                        {productDetails && (
                            <>
                                <Image
                                    src={`http://positivebackend.sumagodemo.com/${productDetails.img}`}
                                    rounded
                                    fluid
                                    className='rounded mx-auto d-block'
                                    style={{ height: '23rem' }}
                                />
                                <h1 className='p-2'>Application</h1>
                                <ul>
                                    <li style={{ fontSize: '17px', fontFamily: 'Poppins' }}>
                                        <p>{productDetails.application}</p>
                                    </li>
                                </ul>
                            </>
                        )}
                    </Col>
                </Row>
            </Container>
                    <ProductTab/>
            <Container fluid className="productTechnicaldata mb-4">
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
                                    <Col lg={8}>
                                        {technicalData.map(data => (
                                            <li key={data.id}>{data.technicalDescription}</li>
                                        ))}
                                    </Col>
                                </Container>
                            </Tab.Pane>
                            <Tab.Pane eventKey="OPTION">
                                <h1 className="tableheadstyle text-center pt-5 pb-3">OPTION</h1>
                                <Container>
                                    <Row className="d-flex justify-content-center">
                                        <Col lg={8}>{optionsData.map(data => (
                                            <li key={data.id}>{data.optionsDescription}</li>
                                        ))}</Col>
                                    </Row>
                                </Container>
                            </Tab.Pane>
                            <Tab.Pane eventKey="MATERIAL OF CONSTRUCTION">
                                <h1 className="tableheadstyle text-center pt-5 pb-3">
                                    MATERIAL OF CONSTRUCTION
                                </h1>
                                <Container>
                                    <Row className="d-flex justify-content-center">
                                        <Col lg={8}>{materialData.map(data => (
                                            <li key={data.id}>{data.materialDescription}</li>
                                        ))}</Col>
                                    </Row>
                                </Container>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Tab.Container>
            </Container>
                  <ProductTechnicaldata/>                      
        </> 
    );
};

export default ProductList;
