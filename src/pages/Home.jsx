import React, { useContext } from "react";
import Homebaner from "../PageComponents/Home/Homebaner";
import HomeAboutus from "../PageComponents/Home/HomeAboutus";
import OurProducts from "../PageComponents/Home/OurProducts";
import Producttab from "../PageComponents/Home/Producttab";
import Shopnow from "../PageComponents/Home/Shopnow";
import Progresspump from "../PageComponents/Home/Progresspump";
import Testomonial from "../PageComponents/Home/Testomonial";
import Requestcallback from "../PageComponents/Home/Requestcallback";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import progress_img from "../assets/img/Home/Progress.png";
import Progress_cavity_screw_pump from "../PageComponents/Home/Progress_cavity_screw_pump";
import Shopnowhome from "../PageComponents/Home/Shopnowhome";
import { ProductContext } from "../ProductContext";
import OurProducts2 from "../PageComponents/Home/OurProducts2";
const Home = () => {
  return (
    <>
      <Homebaner />
      <HomeAboutus />
      <OurProducts />
      <OurProducts2 />
      <Producttab />
      <Shopnowhome />
      <Testomonial />
      <Requestcallback />
      <Progress_cavity_screw_pump />
    </>
  );
};

export default Home;
