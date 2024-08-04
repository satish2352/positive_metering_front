import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Heading from "../../components/Heading";
import ResponsiveImage from "../../pages/ResponsiveImage";
import imgmobile from "../../assets/img/aa/mobile/blog PAGE.jpg";
import imgtop from "../../assets/img/aa/baner/BANER blog.jpg";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const BlogCard = () => {
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState([]);
  const characterLimit = 200; // Set your character limit here

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Fetch the blog data from the API
    const fetchBlogData = async () => {
      try {
        const response = await axios.get("/blogdetails/get-blogdetails");
        if (response.data.result) {
          const truncatedData = response.data.responseData
            .filter((response) => response.isActive)
            .map((blog) => ({
              ...blog,
              shortDesc:
                blog.shortDesc.length > characterLimit
                  ? blog.shortDesc.substring(0, characterLimit) + "..."
                  : blog.shortDesc,
            }));
          setBlogData(truncatedData);
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlogData();
  }, []);

  const renderBlogCard = (blog, index, reverse) => (
    <Col key={blog.id} xl={6} lg={6} md={12} sm={12} className=" my-2 my-lg-0">
      <Card className="border-0 h-100 text-white">
        <Row className="align-items-center">
          {reverse ? (
            <>
              <Col
                md={6}
                className="ps-0 blogcrd"
                style={{
                  background: index % 4 === 1 ? "#727171" : "#EE585D",
                }}
              >
                <Card.Body
                  className="pt-4 pb-3 d-flex flex-column justify-content-between"
                  style={{
                    background: index % 4 === 1 ? "#727171" : "#EE585D",
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
                      {blog.title.length > 23
                        ? blog.title.substring(0, 23) + "..."
                        : blog.title}
                    </Card.Title>
                    <Card.Text
                      className="blogCardDesc pt-3"
                      dangerouslySetInnerHTML={{
                        __html: blog.shortDesc,
                      }}
                    >
                      {}
                    </Card.Text>
                  </div>
                  <div className="d-flex justify-content-end ">
                    <Button
                      variant="transparent"
                      className="text-white py-2 mt-xl-3 align-self-end fw-bolder "
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
              <Col md={6} className="pe-0 ps-0 bg-light blogcrd">
                <Card.Img
                  variant="top"
                  src={blog.img}
                  className="bg-light img-fluid w-100 h-100"
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                />
              </Col>
            </>
          ) : (
            <>
              <Col md={6} className="pe-0 ps-0 bg-light blogcrd">
                <Card.Img
                  variant="top"
                  src={blog.img}
                  className="bg-light img-fluid w-100 h-100"
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                />
              </Col>
              <Col
                md={6}
                className="ps-0 blogcrd"
                style={{
                  background: index % 4 === 0 ? "#EE585D" : "#727171",
                }}
              >
                <Card.Body
                  className="pt-4 pb-3 d-flex flex-column justify-content-between"
                  style={{
                    background: index % 4 === 0 ? "#EE585D" : "#727171",
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
                      {blog.title.length > 23
                        ? blog.title.substring(0, 23) + "..."
                        : blog.title}
                    </Card.Title>
                    <Card.Text
                      className="blogCardDesc pt-3"
                      dangerouslySetInnerHTML={{
                        __html: blog.shortDesc,
                      }}
                    >
                      {}
                    </Card.Text>
                  </div>
                  <div className="d-flex justify-content-end ">
                    <Button
                      variant="transparent"
                      className="text-white py-2 mt-xl-3 align-self-end fw-bolder "
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
            </>
          )}
        </Row>
      </Card>
    </Col>
  );

  return (
    <>
      <ResponsiveImage mobileSrc={imgmobile} desktopSrc={imgtop} />
      <section>
        <Heading heading="Blog" />
        <Container fluid>
          {blogData.map((_, rowIndex) => (
            <Row className="px-4" key={rowIndex}>
              {blogData
                .slice(rowIndex * 2, rowIndex * 2 + 2)
                .map((blog, index) =>
                  renderBlogCard(blog, index, rowIndex % 2 === 1)
                )}
            </Row>
          ))}
        </Container>
      </section>
    </>
  );
};

export default BlogCard;