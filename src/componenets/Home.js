import React from "react";
import { useNavigate } from "react-router-dom";
//useNavigate hook simply let us navigate between diff pages in browser history stack
function Home() {
    const navigate=useNavigate();
  return (
    <>
      <div>I am in Home</div>
      <button onClick={()=>navigate('order_summary')}>{'Order Now'}</button>
    </>
  );
}

export default Home;
