import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Heading from "../../components/Heading";
import ResponsiveImage from "../../pages/ResponsiveImage";
import imgmobile from "../../assets/img/services/mobileview.png";
import imgtop from "../../assets/img/services/diskimg.png";
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

const BlogCard = () => {
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Fetch the blog data from the API
    const fetchBlogData = async () => {
      try {
        const response = await axios.get('/blogdetails/get-blogdetails');
        if (response.data.result) {
          setBlogData(response.data.responseData);
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlogData();
  }, []);

  return (
    <>
      <ResponsiveImage mobileSrc={imgmobile} desktopSrc={imgtop} />
      <section>
        <Heading heading="Blog" />
        <Container fluid>
          <Row className="px-4">
            {blogData.map((blog, index) => (
              <Col key={blog.id} xl={3} lg={3} md={6} sm={6} className="mb-4">
                <Card className="border-0 h-100">
                  <Row
                    className={`text-white ${index % 2 === 1 ? "flex-lg-column-reverse" : "d-lg-grid"}`}
                  >
                    <Col xs={12} className="pe-0 ps-0 bg-light blogcrd">
                      <Card.Img
                        variant="top"
                        src={`http://positivebackend.sumagodemo.com/${blog.img}`}
                        className="bg-light img-fluid w-100 h-100"
                        data-aos="zoom-in"
                        data-aos-duration="2000"
                      />
                    </Col>
                    <Col xs={12} className="ps-0 blogcrd"
                      style={{ background: index % 2 === 0 ? "#EE585D" : "#CDCDCD" }}
                    >
                      <Card.Body
                        className="pt-4 pb-4 d-flex flex-column justify-content-between"
                        style={{
                          background: index % 2 === 0 ? "#EE585D" : "#CDCDCD",
                      
                        }}
                      >
                        <div>
                          <Card.Title
                            className="blogCardTitle fw-bolder pt-3"
                            style={{
                              fontWeight: "600",
                              fontSize: "0.95rem",
                              letterSpacing: "1.2px",
                            }}
                          >
                            {blog.title}
                          </Card.Title>
                          <Card.Text
                            className="blogCardDesc pt-3"
                            style={{ fontSize: "0.85rem" }}
                          >
                            {blog.shortDesc}
                          </Card.Text>
                        </div>
                        <div className="d-flex justify-content-start">
                          <Button
                            variant="transparent"
                            className="text-white py-2 mt-xl-3 align-self-end fw-bolder"
                            style={{
                              border: "3px solid white",
                              borderRadius: "30px",
                            }}
                            onClick={() => navigate(`/blogdetails/${blog.id}`)}
                          >
                            Read More
                          </Button>
                        </div>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BlogCard;
