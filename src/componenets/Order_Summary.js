import React from 'react'
import { useNavigate } from "react-router-dom";

function Order_Summary() {
    const navigate=useNavigate();
  return (
    <>
    <div>Order Confirmed!!!</div>
    {/* pass the path where you want to navigate ,here I want to go back in history stack one step that's why -1 is been used*/}
    <button className='Back' onClick={()=>navigate(-1)}>Go Back</button>
    </>
  )
}

export default Order_Summary