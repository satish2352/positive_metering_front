import React, { useEffect, useState } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import AOS from "aos";
import axios from "axios";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom"; // Assuming you're using React Router

const HomeAboutus = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [aboutData, setAboutData] = useState(null); // State to store fetched data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
    });

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/about/get-about");
        setAboutData(response.data.responseData[0]);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const fullText = aboutData?.description || "No description available.";
  const truncatedText = fullText.split(" ").slice(0, 87).join(" ") + "...";

  return (
    <Container fluid className="mt-lg-3 mt-2">
      <Row>
        <Col
          lg={5}
          className="abcd order-lg-1 d-none d-lg-block order-2 px-0 d-grid align-content-center"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className=" d-flex align-content-center justify-content-center">
            {loading ? <p>Loading...</p> : 
              error ? <p className="text-danger">{error}</p> : 
              aboutData ? (
                <img src={aboutData.img} className="img-fluid" title="About Us" alt="About Us" />
              ) : <p>No image available</p>}
          </div>
        </Col>
        <Col
          lg={7}
          className="order-lg-2 order-1 homeaboutinfo text-white d-grid align-items-center"
          style={{ backgroundColor: "#EE585D" }}
        >
          <div
            className="p-lg-5 py-4"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div style={{ letterSpacing: "4px" }} className=" fs-1"><h1>ABOUT US</h1></div>
            {loading ? <p>Loading...</p> : 
              error ? <p className="text-danger">{error}</p> : (
              <p className="pooja">
                {isMobile ? truncatedText : fullText}
                {isMobile && (
                  <Col
                    className=" fs-5"
                    onClick={() => navigate("/aboutleadership")}
                  ></Col>
                )}
              </p>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeAboutus;
