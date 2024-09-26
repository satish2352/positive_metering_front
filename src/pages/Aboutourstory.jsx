import React from 'react'
import { Container } from 'react-bootstrap'
import banner from '../assets/img/About/Rectangle 4417 (1).png';
import infrastructure from "../assets/img/blog/1 (1).jpeg"
import HomeAboutus from '../PageComponents/Home/HomeAboutus';
import VisionMission from '../PageComponents/About/VisionMission';
import Getaquote from '../PageComponents/About/Getaquote';
import Infrastructure from '../PageComponents/About/Infrastructure';
import ss from '../assets/img/blog/1 (2).jpeg'
import Heading from '../assets/img/blog/1 (2).jpeg';
import ResponsiveImage from './ResponsiveImage';
import MetaTags from '../components/MetaTags';
const metaDetails = {
  title: 'About Positive Metering Pvt. Ltd: Leading Metering Pump Manufacturer',
  description: 'Positive Metering Pvt. Ltd, a top manufacturer of metering pumps, including chlorine dosing pumps in India. Trust our dosing pump and diaphragm pump expertise.',
  keywords: 'Metering Pump Manufacturer in India',
  slug: 'aboutleadership',
  alt: 'About Positive Metering Pvt. Ltd: Leading Metering Pump Manufacturer',
};
const Aboutourstory = () => {
  document.title = "Aboutus | Positive Metering Pumps I Private Limited,Nashik - Manufacturer of Dosing System and Agitators"
  window.scrollTo(0, 0);
  return (
    <>
      {/* <Heading  heading="Our story"/> */}
      <MetaTags
        title={metaDetails.title}
        description={metaDetails.description}
        keywords={metaDetails.keywords}
        slug={metaDetails.slug}
        alt={metaDetails.alt}
      />
      <Container fluid className="px-0">
        <ResponsiveImage mobileSrc={ss} desktopSrc={infrastructure} />
      </Container>
      <HomeAboutus />
      <VisionMission />
      <Getaquote />
      <Infrastructure />
    </>
  )
}

export default Aboutourstory