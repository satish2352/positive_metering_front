import React from 'react'
import Image from 'react-bootstrap/Image';
import agitators from '../../assets/img/productimgs/AGITATORS.png'

function Agitators() {
  const application_list = [
    { title: 'Suitable for small pilot projects and also for large production plants.' },
    { title: 'Best suited on Cylindrical and Rectangular tanks for liquid liquid and solid liquid mixing.' },
    { title: 'Available with Gear Box Or Belt drive.' },
    { title: 'Sealing : Based on the processing conditions, there are various sealing arrangements available such as Single Mechanical Seal, Double Mechanical Seal, Stuffing Box and Lip Seal.' },
    { title: 'Higher degree of mixing, more reliability, minimal operational cost.' }
  ];
  return (
    <>
      <Image src={agitators} rounded fluid className='rounded mx-auto d-block' style={{ height: '23rem' }} />
      <h1 className='p-2'>Application</h1>
      <ul>
        {
          application_list.map((a) => (
            <>
              <li style={{ fontSize: '17px', fontFamily:'Poppins'}}><p>{a.title}</p></li>
            </>
          ))
        }
      </ul>
    </>
  )
}

export default Agitators
