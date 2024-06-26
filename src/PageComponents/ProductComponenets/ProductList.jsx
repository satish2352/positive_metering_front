import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Productlisting from './Productlisting'
import Productlistimgs from './Productlistimgs'

const ProductList = () => {
  return (
   <Container className=' py-4'>
    <Row>
        <Col lg={4}>
            <Productlisting/>
        </Col>
        <Col lg={8}>
            <Productlistimgs/>
        </Col>
    </Row>
   </Container>
  )
}

export default ProductList