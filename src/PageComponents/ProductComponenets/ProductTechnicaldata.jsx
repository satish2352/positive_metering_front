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

const ProductTechnicaldata = (props) => {
  // Show/hide background image based on max-width 600px
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>

      <Container fluid >
        <Row>
          <Col xl={12} className="mb-4">
            {isSmallScreen ? (
              <Image src={img2} className="w-100" />
            ) : (
              <Image src={img1} className="w-100" />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductTechnicaldata;
