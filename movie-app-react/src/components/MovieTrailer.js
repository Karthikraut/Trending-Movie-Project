import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const MovieTrailer = () => {
    const {pathname} = useLocation();
    const category = pathname.includes("movie")? "movie": "tv";
    const key = useSelector((store)=> store[category].info.videos.key);
    const navigate = useNavigate();
  return (
    <div className="absolute top-0 left-0 bg-[rgba(0,0,0,.8)] h-screen flex items-center justify-center w-screen overflow-x-hidden">
        <ReactPlayer
         height={720}
         width={1250}
         url={`https://www.youtube.com/watch?v=${key}`} />
        <i onClick={()=>navigate(-1)} 
         className='ri-close-fill text-white hover:text-[#6556CD] text-5xl absolute top-8 right-16 cursor-pointer'
         ></i>
    </div>
  )
}

export default MovieTrailer