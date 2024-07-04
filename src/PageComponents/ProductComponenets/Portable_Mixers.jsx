import React from 'react'
import Image from 'react-bootstrap/Image';
import portable_Mixers from '../../assets/img/productimgs/PORTABLE MIXERS.png'

function Portable_Mixers() {
  const application_list = [
    { title: 'Wide range of sizes and type.' },
    { title: 'Highly efficient High/Low speed portable Mixers and High speed Dispersers & Emulsifiers.' },
    { title: 'Capacity ranging from 0.25 HP to 5.0 HP..' },
    { title: 'Mixer speed ranging as low as 2 RPM up to 1500 RPM.' },
    { title: 'Disperser/Emulsifier speed of 1500/3000 RPM.' },
    { title: 'Flange, Plate or clamp mounting for mixers and hanging type or Plate mounting for Emulsifier/Disperser.' },
    { title: 'Accurately profiled and balanced impellers to provide large pumping capacity with low power consumption.' },
    { title: 'Super polish finish for Pharmaceutical applications.' },
  ];
  return (
    <>
      <Image src={portable_Mixers} rounded fluid className='rounded mx-auto d-block' style={{ height: '23rem' }} />
      <h1 className='p-2'>Application</h1>
      <ul>
        {
          application_list.map((a) => (
            <>
              <li style={{ fontSize: '17px',fontFamily:'Poppins' }}><p>{a.title}</p></li>
            </>
          ))
        }
      </ul>
    </>
  )
}

export default Portable_Mixers
