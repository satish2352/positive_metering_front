import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../../assets/CSS/shophome.css'
import im from "../../assets/img/Home/image.png"

const Shopnowhome = () => {
    return (
        <Container fluid className='shopnow py-sm-4 my-5 py-lg-0s'>
            <Row>
                <Col md={8} xs={12} className='mt-5 mt-lg-0 justify-content-center d-flex text-center text-lg-start  '>
                    <div className=' align-content-center'>
                        <h2 className=' text-uppercase' data-aos="fade-up" data-aos-easing="linear"
                            data-aos-duration="1500">"Streamline Your Dispensing Process</h2>
                        <h1 className=' text-uppercase' data-aos="fade-up" data-aos-easing="linear"
                            data-aos-duration="1500">   Shop Now <span className=' fs-1'> !"</span> </h1>
                        <button data-aos="fade-up" data-aos-easing="linear"
                            data-aos-duration="1500" className=' bg-transparent border border-2 border-white text-white rounded-5 px-3 py-3 fw-bold fs-6' style={{ letterSpacing: "2px" }}> CONTACT US</button>
                    </div>

                </Col>
                <Col md={4} xs={12} className='d-none d-lg-flex align-items-end justify-content-end'>
                    <img className='imshopnow' src={im} alt="Shop Now" />
                </Col>
            </Row>
        </Container>
    )
}

export default Shopnowhome