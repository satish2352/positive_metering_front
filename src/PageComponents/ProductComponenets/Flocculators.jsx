import React from 'react'
import Image from 'react-bootstrap/Image';
import flocculators from '../../assets/img/productimgs/FLOCCULATORS.png'

function Flocculators() {
  const application_list = [
    { title: 'Configurations -' },
    { title: 'Gate type paddle impeller.' },
    { title: 'Bearings – Taper Roller Bearings.' },
    { title: 'Shaft Design - flanged or coupled.' },
    { title: 'Right Angle as well as parallel shafts are possible.' },
    { title: 'Seals (Optional) - Stuffing box with teflon packing.' },
  ];
  return (
    <>
    <Image src={flocculators} rounded fluid className='rounded mx-auto d-block' style={{ height: '23rem' }} />
      <h1 className='p-2'>Application</h1>
      <ul>
        {
          application_list.map((a) => (
            <>
              <li style={{ fontSize: '17px', fontFamily:'Poppins' }}><p>{a.title}</p></li>
            </>
          ))
        }
      </ul>
    </>
  )
}

export default Flocculators
