import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import banner1 from "../../assets/img/2540 x 1026 (1).jpg";
import banner2 from "../../assets/img/Home/2540 x 1018 (2).jpg";
import banner3 from "../../assets/img/Home/2540 x 1018.jpg";
import banner1Mobile from "../../assets/img/Frame 68 (1).jpg";
import banner2Mobile from "../../assets/img/Home/image 45.png";
import banner3Mobile from "../../assets/img/Home/Group 1000004134.png";
import { Col, Container, Row } from "react-bootstrap";
import "../../assets/CSS/homebanner.css";
import axios from "axios";

function Homebaner() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [homeslider, sethomeslider] = useState([]);
  const [pauseCarousel, setPauseCarousel] = useState(false);

  const defaultImages = {
    desktop: [{ img: banner1, view: "Desktop", isActive: true }],
    mobile: [{ img: banner1Mobile, view: "Mobile", isActive: true }],
  };

  useEffect(() => {
    axios
      .get("/homeslider/get-homeslider")
      .then((response) => {
        const data = response.data.responseData;
        const desktopSlides = data.filter((slide) => slide.view === "Desktop");
        const mobileSlides = data.filter((slide) => slide.view === "Mobile");

        const finalSlides = [
          ...(desktopSlides.length ? desktopSlides : defaultImages.desktop),
          ...(mobileSlides.length ? mobileSlides : defaultImages.mobile),
        ];
        sethomeslider(finalSlides);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
        sethomeslider([...defaultImages.desktop, ...defaultImages.mobile]);
      });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isVideo = (url) => {
    return url.endsWith(".mp4") || url.endsWith(".webm") || url.endsWith(".ogg");
  };

  const handleVideoPlay = () => {
    setPauseCarousel(true); // Pause the carousel
  };

  const handleVideoEnded = () => {
    setPauseCarousel(false); // Resume the carousel
  };

  return (
    <div style={{ position: "relative" }}>
      <Carousel
        className="homebannerback"
        pause={pauseCarousel ? "hover" : false} // Control carousel pause based on state
        interval={pauseCarousel ? null : 3000} // Pause the carousel if `pauseCarousel` is true
      >
        {homeslider
          .filter(
            (a) =>
              a.isActive &&
              (isMobile ? a.view === "Mobile" : a.view === "Desktop")
          )
          .map((a, index) => (
            <Carousel.Item key={index}>
              {isVideo(a.img) ? (
                <video
                  className="img-fluid "
                  autoPlay
                  loop
                  muted
                  playsInline
                  onPlay={handleVideoPlay}
                  onEnded={handleVideoEnded}
                >
                  <source src={a.img} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image src={a.img} rounded className="img-fluid " alt="Home banners" />
              )}
            </Carousel.Item>
          ))}
      </Carousel>
      <Container fluid className="contentbanner d-none d-lg-block">
        <Row className="sticky-top">
          {/* Additional content can go here */}
        </Row>
      </Container>
    </div>
  );
}

export default Homebaner;
