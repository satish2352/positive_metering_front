import React from 'react'
import Image from 'react-bootstrap/Image';
import screw_Pumps from '../../assets/img/productimgs/PROGRESSIVE CAVITY SCREW PUMP.png'

function Screw_Pumps() {
  const application_list = [
    { title: 'Temperature range :50 to 350 degree centigrade.' },
    { title: 'Maximum permissible solid content up to 50%.' },
    { title: 'Steady flow without pulsations, minimum turbulence.' },
    { title: 'Negative suction up to 6mwc , low NPSH.' },
    { title: 'Slurries , pastes upto 5,00,000 centipoise.' },
    { title: 'Flow rate maximum up to 50 cubic meter per hour.' }

  ];
  return (
    <>
      <Image src={screw_Pumps} rounded fluid className='rounded mx-auto d-block' style={{ height: '23rem' }} />
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

export default Screw_Pumps
