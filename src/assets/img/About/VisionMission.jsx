import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import visionEye from "../../Assets/About/eye.png"
import visionArrow from "../../Assets/About/visionArrow.png"
import missionArrow from "../../Assets/About/MissionArrow.png"
import { IoIosArrowForward } from "react-icons/io";
const VisionMission = () => {
    const [isChanged, setIsChanged] = useState(true)
    function handleClick() {
        if (isChanged == true) {
            setIsChanged(false)
        } else {
            setIsChanged(true)
        }
    }
    return (
        <>
            <section className='visionMission'>
                <Container fluid>
                    <Row className='align-items-center pt-xl-5'>
                        {
                            isChanged ?
                                <>
                                    <Col lg={{ span: 5, offset: 6 }}>
                                        <h2 className='text-white'>Vision <img style={{ width: "15%" }} src={visionEye} alt="" /> </h2>
                                        <p className='text-white' style={{
                                            textAlign: "justify",
                                            fontSize: "0.78rem",
                                            fontWeight: "400"
                                        }}>
                                            The Founder of our company Mr. Sudhir Mutalik is a passionate mechanical engineer graduated from the reputed Government College of Engineering, Karad near Pune, India. Diesel Engines has been his interest for study since his university days. He was selected by the world's well-known Diesel Engine manufacturer Kirloskar Oil Engines Ltd through campus recruitment. After working with KOEL for a short while his love for Diesel Engines and precisely the slider-crank mechanism attracted him towards Chemical Dosing Pumps, the drive end of which also works on a similar principle. After working over the product for a few years and studying applications in various sectors Positive Metering Pumps company was founded in 1996 for manufacturing of Chemical Dosing Pumps and Skid Mounted Chemical Dosing Systems.
                                        </p>
                                        <h5 className='text-white'>Vision <img style={{ width: "50%" }} src={visionArrow} alt="" /> <span style={{ fontWeight: "200", }}> Mission </span> </h5>
                                    </Col>
                                    <Col xl={1}>
                                        <IoIosArrowForward  onClick={handleClick} style={{
                                            fontSize: "2.5rem",
                                            color: "white"
                                        }} />
                                    </Col>
                                </>
                                :
                                <>
                                    <Col lg={{ span: 5, offset: 6 }}>
                                        <h2 className='text-white'>Mission <img style={{ width: "15%" }} src={visionEye} alt="" /> </h2>
                                        <p className='text-white' style={{
                                            textAlign: "justify",
                                            fontSize: "0.78rem",
                                            fontWeight: "400"
                                        }}>
                                            The Founder of our company Mr. Sudhir Mutalik is a passionate mechanical engineer graduated from the reputed Government College of Engineering, Karad near Pune, India. Diesel Engines has been his interest for study since his university days. He was selected by the world's well-known Diesel Engine manufacturer Kirloskar Oil Engines Ltd through campus recruitment. After working with KOEL for a short while his love for Diesel Engines and precisely the slider-crank mechanism attracted him towards Chemical Dosing Pumps, the drive end of which also works on a similar principle. After working over the product for a few years and studying applications in various sectors Positive Metering Pumps company was founded in 1996 for manufacturing of Chemical Dosing Pumps and Skid Mounted Chemical Dosing Systems.
                                        </p>
                                        <h5 className='text-white'><span style={{ fontWeight: "200", }}> Vision </span> <img style={{ width: "50%" }} src={missionArrow} alt="" /> Mission </h5>
                                    </Col>
                                    <Col xl={1}>
                                        <IoIosArrowForward onClick={handleClick} style={{
                                            fontSize: "2.5rem",
                                            color: "white"
                                        }} />
                                        
                                    </Col>
                                </>
                        }
                    </Row>

                </Container>
            </section >
        </>
    )
}

export default VisionMission