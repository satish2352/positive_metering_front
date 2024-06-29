import React from 'react'
import Image from 'react-bootstrap/Image';
import side_Entry_Mixers from '../../assets/img/productimgs/Side Entry Mixers.png'

function Side_Entry_Mixers() {
  const application_list = [
    { title: 'Positives Haevy Duty High Efficiency range of side entry mixers caters the needs of blending, maintain.' },
    { title: 'Technically advanced design of impeller suitable for higher speeds with lower power consumption.' },
    { title: 'Sealing : Based on the processing conditions, there are various sealing arrangements available such as.' },
  ];
  return (
    <>
      <Image src={side_Entry_Mixers} rounded fluid className='rounded mx-auto d-block' style={{ height: '23rem' }} />
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

export default Side_Entry_Mixers
