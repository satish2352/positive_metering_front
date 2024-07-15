import React from 'react'
import { Container, Row } from 'react-bootstrap'

const Heading = ({heading}) => {
    return (
        <>
            <Container>
                <Row className=' text-center my-4 '>
                    <p className='oueprd text-uppercase' style={{fontFamily:'Roboto', fontSize:'64px' , lineHeight:'12px'}}>{heading}</p>
                </Row>
            </Container>
        </>
    )
}

export default Heading     