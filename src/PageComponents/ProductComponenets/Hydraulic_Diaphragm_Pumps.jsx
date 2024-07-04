import React from 'react'
import Image from 'react-bootstrap/Image';
import Hydraulic_pumps from '../../assets/img/productimgs/HYDRAULIC.png'
function Hydraulic_Diaphragm_Pumps() {
  const application_list = [
    { title: 'Performance conforms to API 675.' },
    { title: 'Glandless design and entirely Leak Proof operation.' },
    { title: 'Integrated Pressure Relief Valve.' },
    { title: 'Diaphragm is always balanced between the pressure exerted by the hydraulic oil and liquid to be dosed. Longer Diaphragm Life.' },
    { title: 'Automatic air bleeding from the hydraulic oil ensures better metering accuracy.' },
    { title: 'Manual stroke adjustment by eccentric.' }

  ];
  return (
    <>
      <Image src={Hydraulic_pumps} rounded fluid className='rounded mx-auto d-block' style={{height:'22rem'}} />
      <h1 className='p-2'>Application</h1>
      <ul>
        {
          application_list.map((a) => (
            <>
              <li style={{ fontSize: '17px' , fontFamily : 'Poppins' }}><p>{a.title}</p></li>
            </>
          ))
        }
      </ul>
    </>
  )
}

export default Hydraulic_Diaphragm_Pumps
