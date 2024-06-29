import React from 'react'
import Homebaner from '../PageComponents/Home/Homebaner'
import HomeAboutus from '../PageComponents/Home/HomeAboutus'
import OurProducts from '../PageComponents/Home/OurProducts'
import Producttab from '../PageComponents/Home/Producttab'
import Shopnow from '../PageComponents/Home/Shopnow'
import Progresspump from '../PageComponents/Home/Progresspump'
import Testomonial from '../PageComponents/Home/Testomonial'
import Requestcallback from '../PageComponents/Home/Requestcallback'
import { Container } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
import progress_img from '../assets/img/Home/Progress.png'
import Progress_cavity_screw_pump from '../PageComponents/Home/Progress_cavity_screw_pump'

const Home = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Homebaner />
      <HomeAboutus />
      <OurProducts />
      <Producttab />
      <Shopnow />
      <Testomonial />
      <Requestcallback />
      <Progress_cavity_screw_pump/>
      {/* <div style={{ backgroundColor: '#efefef' }}>
        <Container>
          <Image src={progress_img}  fluid  className='mt-5 mb-5'/>
        </Container>
      </div> */}

    </>
  )
}

export default Home