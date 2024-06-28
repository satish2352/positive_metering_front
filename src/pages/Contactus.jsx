import React from 'react'
import Ouroffices from '../PageComponents/Contactus/Ouroffices'
import ConatactCard from '../PageComponents/Contactus/ConatactCard'
import Shopnow from '../PageComponents/Home/Shopnow'
import UploadCV from '../PageComponents/Contactus/UploadCV'

const Contactus = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <ConatactCard />
      <Shopnow />
      <Ouroffices />
      <UploadCV/>

    </>
  )
}

export default Contactus