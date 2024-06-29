import React from 'react'
import Image from 'react-bootstrap/Image';
import Sanwich_Diaphragm from '../../assets/img/productimgs/SANDWICH.png'

function Sanwich_Diaphragm_Pumps() {
  const application_list = [
    { title: 'Performance conforms to API 675.' },
    { title: 'Petrochemicals.' },
    { title: 'Power.'},
    { title: 'Water, Waste Water, Sewage Treatment.'},
    { title: 'Pharmaceuticals.' },
    { title: 'Paper and Textiles.'}

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

export default Sanwich_Diaphragm_Pumps
