import React from 'react'
import Heading from '../../components/Heading'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import formImg from '../../assets/img/Contactus/image-removebg-preview (89) 1.png'
const UploadCV = () => {
    return (
        <>

            <Container fluid  >
                <Row className='d-flex justify-content-center getintouchbg py-5'>
                    <Col xs={10} className='p-5 border-0 bg-white my-lg-5 shadow-lg'>

                        <Heading heading={"Get in touch"} />
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
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control placeholder='enter your message' as="textarea" rows={3} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <div className='text-center'>
                                <Button variant="danger" type='button' className='p-3 ' style={{ borderRadius: "30px", letterSpacing: "2px" }}>Send Message</Button>
                            </div>
                        </Form>

                    </Col>
                    {/* <img className='formImg' src={formImg} alt="" /> */}
                </Row>
            </Container>
        </>
    )
}

export default UploadCV