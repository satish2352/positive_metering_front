import React from 'react'
import Homebaner from '../PageComponents/Home/Homebaner'
import HomeAboutus from '../PageComponents/Home/HomeAboutus'
import OurProducts from '../PageComponents/Home/OurProducts'
import Producttab from '../PageComponents/Home/Producttab'
import Shopnow from '../PageComponents/Home/Shopnow'
import Progresspump from '../PageComponents/Home/Progresspump'
import Testomonial from '../PageComponents/Home/Testomonial'
import Requestcallback from '../PageComponents/Home/Requestcallback'

const Home = () => {
  return (
    <>
      <Homebaner/>
      <HomeAboutus/>
      <OurProducts/>
      <Producttab/>
      <Shopnow/>
      <Testomonial/>
      <Requestcallback/>
    </>
  )
}

export default Home