import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../../assets/CSS/requestcall.css'
const Requestcallback = () => {
    return (
        <div className=' requestcallback d-flex align-items-center justify-content-evenly '>
           
            <Container className=' p-4'>
                <Row className='d-flex  justify-content-evenly  fw-bold'  >
                    <Col md={7} className='requestcallbackleft '>
                        <div className='requestcallbacklefttop'>
                            <h4 className=' text-white text-center py-3'>PLUNGER TYPE DOSING PUMPS</h4>
                        </div>
                        <div className='p-3 p-lg-5 lh-3'>
                            <p>Dosing Pumps are extensively utilized in a range of industries
                                to maintain precise chemical dosing and control. Dosing Pumps
                                economy in India has played a essential role in various sectors
                                , like Oil and Gas , Water treatment, Chemical, Pharmaceutical,
                                Agriculture, which brings Precision,costeffectiveness and
                                efficiency in various process. Which enhance Productivity
                                and Quality standards.</p>
                        </div>
                    </Col>
                    <Col md={4}  className='requestcallbackleft'>
                        <div className='requestcallbacklefttop'>
                            <h4 className=' text-white text-center py-3 text-uppercase'>Request A CALL BACK</h4>
                        </div>
                        <div className='p-3 px-5'>
                            <form action="">
                                <div className=' d-grid fw-bold requestinputlb'><label htmlFor=""> Name</label>
                                    <input type="text" className='requestinput' placeholder='Enter name' />
                                </div>
                                <div className=' d-grid requestinputlb'><label htmlFor=""> Name</label>
                                    <input type="text" className='requestinput' placeholder='Enter name' />
                                </div>
                                <div className=' d-grid requestinputlb'><label htmlFor=""> Name</label>
                                    <input type="text" className='requestinput' placeholder='Enter name' />
                                </div>
                                <div className=' d-flex justify-content-end pt-4'>
                                    <button className='px-4 py-2 text-center formrequestbtn '>Read More</button>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Requestcallback