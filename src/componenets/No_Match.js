import React from 'react'
import doggo from './doggo.png'
//No Match Page
function No_Match() {
  return (
    <>
    <h2>SORRY</h2>
    <div>We couldn't find that page</div>
    <div>Try something new in our {<a href='/'>Homepage</a>} </div>
    <img src={doggo} alt='Famous doggo'/>
    </>
  )
}

export default No_Match