import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import img from  '../../assets/img/productimgs/Frame 17.png'
const Productlistimgs = () => {
    const list = [
        { title: "Oil & Gas" },
        { title: "Petrochemicals" },
        { title: "Power" },
        { title: "Chemicals and Fertilizers" },
        { title: "Water, Waste Water, Sewage Treatments" },
        { title: "Pharmaceuticals" },
    ]
    return (
        <Container  >

            <Row className='productlistimgsback py-3'>
                <img src={img} alt="" />
                {/* <h1 className='productlistimgstitle'>PLUNGER</h1>
                <h5 className='productlistimgssubtitle'>TYPE DOSING PUMPS</h5>
                <div className='productlistproductimg '>  <img src={img} alt="" className=' w-75  ' /></div> */}
            </Row>
            <Row className='px-lg-5 py-lg-3'>
                <h1 className=' p-4'>Applications</h1>
                <div className=' d-lg-flex'>
                    <Col lg={6} sm={12}> {
                        list.map((a) => {
                            return (
                                <li className='productlistimgsapplication'>{a.title}</li>
                            )
                        })
                    }</Col>
                    <Col lg={6} sm={12}> {
                        list.map((a) => {
                            return (
                                <li className='productlistimgsapplication'>{a.title}</li>
                            )
                        })
                    }</Col>
                </div>
            </Row>

        </Container>
    )
}

export default Productlistimgs