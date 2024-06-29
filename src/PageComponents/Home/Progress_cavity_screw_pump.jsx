import React from 'react'
import { Container } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
import progress_img from '../../assets/img/Home/Progress.png'

function Progress_cavity_screw_pump() {
    return (
        <>
            <div style={{ backgroundColor: '#efefef' }}>
                <Container>
                    <Image src={progress_img} fluid className='mt-5 mb-5' />
                </Container>
            </div>

        </>
    )
}

export default Progress_cavity_screw_pump
