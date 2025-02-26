import Ouroffices from '../PageComponents/Contactus/Ouroffices'
import ConatactCard from '../PageComponents/Contactus/ConatactCard'
import Shopnow from '../PageComponents/Home/Shopnow'
import UploadCV from '../PageComponents/Contactus/UploadCV'
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ResponsiveIframe from './ResponsiveIframe';
const Contactus = () => {
  document.title = "Contactus | Positive Metering Pumps I Private Limited,Nashik - Manufacturer of Dosing System and Agitators"

  const location = useLocation();
  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      // Use a timeout to ensure the page is fully rendered before scrolling
      setTimeout(() => {
        window.scrollTo({
          top: location.state.scrollTo,
          behavior: 'smooth'
        });
      }, 100); // Adjust this timeout as needed
    }
  }, [location.state]);
  return (
    <>
      <ConatactCard />
      <Shopnow />
      <ResponsiveIframe/>
      <Ouroffices />
      <UploadCV />

    </>
  )
}

export default Contactus