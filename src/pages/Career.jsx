import React from 'react'
import Heading from '../components/Heading'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import formImg from '../assets/img/Career/image-removebg-preview (89) 1.png'

const Career = () => {
    return (
        <>

            <Container fluid  >
         
         
                <Row className='d-flex justify-content-center  py-5'>
                <Heading heading={"CAREER OPPORTUNITY"}  className='fs-5'/>
                {/* <h1     >CAREER OPPORTUNITY</h1> */}
                    <Col xs={10} className='p-5 border-0 bg-white my-lg-5 shadow-lg'>

                        <Heading heading={"UPLOAD TOUR CV"} />
                        <Container>
                        <Form>
                            <Row className=''>
                                <Col xl={6}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="enter your name" />
                                    </Form.Group>
                                </Col>

                                <Col xl={6}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Email Id</Form.Label>
                                        <Form.Control type="email" placeholder="enter your email" />
                                    </Form.Group>
                                </Col>
                                <Col xl={6}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control type="number" placeholder="enter your phone" />
                                    </Form.Group>
                                </Col>
                                <Col xl={6}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Subject</Form.Label>
                                        <Form.Control type="text" placeholder="enter your subject" />
                                    </Form.Group>
                                </Col>
                                <Col xl={12}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Upload CV</Form.Label>
                                        <Form.Control type="file" placeholder="enter your subject" />
                                    </Form.Group>
                                </Col>
                                
                                <Col xl={12}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control placeholder='enter your message' as="textarea" rows={3} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <div className='text-center text-center mt-xl-5 mb-xl-4'>
                                <Button variant="danger" type='button' className='p-3 ' style={{ borderRadius: "30px", letterSpacing: "2px" }}>Submit</Button>
                            </div>

                         
                        </Form>
                        </Container>
                    </Col>
             
                </Row>
                    <img className='formImg' src={formImg} alt=""  />
            </Container>
        </>
    )
}

export default Career