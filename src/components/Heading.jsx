import React from 'react'
import { Container, Row } from 'react-bootstrap'

const Heading = ({heading}) => {
    return (
        <>
            <Container>
                <Row className=' text-center my-4 '>
                    <h1 className='oueprd text-uppercase'>{heading}</h1>
                </Row>
            </Container>
        </>
    )
}

export default Heading