import React from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'
import img1 from '../../assets/img/About/AboutUsImg.png'
const HomeAboutus = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col xxl={6} lg={6} sm={12}>
                    <Image src={img1} rounded className='img-fluid'/>
                    </Col>
                </Row>
            </Container>
        </>

    )
}

export default HomeAboutus