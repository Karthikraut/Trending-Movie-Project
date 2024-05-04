import React from 'react'
import notFound from '../images/404.jpg'
const NotFound = () => {
  return (
    <div className='bg-[#1F1E24] absolute top-0 left-0 h-screen flex items-center justify-center w-screen overflow-x-hidden'>
        <img className='w-screen h-screen' src={notFound} />
    </div>
  )
}

export default NotFound;