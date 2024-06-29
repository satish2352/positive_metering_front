import React from 'react'
import Image from 'react-bootstrap/Image';
import Sanwich_Diaphragm from '../../assets/img/productimgs/Mechanical_Diaphragm.png'

function Mechanical_Diaphragm() {
  const application_list = [
    { title: 'Glandless design and entirely Leak Proof operation.' },
    { title: 'Manual stroke adjustment for flow variation.' },
    { title: 'Splash type lubrication in gear box.' },
    { title: 'Water, Waste Water, Sewage Treatment' },
    { title: 'Negative suction upto1.5Mtrs. maximum.' },
    { title: 'Food and Beverages' }

  ];
  return (
    <>
      <Image src={Sanwich_Diaphragm} rounded fluid className='rounded mx-auto d-block' style={{height:'23rem'}}/>
      <h1 className='p-2'>Application</h1>
      <ul>
        {
          application_list.map((a) => (
            <>
              <li style={{ fontSize: '17px' }}><p>{a.title}</p></li>
            </>
          ))
        }
      </ul>
    </>
  )
}

export default Mechanical_Diaphragm
