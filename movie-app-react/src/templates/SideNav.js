import React from 'react'
import {Link} from "react-router-dom"
const SideNav = () => {
  return (
    <div className='w-[20%] h-full  border-r-2 border-zinc-400 p-3'>
        <h1 className='text-white font-bold'>
        <i className="text-[#6556CD] ri-tv-fill text-2xl mr-2"></i>
            <span className='text-2xl'> FilmFusion</span>
        </h1>
        <nav className='flex flex-col text-zinc-400 text-md gap-3 text-lg'>
            <h1 className='text-white font-semibold mt-10 mb-5'>New Feed</h1>
            <Link to={"/trending"} className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
                <i className="ri-fire-fill"></i> Trending
            </Link>
            <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
            <i className="ri-bard-fill"></i> Popular
            </Link>
            <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
            <i className="ri-movie-2-fill"></i> Movies
            </Link>
            <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
            <i className="ri-tv-2-fill"></i> Tv Shows
            </Link>
            <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
            <i className="ri-team-fill"></i> People
            </Link>
        </nav>
        <hr className='border-none h-[1px] bg-zinc-400 '/>
        <nav className='flex flex-col text-zinc-400 text-md gap-3 text-lg'>
            <Link to={"/trending"} className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
                <i className="ri-information-fill"></i> About
            </Link>
            <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
            <i className="ri-phone-fill"></i> Contact
            </Link>
        </nav>
    </div>
  )
}

export default SideNav;