import React from 'react'
import { Container } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
import progress_img from '../../assets/img/aa/Group 68.webp'
import im3 from '../../assets/img/aa/Frame 93.webp'
import "../../assets/CSS/requestcall.css";

function Progress_cavity_screw_pump() {
    return (
        <>
        <div className='buttonpart' ></div>
            <div style={{ backgroundColor: '#efefef',padding:'20px' }}>
                <Container>
                    <Image src={progress_img} alt='Progress_cavity_screw_pump' title='Progress_cavity_screw_pump' fluid className='mt-5 mb-5 d-none d-md-block'data-aos="fade-up"data-aos-easing="linear"
              data-aos-duration="1500" />
                    <Image src={im3} alt='Progress_cavity_screw_pump' title='Progress_cavity_screw_pump' fluid className='mt-5 mb-5 d-block d-md-none' data-aos="fade-up"data-aos-easing="linear"
              data-aos-duration="1500"/>

                </Container>
            </div>
        </>
    )
}

export default Progress_cavity_screw_pump
