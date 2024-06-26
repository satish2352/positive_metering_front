import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../assets/CSS/getaquote.css'
import im1 from "../../assets/img/About/Group 1000003851.png"
import im from "../../assets/img/About/Layer 7 1.png"

const Getaquote = () => {
    return (

        <Container fluid>
            <Row className=' getaquoteback'>
                <Col lg={3} className=' d-none d-lg-block'>
                    <img src={im} className=' img-fluid h-50' alt="" />
                </Col>
                <Col lg={6} className='getaquotebackone'  style={{ letterSpacing: '3px' }}>
                    <h1 className=' p-5 text-white fw-light '>"Streamline Your Dispensing Process <span className=' fw-bold fs-1'>Shop Now!</span>"</h1>
                </Col>
                <Col lg={3}>
                    <img src={im1} alt="" className=' getaquotebackleftimg img-fluid' />
                    <div  className='getaquotebackleft text-center px-3'>
                        <h4 className=' text-white mx-4'>Its Not Just About
                            The Machinery..</h4>
                        <h6 className=' text-uppercase fw-bold'>Its about the efficiency!!</h6>
                        <button style={{background: "#636262"}} className=' text-white border-0 fs-4 py-2 px-4 rounded-5' >Get A Quote</button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Getaquote