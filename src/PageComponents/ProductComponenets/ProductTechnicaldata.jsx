import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { Container, Image } from "react-bootstrap";
import "../../assets/CSS/productTechnicaldata.css";

import img1 from "../../assets/img/productimgs/Group 1000003783.jpg";
import img2 from "../../assets/img/productimgs/Group 1000004063.jpg";
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
      flowrate : '0-513',
      pressure : '133',
      PumpModel : 'PL1011',
      l : '1050',
      w : '350',
      h :'850'

    },
    {
      flowrate : '0-4152',
      pressure : '640',
      PumpModel : 'PL2017',
      l : '1550',
      w : '400',
      h :'1350'
    },
    {
      flowrate : '0-10993',
      pressure : '813',
      PumpModel : 'PL3530',
      l : '1800',
      w : '450',
      h :'1400'
    },
    {
      flowrate : '0-22800',
      pressure : '796',
      PumpModel : 'PL6040',
      l : '2300',
      w : '700',
      h :'2000'
    },
  ]

  return (
    <>
      <Container fluid className="productTechnicaldata mb-4">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Container>
            <Col>
              <Nav variant="pills" className=" d-flex justify-content-evenly">
                <Col>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="TECHNICAL"
                      className="tabbuttons tabname text-center"
                    >
                      TECHNICAL
                    </Nav.Link>
                  </Nav.Item>
                </Col>
                <Col className=" mx-2">
                  <Nav.Item>
                    <Nav.Link
                      eventKey="OPTION"
                      className="tabbuttons tabname text-center"
                    >
                      OPTION
                    </Nav.Link>
                  </Nav.Item>
                </Col>

                <Col className=" mx-2">
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

          <Col>
            <Tab.Content>
              <Tab.Pane eventKey="TECHNICAL">
                <h1 className="tableheadstyle text-center pt-5 pb-3">
                  Plunger type dosing pumps Technical Data
                </h1>

                <Container>
                  <Table bordered >
                    <thead>
                      <tr>
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
                      <tr>
                        <td>0-513</td>
                        <td>133</td>
                        <td>PL1011</td>
                        <td>1050</td>
                        <td>350</td>
                        <td>850</td>
                      </tr>
                      {
                        TechnicalDataTable.map((a)=>(
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

                  {/* <Table className="" style={{ border: "1px solid gray" }}>
                    <tbody>
                      <tr>
                        <td>Flow rate</td>
                        <td>Pressure</td>
                        <td>Pump Model</td>
                        <td colSpan={3}>Installation Dimensions</td>
                      </tr>
                      {pumpData.map((item, index) => (
                        <tr key={index}>
                          <td>{item.flowRate}</td>
                          <td>{item.pressure}</td>
                          <td>{item.pumpModel}</td>
                          <td>
                            <Table>
                              <tbody>
                                {item.installationDimensions.map(
                                  (dimension, idx) => (
                                    <tr key={idx}>
                                      <td>{dimension.installDim1}</td>
                                      <td>{dimension.installDim2}</td>
                                    </tr>
                                  )
                                )}
                              </tbody>
                            </Table>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table> */}
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
                  Second tab content
                </h1>

                <Container>
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
                    </tbody>
                  </Table>
                </Container>
              </Tab.Pane>
              <Tab.Pane eventKey="MATERIAL OF CONSTRUCTION">
                <h1 className="tableheadstyle text-center pt-5 pb-3">
                  MATERIAL OF CONSTRUCTION
                </h1>
                <Container>
                  <Table style={{ border: "1px solid gray" }}>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
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
