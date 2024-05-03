import React from 'react'
import loader from '../images/loader.gif'
const Loader = () => {
  return (
    <div className='bg-[#1F1E24] h-screen flex w-screen overflow-x-hidden'>
        <img className='w-screen' src={loader} />
    </div>
  )
}

export default Loader