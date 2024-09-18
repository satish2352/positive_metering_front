import React, { useContext } from "react";
import Homebaner from "../PageComponents/Home/Homebaner";
import HomeAboutus from "../PageComponents/Home/HomeAboutus";
import OurProducts from "../PageComponents/Home/OurProducts";
import Producttab from "../PageComponents/Home/Producttab";
import Shopnow from "../PageComponents/Home/Shopnow";
import Progresspump from "../PageComponents/Home/Progresspump";
import Testomonial from "../PageComponents/Home/Testomonial";
import Requestcallback from "../PageComponents/Home/Requestcallback";
import Requestcallback2 from "../PageComponents/Home/Requestcallback2";

import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import progress_img from "../assets/img/Home/Progress.png";
import Progress_cavity_screw_pump from "../PageComponents/Home/Progress_cavity_screw_pump";
import Shopnowhome from "../PageComponents/Home/Shopnowhome";
import { ProductContext } from "../ProductContext";
import OurProducts2 from "../PageComponents/Home/OurProducts2";
import Testomonial2 from "../PageComponents/Home/Testomonial2";
import MetaTags from "../components/MetaTags";
const Home = () => {
  document.title = "Positive Metering"

  const metaDetails = {
    title: 'Leading Metering Pump Manufacturer in India | Positive Metering Pvt. Ltd',
    description: 'Explore top-quality metering pumps, including chlorine dosing pumps, by Positive Metering Pvt. Ltd, the trusted manufacturer in India.',
    keywords: 'Metering Pump Manufacturer in India',
    slug: '',
    alt: 'Leading Metering Pump Manufacturer - Positive Metering Pvt. Ltd',
  };
  return (
    <>
      <MetaTags
        title={metaDetails.title}
        description={metaDetails.description}
        keywords={metaDetails.keywords}
        slug={metaDetails.slug}
        alt={metaDetails.alt}
      />
      <Homebaner />
      <HomeAboutus />
      <OurProducts />
      <OurProducts2 />
      <Producttab />
      <Shopnowhome />
      <Testomonial />
      <Testomonial2 />
      <Requestcallback />
      <Requestcallback2 />
      <Progress_cavity_screw_pump />
    </>
  );
};

export default Home;
