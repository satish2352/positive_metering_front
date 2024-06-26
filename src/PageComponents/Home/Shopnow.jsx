import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../../assets/CSS/shopnow.css'
import im from "../../assets/img/Home/POSITIVE 1.png"

const Shopnow = () => {
    return (
        <Container fluid className='shopnow py-sm-4 py-lg-0'>
            <Row>
                <Col md={9} xs={12} className=' justify-content-center d-flex text-center text-lg-start  '>
                    <div className=' align-content-center'>
                        <h2 className=' text-uppercase'>"Streamline Your Dispensing Process</h2>
                        <h1 className=' text-uppercase'>   Shop Now <span className=' fs-1'> !"</span> </h1>
                        <button className=' bg-transparent border border-2 border-white text-white rounded-5 px-3 py-3 fw-bold fs-6' style={{ letterSpacing: "2px" }}> CONTACT US</button>
                    </div>

                </Col>
                <Col md={3} xs={12}  className=' d-grid justify-content-end px-0' >
                    <div className='ok'>
                        <div className='imshopnow'>
                            <div className=' text-center  imshopdata px-3'>
                                <h1>Streamline</h1>
                                <h3>  Your Dispensing Process Shop Now !</h3></div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Shopnow