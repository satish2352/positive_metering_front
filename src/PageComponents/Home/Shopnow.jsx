import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../../assets/CSS/shopnow.css'
import im from "../../assets/img/Home/POSITIVE 1.png"

const Shopnow = () => {
    return (
        <Container fluid className='shopnow py-sm-4 py-lg-0'>
            <Row>
<Col md={3} xs={12} className='d-flex justify-content-end align-items-center ls-2'>
<h2 className='bannerH' style={{ letterSpacing: '3px' }}>ADDRESS</h2>

</Col>

                <Col md={6} xs={12} className=' justify-content-start d-flex text-center text-lg-start '>
                    <div className=' align-content-center fs-6 mt-4  BannerT'>
                         <a href="" style={{textDecoration:'none'}}>Head Office, Nashik M-8, MIDC, Ambad, Nashik - 422010, India.</a><br />
                 <a  href="tel:+91-253-6613206"   style={{ textDecoration: 'none' }}>Phone: +91-253-6613206/6613218/6613214</a><br />
                     <a href="" style={{textDecoration:'none'}}>Mail: info@positivemetering.com</a><br />
                        
                        <button className=' BannerB mt-2 bg-transparent border border-2 border-danger text-white rounded-5 px-3 py-3 fw-bold fs-6' style={{ letterSpacing: "2px" }}> CONTACT US</button>
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

export default Shopnow