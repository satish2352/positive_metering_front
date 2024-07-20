import React from 'react'
import { Container, Row } from 'react-bootstrap'

const Heading = ({heading}) => {
    return (
        <>
            <Container>
                <Row className=' text-center'>
                    <p className='oueprd text-uppercase' >{heading}</p>
                </Row>
            </Container>
        </>
    )
}

export default Heading     