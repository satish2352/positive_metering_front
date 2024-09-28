import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import visionEye from "../../assets/img/About/eye.png";
import missiongoal from "../../assets/img/About/MISSION (1).png";

import visionArrow from "../../assets/img/About/visionArrow.png";
import missionArrow from "../../assets/img/About/MissionArrow.png";
import '../../assets/CSS/aboutus.css';
import { IoIosArrowForward } from "react-icons/io";

const VisionMission = () => {
    const [isChanged, setIsChanged] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsChanged(prevState => !prevState);
        }, 3000); // Change content after 3 seconds

        return () => {
            clearTimeout(timer);
        };
    }, [isChanged]);

    const handleClick = () => {
        setIsChanged(prevState => !prevState);
    };

    return (
        <section className='visionMission mt-2 mb-3'>
            <Container fluid>
                <Row className='align-items-center pt-xl-5'>
                <Col lg={{ span: 5, offset: 5 }} xs={8}>
                            <div className='text-white fs-1'>
                                Vision <img style={{ width: "15%" }} src={visionEye} alt="Vision-img" title='Vision-img' />
                            </div>
                            <p className='text-white fw-light' style={{ textAlign: "justify" }}>
                            To revolutionize and simplify chemical treatments across global industries, ensuring efficiency and sustainability.
                            </p>
                        
                        </Col>
                    {/* {isChanged ? (
                        <Col lg={{ span: 5, offset: 6 }}>
                            <h2 className='text-white'>
                                Vision <img style={{ width: "15%" }} src={visionEye} alt="" />
                            </h2>
                            <p className='text-white visionMissionp' style={{ textAlign: "justify" }}>
                                The Founder of our company Mr. Sudhir Mutalik is a passionate mechanical engineer graduated from the reputed Government College of Engineering, Karad near Pune, India. Diesel Engines has been his interest for study since his university days. He was selected by the world's well-known Diesel Engine manufacturer Kirloskar Oil Engines Ltd through campus recruitment. After working with KOEL for a short while his love for Diesel Engines and precisely the slider-crank mechanism attracted him towards Chemical Dosing Pumps, the drive end of which also works on a similar principle. After working over the product for a few years and studying applications in various sectors Positive Metering Pumps company was founded in 1996 for manufacturing of Chemical Dosing Pumps and Skid Mounted Chemical Dosing Systems.
                            </p>
                            <h6 className='text-white' onClick={handleClick} style={{ letterSpacing: "2px" }}>
                                VISION <img style={{ width: "50%" }} src={visionArrow} alt="" /> <span style={{ fontWeight: "200", letterSpacing: "2px" }}> MISSION </span>
                            </h6>
                        </Col>
                    ) : (
                        <Col lg={{ span: 5, offset: 6 }}>
                            <h2 className='text-white' >
                                Mission <img style={{ width: "15%" }} src={missiongoal} alt="" />
                            </h2>
                            <p className='text-white visionMissionp' style={{ textAlign: "justify"}}>
                                The  graduated from the reputed Government College of Engineering, Karad near Pune, India. Diesel Engines has beenwell-known Diesel Engine manufacturer Kirloskar Oil Engines Ltd through campus recruitment. After working with KOEL for a short Founder of our company Mr. Sudhir Mutalik is a passionate mechanical engineer while his love for Diesel Engines and precisely the slider-crank mechanism attracted him towards Chemical Dosing Pumps, the drive end of which also works on a similar principle. After working over the product for a few years and studying applications in various sectors Positive Metering Pumps company was founded in 1996 for manufacturing of Chemical Dosing Pumps and Skid Mounted Chemical Dosing Systems .
                            </p>
                            <h6 className='text-white' onClick={handleClick} style={{ letterSpacing: "2px" }}>
                                <span style={{ fontWeight: "200", letterSpacing: "2px" }}> VISION </span> <img style={{ width: "50%" }} src={missionArrow} alt="" /> MISSION
                            </h6>
                        </Col>
                    )} */}
                </Row>
            </Container>
        </section>
    );
};

export default VisionMission;
