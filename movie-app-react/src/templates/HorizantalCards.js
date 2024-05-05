import React from 'react'
import Dropdown from './Dropdown'
import { Link } from 'react-router-dom'
import noImg from '../images/OIP.jpg'
const HorizantalCards = ({data,title}) => {
 

  return (
    <div className=' flex overflow-y-hidden items-center justify-center'>
    {data.map((d,i)=>{
       return (
                <div key={i} className=' min-w-44 m-2 h-72 bg-zinc-900 flex justify-center overflow-x-auto'>
                  <Link to={`/${d.media_type|| title}/details/${d.id}`}>
                    
                        <img className='h-56 p-4 bg-center' src= {d.backdrop_path? `https://image.tmdb.org/t/p/original/${d.backdrop_path}`:noImg }/>
                        <h1 className='text-white font-bold text-center'>{d.original_title || d.original_name}</h1>
                        <p className='text-md text-zinc-500 text-center'>{d.overview.slice(0,150)} <span className='text-blue-500'>...more</span></p>
                  
                  </Link>
                </div>
            )
    })}
    </div>     
    )
}

export default HorizantalCards;

// ( 
//     <div className='w-[15%] h-full flex overflow-y-hidden bg-red-200'>
//         <div className='min-w-[15%] h-full bg-green-300'>
//             <h1 className='text-white font-bold'>d.original_title</h1>
//         </div>
//     </div>
//     )