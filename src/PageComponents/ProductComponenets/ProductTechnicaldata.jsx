import React from 'react'
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { Container } from 'react-bootstrap';
import '../../assets/CSS/productTechnicaldata.css'
const ProductTechnicaldata = () => {
    return (
        <>
            <Container className='productTechnicaldata'>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">

                    <Col>
                        <Nav variant="pills" className=" d-flex justify-content-evenly">
                            <Col >
                                <Nav.Item>
                                    <Nav.Link eventKey="TECHNICAL" className='tabbuttons text-center'>TECHNICAL</Nav.Link>
                                </Nav.Item>
                            </Col>
                            <Col className=' mx-2'>
                                <Nav.Item>
                                    <Nav.Link eventKey="OPTION" className='tabbuttons text-center'>OPTION</Nav.Link>
                                </Nav.Item>
                            </Col>
                            <Col className=' mx-2'>
                                <Nav.Item>
                                    <Nav.Link eventKey="material of construction" className='tabbuttons text-center'>material of construction</Nav.Link>
                                </Nav.Item>
                            </Col>

                            <Col className=' mx-2'>
                                <Nav.Item>
                                    <Nav.Link eventKey="applications" className='tabbuttons text-center'>applications</Nav.Link>
                                </Nav.Item>
                            </Col>



                        </Nav>
             
                    </Col>
                    <Col>
                        <Tab.Content>
                            <Tab.Pane eventKey="TECHNICAL">
                            <h1>PLUNGER TYPE DOSING PUMPS Technical Data</h1>
                                <Table style={{ border: "1px solid gray" }}>

                                    <tbody>
                                        <tr >
                                            <td >1</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        
                                    </tbody>
                                </Table>
                            </Tab.Pane>
                            <Tab.Pane eventKey="OPTION">
                                <h1>Second tab content</h1>
                                <Table style={{ border: "1px solid gray" }}>

                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr >
                                            <td >1</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                     
                                    </tbody>
                                </Table>
                            </Tab.Pane>
                            <Tab.Pane eventKey="material of construction">
                                <h1>material of construction</h1>
                                <Table style={{ border: "1px solid gray" }}>

                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr >
                                            <td >1</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        
                                        <tr>
                                            <td>2</td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td colSpan={2}>Larry the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Tab.Pane>

                            <Tab.Pane eventKey="applications">
                                <h1>applications</h1>
                                <Table style={{ border: "1px solid gray" }}>

                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td colSpan={2}>Larry the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Tab.Pane>

                        </Tab.Content>
                    </Col>

                </Tab.Container>
            </Container>
        </>
    )
}

export default ProductTechnicaldata