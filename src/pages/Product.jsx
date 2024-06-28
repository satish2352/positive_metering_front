import React from 'react'
import ProductList from '../PageComponents/ProductComponenets/ProductList'
import ProductTechnicaldata from '../PageComponents/ProductComponenets/ProductTechnicaldata'
const Product = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <ProductList />
      <ProductTechnicaldata/>  
    </>
  )
}

export default Product