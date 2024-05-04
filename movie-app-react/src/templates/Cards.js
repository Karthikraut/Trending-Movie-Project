import React from 'react'
import { Link } from 'react-router-dom';
import noImg from "../images/OIP.jpg";
const Cards = ({data,title}) => {
    console.log(" Data:- ",data);
    console.log(" Title:- ", title);
  return (
    <div className='p-6 h-full w-full flex flex-wrap'>
  {data.map((d, i) => (
    <Link key={i} className='relative w-56 p-2 m-6'>
      <img 
        className='shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] object-cover' 
        src={(d.poster_path || d.profile_path) ? 
          (`https://image.tmdb.org/t/p/original/${d.poster_path || d.profile_path}`)
          : noImg}
        alt={d.original_title || d.original_name}
      />
      <h1 className='font-semibold text-2xl p-2 text-white'>
        {d.original_title || d.original_name}
      </h1>
      {d.vote_average &&  <h1 className='bg-yellow-500 rounded-full h-10 w-10 flex justify-center items-center absolute bottom-28 -right-2'>
        {(d.vote_average * 10).toFixed()}<sup>%</sup>
      </h1>}
    </Link>
  ))}
</div>
  )
}

export default Cards