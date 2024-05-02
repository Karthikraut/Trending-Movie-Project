import React from 'react';
import {Link} from 'react-router-dom'
import Dropdown from './Dropdown';
const Header = (data ) => {
  const backgroundImageUrl = data.data?.backdrop_path || data.data?.profile_path;

  const title = data.data?.original_name || data.data?.original_title; 
  const description = data.data?.overview;
  return (
<div
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${backgroundImageUrl}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '60vh',
        width: '100%',
        // display: 'flex',
        // alignItems: 'end',
        // justifyContent: 'end',
        // justifyItems: 'end',
        color: 'white',
      }}
     
    >
      <div className='p-10 w-full h-[60vh] flex  flex-col items-start justify-end '>
        <h1 className='text-5xl font-bold ml-2'>{title}</h1>
        <h1 className='w-2/3 ml-2 my-4 text-left'>
          {description?.slice(0,300)} <Link className='text-blue-400'>...more</Link>
        </h1>
        <h1 className='text-md'>
        <i className="text-yellow-200 ri-megaphone-fill"></i> {data.data?.first_air_date || "No Information"}
        <i className="text-yellow-200 ri-album-fill ml-2"></i> {data.data?.media_type.toUpperCase()}
        </h1>
        <Link className='bg-[#6556CD] p-4 mt-3 rounded-md hover:bg-[#9086d0]'>
          Watch Trailer
        </Link>
      </div>
      
    </div>
  );
};

export default Header;
