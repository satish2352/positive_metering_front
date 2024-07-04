import React from 'react'
import Image from 'react-bootstrap/Image';
import impellers from '../../assets/img/productimgs/IMPELLERS.png'

function Impellers() {
  const application_list = [
    { title: 'High Efficiency Hydrofoil Type (Narrow Blade) - The highest efficiency turbulent flow impeller is ideal for blending, heat transfer, and solids suspension applications. Developed to maximize strength at lower weights as compared to other axial flow impellers, allowing for longer shafts without internal support, smaller shaft diameters, and smaller seal sizes if applicable.' },
    // { title: 'Gate type paddle impeller.' },
    // { title: 'Bearings – Taper Roller Bearings.' },
    // { title: 'Shaft Design - flanged or coupled.' },
    // { title: 'Right Angle as well as parallel shafts are possible.' },
    // { title: 'Seals (Optional) - Stuffing box with teflon packing.' },
  ];
  return (
    <>
      <Image src={impellers} rounded fluid className='rounded mx-auto d-block' style={{ height: '23rem' }} />
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

export default Impellers
