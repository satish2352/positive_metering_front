import React from 'react'
import Image from 'react-bootstrap/Image';
import Chemical from '../../assets/img/productimgs/CHEMICAL INJECTION SKID.png'

function Chemical_Injection_Skid() {
  const application_list = [
    { title: 'One Preparation and One Dosing Tank.' },
    { title: 'Agitators.' },
    { title: 'Single Dosing Pump or two (1W + 1S) Dosing Pumps.' },
    { title: 'Instrumentation like Pressure Transmitter and Level Transmitter.' }
  ];
  return (
    <>
      <Image src={Chemical} rounded fluid className='rounded mx-auto d-block' style={{ height: '23rem' }} />
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

export default Chemical_Injection_Skid
