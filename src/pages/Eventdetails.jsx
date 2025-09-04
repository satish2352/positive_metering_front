import React, { useEffect, useState } from "react";
import "./blogdetails.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ResponsiveImage from "./ResponsiveImage";
import Heading from "../components/Heading";

import imgmobile from "../assets/img/aa/mobile/news PAGE.jpg";
import imgtop from "../assets/img/aa/baner/BANER news.jpg";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { FaShare } from "react-icons/fa6";
import { baseURLLink, source } from "../App";

// Helper function to count words
const countWords = (text) => {
  return text?.trim()?.split(/\s+/)?.length;
};

function Eventdetails({ image, title, longetxt }) {

  document.title = "News | Positive Metering"
  // Determine grid classes based on word count
  const isLongText = countWords(longetxt) > 190;
  const imageColClass = isLongText ? "col-12 d-flex justify-content-center" : "col-lg-5  col-12";
  const textColClass = isLongText ? "col-12  justify-content-center" : "col-lg-7 col-12  mt-5 mt-lg-0";

  const [data, setData] = useState({})
  const location = useLocation()
  console.log("data", data);
  useEffect(() => {
    if (location?.state) {
      setData(location?.state?.news)
    }
  }, [])
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("/news/get-news");
        if (response.data.result) {
          const parts = location.pathname.split("/");
          const slug = parts[2];

          // filter blog by slug
          const matchedNews = response.data.responseData.find(
            (b) => b.slug === slug
          );
          console.log("matchedNews", matchedNews);
          setData(matchedNews || null);
          window.scrollTo(0, 0)
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchNews();
  }, [location?.pathname]);

  const handleWhatsAppShare = (slug) => {
    const shareUrl = `${baseURLLink}news/news/${data.slug}/${source}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareUrl)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <ResponsiveImage mobileSrc={imgmobile} desktopSrc={imgtop} />
      <Heading heading={"News"} />
      <Container className="p-2 p-lg-5 newspaper-layout">
        <Row className="justify-content-center">
          <Col sm={12} md={12} lg={12} className={`${imageColClass} text-center`}>
            <Image src={data?.img} className="mb-3"

              alt="Join Positive Metering" title="Join Positive Metering" fluid />
          </Col>
          <Col sm={12} md={12} lg={12} className={textColClass}>
            <h1 className="title fs-5">{data?.title} {" "} <FaShare title="Share blog" className="p-1" style={{ cursor: "pointer" }} size={30} color={"#ee243e"} onClick={handleWhatsAppShare} /></h1>
            <p dangerouslySetInnerHTML={{ __html: data?.longDesc }} className="content-text"></p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Eventdetails;
