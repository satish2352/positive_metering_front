import React from 'react'
import { Container } from 'react-bootstrap'
import '../../assets/CSS/productlist.css'
const Productlisting = () => {
    const list = [
        {title: "PLUNGER TYPE DOSING PUMPS"},
        {title: "PLUNGER TYPE DOSING PUMPS"},
        {title: "PLUNGER TYPE DOSING PUMPS"},
        {title: "PLUNGER TYPE DOSING PUMPS"},
        {title: "PLUNGER TYPE DOSING PUMPS"},
        {title: "PLUNGER TYPE DOSING PUMPS"},
        {title: "PLUNGER TYPE DOSING PUMPS"},
        {title: "PLUNGER TYPE DOSING PUMPS"},
        {title: "PLUNGER TYPE DOSING PUMPS"},
        {title: "PLUNGER TYPE DOSING PUMPS"},
        {title: "PLUNGER TYPE DOSING PUMPS"},
        {title: "PLUNGER TYPE DOSING PUMPS"},
        {title: "PLUNGER TYPE DOSING PUMPS"},
        {title: "PLUNGER TYPE DOSING PUMPS"},
     
    ]
    return (
        <>
            <Container className='produclistbox'>
                <div className='produclistfttop'>
                    <h5 className=' text-white text-center py-3'>PLUNGER TYPE DOSING PUMPS</h5>
                </div>
                <div className=' py-3'>
                    {
                        list.map((a)=>{
                            return(
                                <p className='produclistcontetst ps-3 mx-3 pb-2'>{a.title}</p>
                            )
                        })
                    }
                </div>
            </Container></>
    )
}

export default Productlisting