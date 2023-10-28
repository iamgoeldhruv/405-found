import React from 'react'

import './trade.css'
export default function Trade() {
  let address=localStorage.getItem("Address")
  if(address===null){
    return(
      <p>Please login first</p>
    )
  }
  return (
    <div className='trade-main' >
      <div className='box trade-1 '>
        <img src="" alt="image" />
        <button className='button' >Borrow from pool</button>
      </div>
      <div className='box trade-1'>
        <img src="" alt="image" />
        <button className='button' >Borrow from User</button>
      </div>
    </div>
  )
}

