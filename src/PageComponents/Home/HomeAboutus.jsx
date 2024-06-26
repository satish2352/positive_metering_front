import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import about from '../../assets/img/Home/Group 1000004058.png'
import Heading from '../../components/Heading'
const HomeAboutus = () => {
    return (
        <Container fluid className=' mt-3'>
            <Heading />
            <Row>
                <Col lg={6} className='order-lg-1 order-2 px-0'>
                    <img src={about} className=' img-fluid' />
                </Col>
                <Col lg={6} className='order-lg-2 order-1 homeaboutinfo text-white ' style={{ backgroundColor: "#EE585D" }}>
                    <div className=' p-lg-5 p-3 ' style={{ textAlign:"justify"}}>
                        <h1 style={{letterSpacing:"4px"}}>ABOUT US</h1>
                        <p>The Founder of our company Mr. Sudhir Mutalik is a passionate
                            mechanical engineer graduated from the reputed Government
                            College of Engineering, Karad near Pune, India. Diesel Engines
                            has been his interest for study since his university days.
                            He was selected by the world's well-known Diesel Engine
                            kid Mounted Chemical Dosing Systems.
                            With a vision to "Simplify Chemical Treatments in the world" 
                            after 25 years today Positive Metering Pumps (I) Pvt Ltd has
                             done more than 125,000 installations of various products in 
                         
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>

    )
}

export default HomeAboutus