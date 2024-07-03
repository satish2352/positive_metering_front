import React from 'react'
import ProductList from '../PageComponents/ProductComponenets/ProductList'
import ProductTechnicaldata from '../PageComponents/ProductComponenets/ProductTechnicaldata'
import ResponsiveImage from './ResponsiveImage';
import imgmobile from '../assets/img/productimgs/productmobileview.png'
import imgtop from '../assets/img/services/diskimg.png'
const Product = () => {
  window.scrollTo(0, 0);
  return (
    <>
    <ResponsiveImage mobileSrc={imgmobile} desktopSrc={imgtop} />
      <ProductList />
      <ProductTechnicaldata/>  
    </>
  )
}

export default Product