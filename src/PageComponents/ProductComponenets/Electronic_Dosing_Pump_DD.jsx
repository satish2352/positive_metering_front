import React from 'react'
import Image from 'react-bootstrap/Image';
import Electronic_Dosing_DD from '../../assets/img/productimgs/ELECTRONIC DOSING PUMPS DD .png'
function Electronic_Dosing_Pump_DD() {
  const application_list = [
    { title: 'Electronic Dosing Pump.' },
    { title: 'Electronically operated mechanically actuated Diaphragm.' },
    { title: 'Adjustable injection frequency (15 to 100 SPM ) & Stroke length Compact size, light weight, more robust structure.' },
    { title: 'Steady state accuracy +/- 5% Repeatability +/- 5%.' },
    { title: 'Unique double ball check. NRVs for better dosing accuracy.' },
    { title: 'Solenoid drive with minimum moving parts and 1 MWC max suction lift.' }

  ];
  return (
    <>
      <Image src={Electronic_Dosing_DD} rounded fluid className='rounded mx-auto d-block' style={{ height: '23rem' }} />
      <h1 className='p-2'>Application</h1>
      <ul>
        {
          application_list.map((a) => (
            <>
              <li style={{ fontSize: '17px', fontFamily : 'Poppins' }}><p>{a.title}</p></li>
            </>
          ))
        }
      </ul>
    </>
  )
}

export default Electronic_Dosing_Pump_DD
