import React from 'react'
import { Link } from 'react-router-dom';
const Cards = ({data}) => {
    console.log(" DATA:- ",data);

  return (
    <div className='p-6 h-full w-full flex flex-wrap m-4'>
        {data.map((d,i)=>
         (<Link key={i} className='  w-56 p-2 m-6'>
            <img className='shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] object-cover' src={`https://image.tmdb.org/t/p/original/${d.poster_path}`}/>
            <h1 className='font-semibold text-2xl p-2 text-white'>{d.original_title || d.original_name}</h1>
         </Link>)
        )}
    </div>
  )
}

export default Cards