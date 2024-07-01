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

  const pumpData = [
    {
      flowRate: "35",
      pressure: "10",
      pumpModel: "GRM 91",
      installationDimensions: [{ installDim1: "hello", installDim2: "nice" }],
    },
    {
      flowRate: "165",
      pressure: "10",
      pumpModel: "GRM 92",
      installationDimensions: [{ installDim1: "", installDim2: "" }],
    },
    {
      flowRate: "600",
      pressure: "6",
      pumpModel: "GRM 93",
      installationDimensions: [{ installDim1: "", installDim2: "" }],
    },
    {
      flowRate: "1200",
      pressure: "6",
      pumpModel: "GRM 94",
      installationDimensions: [{ installDim1: "", installDim2: "" }],
    },
  ];

  return (
    <>
      <Container fluid className="productTechnicaldata">
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
                  <Table striped bordered >
                    <thead>
                      <tr>
                        <th>Flow Rate</th>
                        <th>Pressure</th>
                        <th>Pump Model</th>
                        <th>Pump Model</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        
                        <td>Larry the Bird</td>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
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
                  <Col xl={12} className=" ">
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
