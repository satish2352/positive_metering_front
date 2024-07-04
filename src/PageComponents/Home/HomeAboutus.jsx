import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import about from '../../assets/img/Home/Group 1000004058.png'
import Heading from '../../components/Heading'
import ResponsiveImage from '../../pages/ResponsiveImage'
import imgtop from '../../assets/img/Home/homepageabout.png'
import imgmobile from '../../assets/img/Home/homepagemobileview.png'
const HomeAboutus = () => {
    return (
        // <Container fluid className=' mt-3 mb-5'>
        <>
            <div className='mb-5'>
                <Heading />
                <ResponsiveImage mobileSrc={imgmobile} desktopSrc={imgtop} />
            </div>
            {/* <Heading /> */}

            {/* <Row>
                <Col lg={6} className='order-lg-1 order-2 px-0'>
                    <img src={about} className=' img-fluid' />
                </Col>
                <Col lg={6} className='order-lg-2 order-1 homeaboutinfo text-white ' style={{ backgroundColor: "#EE585D" }}>
                    <div className=' p-lg-5 p-3 mb-5' style={{ textAlign:"justify"}}>
                        <h1 style={{letterSpacing:"4px"}}>ABOUT US</h1>
                        <p style={{}}>The Founder of our company Mr. Sudhir Mutalik is a passionate mechanical engineer graduated from the reputed Government College of Engineering, Karad near Pune, India. Diesel Engines has been his interest for study since his university days. He was selected by the world's well-known Diesel Engine manufacturer Kirloskar Oil Engines Ltd through campus recruitment. After working with KOEL for a short while his love for Diesel Engines and precisely the slider-crank mechanism attracted him towards Chemical Dosing Pumps, the drive end of which also works on a similar principle. After working over the product for a few years and studying applications in various sectors Positive Metering Pumps company was founded in 1996 for manufacturing of Chemical Dosing Pumps and Skid Mounted Chemical Dosing Systems.
                        With a vision to "Simplify Chemical Treatments in the world" after 25 years today Positive Metering Pumps (I) Pvt Ltd has done more than 125,000 installations of various products in 40 different countries of the world. The company is thankful to each and every customer for a great support so far without which the journey would not been so glorious. We have evolved as a reliable solution provider in the areas of Liquid storage, ( Solution preparation) Mixing, Dosing, and transfer. The business is totally customer-centric and the sole purpose is to provide the right and cost-effective solution.
                        </p>
                    </div>
                </Col>
            </Row> */}
        </>
        // </Container>

    )
}

export default HomeAboutus