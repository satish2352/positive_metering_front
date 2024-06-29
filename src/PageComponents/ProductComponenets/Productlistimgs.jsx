import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import img from  '../../assets/img/Plunger.png'
import Image from 'react-bootstrap/Image';
const Productlistimgs = () => {
    const list1 = [
        { title: "Oil & Gas" },
        { title: "Petrochemicals" },
        { title: "Power" },
        { title: "Chemicals and Fertilizers" },
        { title: "Water, Waste Water, Sewage Treatments" },
        { title: "Pharmaceuticals" },
    ]
    const list2 = [
        { title: "Water, Waste Water, Sewage Treatments" },
        { title: "Oil Pharmaceuticals" },
        { title: "Paper and Textiles" },
        { title: "Paper and Textiles" },
        { title: "Food and Beverages" },
    ]
    return (
        <Container  >

            <Row className='productlistimgsback py-3'>
                <Image src={img} rounded fluid className='rounded mx-auto d-block' style={{height:'27rem'}}/>
                {/* <h1 className='productlistimgstitle'>PLUNGER</h1>
                <h5 className='productlistimgssubtitle'>TYPE DOSING PUMPS</h5>
                <div className='productlistproductimg '>  <img src={img} alt="" className=' w-75  ' /></div> */}
            </Row>
            <Row >
                <h1 className='p-2'>Applications</h1>
                <div className=' d-lg-flex'>
                    <Col lg={6} sm={12}> {
                        list1.map((a) => {
                            return (
                                <li className='productlistimgsapplication' style={{fontSize:'17px'}}>{a.title}</li>
                            )
                        })
                    }</Col>
                    <Col lg={6} sm={12}> {
                        list2.map((a) => {
                            return (
                                <li className='productlistimgsapplication' style={{fontSize:'17px'}}>{a.title}</li>
                            )
                        })
                    }</Col>
                </div>
            </Row>
        </Container>
    )
}

export default Productlistimgs