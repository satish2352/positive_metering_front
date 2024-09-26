import React, { useState, useEffect } from 'react';

const ResponsiveImage = ({ mobileSrc, desktopSrc }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        <img src={mobileSrc} alt="Mobile View"  title='Mobile View' className=' img-fluid' width={'100%'}/>
      ) : (
        <img src={desktopSrc} alt="Desktop View" title='Desktop View' width={'100%'} className=' img-fluid'/>
      )}
    </div>
  );
};

export default ResponsiveImage;