import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { Container, Image } from "react-bootstrap";
import "../../assets/CSS/productTechnicaldata.css";

import img1 from "../../assets/img/productimgs/Group 1000003783.jpg";
import img2 from "../../assets/img/productimgs/Group 1000003844.png";
const ProductTechnicaldata = () => {
  //show hide bg-img based on max-with 600px
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //table 1 data

  const TechnicalDataTable = [
    {
      flowrate: '0-246',
      pressure: '80',
      PumpModel: 'SD1011',
      l: '520',
      w: '400',
      h: '250'

    },
    {
      flowrate: '0-1169',
      pressure: '100',
      PumpModel: 'SD2017',
      l: '620',
      w: '470',
      h: '300'
    },
    {
      flowrate: '0-6521',
      pressure: '200',
      PumpModel: 'SD3530',
      l: '810',
      w: '680',
      h: '350'
    },
    {
      flowrate: '0-9782',
      pressure: '200',
      PumpModel: 'SD6040',
      l: '1100',
      w: '900',
      h: '450'
    },
  ]

  return (
    <>
      <Container fluid className="productTechnicaldata mb-4">
        <Tab.Container id="left-tabs-example" defaultActiveKey="TECHNICAL">
          <Container>
            <Col>
              <Nav variant="pills" className=" d-flex justify-content-center">

                <Col lg={2} className=" mx-2 mt-lg-0 mt-4">
                  <Nav.Item>
                    <Nav.Link
                      eventKey="TECHNICAL"
                      className="tabbuttons tabname text-center"
                    >
                      TECHNICAL
                    </Nav.Link>
                  </Nav.Item>
                </Col>
                <Col lg={2} className=" mx-2  mt-lg-0 mt-4">
                  <Nav.Item>
                    <Nav.Link
                      eventKey="OPTION"
                      className="tabbuttons tabname text-center"
                    >
                      OPTION
                    </Nav.Link>
                  </Nav.Item>
                </Col>

                <Col lg={4} className=" mx-2  mt-lg-0 mt-4">
                  <Nav.Item>
                    <Nav.Link
                      eventKey="MATERIAL OF CONSTRUCTION"
                      className="tabbuttons tabname text-center"
                    >
                      MATERIAL OF CONSTRUCTION
                    </Nav.Link>
                  </Nav.Item>
                </Col>

              </Nav>
            </Col>
          </Container>

          <Col >
            <Tab.Content>
              <Tab.Pane eventKey="TECHNICAL">
                <h1 className="tableheadstyle text-center pt-5 pb-3">
                  Plunger type dosing pumps Technical Data
                </h1>

                <Container className=" d-flex justify-content-center">
                  <Col lg={8} >
                    <Table className=" border border-1 bo">
                      <thead >
                        <tr >
                          <th>Flow Rate</th>
                          <th>Pressure</th>
                          <th>Pump Model</th>
                          <th colSpan={3}>Installation Dimensions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>(Ltr / Hr)</td>
                          <td>bar (g) Max.</td>
                          <td></td>
                          <td>L</td>
                          <td>W</td>
                          <td>H</td>
                        </tr>
                        {
                          TechnicalDataTable.map((a) => (
                            <>
                              <tr>
                                <td>{a.flowrate}</td>
                                <td>{a.pressure}</td>
                                <td>{a.PumpModel}</td>
                                <td>{a.l}</td>
                                <td>{a.w}</td>
                                <td>{a.h}</td>
                              </tr>
                            </>
                          ))
                        }

                      </tbody>
                    </Table>
                  </Col>

                </Container>

                <Row>
                  <Col xl={12} className="mb-4">
                    {isSmallScreen ? (
                      <Image src={img2} className="w-100" />
                    ) : (
                      <Image src={img1} className="w-100" />
                    )}
                  </Col>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="OPTION">
                <h1 className="tableheadstyle text-center pt-5 pb-3">
                  OPTION
                </h1>

                <Container>
                  <Row className=" d-flex justify-content-center">
                    <Col lg={8}>
                      <ul style={{ fontFamily: 'Poppies' }}>
                        <li>Multiple Head with identical or different outputs for each head using single drive</li>
                        <li>Jacketed Head for heating or cooling the liquid being pumped</li>
                        <li>Automatic flow variation by receiving 4-20 mA signal from the process</li>
                      </ul></Col>
                  </Row>
                </Container>
              </Tab.Pane>
              <Tab.Pane eventKey="MATERIAL OF CONSTRUCTION">
                <h1 className="tableheadstyle text-center pt-5 pb-3">
                  MATERIAL OF CONSTRUCTION
                </h1>
                <Container>
                  <Row className=" d-flex justify-content-center">
                    <Col lg={8}>
                      <Row>
                        <Col xl={6} xxl={6} lg={6} md={6} sm={12}>
                          <ul>
                            <li>SS304/SS304L</li>
                            <li>SS304/SS304L</li>
                            <li>Carbon Steels</li>
                            <li>Any other special alloy</li>
                          </ul>
                        </Col>
                        <Col xl={6} xxl={6} lg={6} md={6} sm={12}>
                          <ul>
                            <li>PP/PVC/PTFE/PVDF</li>
                            <li>Alloy 20</li>
                            <li>Hastalloy B/C</li>
                            <li>Diaphragm MOC - PTFE/Metallic</li>
                          </ul>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Tab.Container>
      </Container>
    </>
  );
};

export default ProductTechnicaldata;
