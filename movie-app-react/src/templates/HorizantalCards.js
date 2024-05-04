import React from 'react'
import Dropdown from './Dropdown'
import { Link } from 'react-router-dom'

const HorizantalCards = ({data,title}) => {
 
    
  return (
    <div className=' flex overflow-y-hidden'>
    {data.map((d,i)=>{
       return (
                <div key={i} className='min-w-[15%] m-2 h-full bg-zinc-900'>
                  <Link to={`/${d.media_type|| title}/details/${d.id}`}>
                    
                        <img className='h-56 p-4' src= {`https://image.tmdb.org/t/p/original/${d.poster_path}`}/>
                        <h1 className='text-white font-bold'>{d.original_title || d.original_name}</h1>
                  
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