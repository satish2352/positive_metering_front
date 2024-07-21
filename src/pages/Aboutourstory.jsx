import React from 'react'
import { Container } from 'react-bootstrap'
import banner from '../assets/img/About/Rectangle 4417 (1).png';
import HomeAboutus from '../PageComponents/Home/HomeAboutus';
import VisionMission from '../PageComponents/About/VisionMission';
import Getaquote from '../PageComponents/About/Getaquote';
import Infrastructure from '../PageComponents/About/Infrastructure';
import Heading from '../components/Heading';

const Aboutourstory = () => {
  window.scrollTo(0, 0);
  return (
    <>
    <Heading  heading="Our story"/>
    
      <Container fluid className=' px-0'>
        <img src={banner} alt="" className=' img-fluid'/>
      </Container>
      <HomeAboutus/>
      <VisionMission/>
      <Getaquote/>
      <Infrastructure/>
    </>
  )
}

export default Aboutourstory