import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TopNav from '../templates/TopNav';
import Dropdown from '../templates/Dropdown';
import {OPTIONS} from '../utils/constants';
import Cards from '../templates/Cards';

const Trending = () => {
  const navigate =useNavigate();
  const [category,setCategory] =useState("all");
  const [duration,setDuration] = useState("week");
  const [trending,setTrending] =useState([]);
  const getTrending= async()=>{
    const data = await  fetch(`https://api.themoviedb.org/3/trending/${category}/${duration}`,OPTIONS);
    const jsonData =await data.json();
    console.log(" JSON DATA:- ", jsonData.results);
    setTrending(jsonData.results);
  }

  useEffect(()=>{
    getTrending();
  },[category,duration])
  return (
    <div className="bg-[#1F1E24]  p-6 h-screen  w-screen overflow-x-hidden">
        <div className='w-full h-16 flex items-center '>
            <h1 className=' text-2xl font-bold text-zinc-400'>
            <i onClick={()=>navigate('/')} className="hover:text-[#6656CD] ri-arrow-left-line"></i>  Trending
            </h1>
            <div className='flex items-center w-[90%]'>
              <TopNav/>
              <Dropdown title="Category" options={["movie","tv","all"]} func={(e)=>setCategory(e.target.value)}/>
              <div className='w-[8%]'></div>
              <Dropdown title="Duration" options={["week","day"]} func={(e)=> setDuration(e.target.value)}/>
            </div>
        </div>
        {/* <div className='text-white bg-red-200 h-full w-full'> */}
          <Cards data={trending}/>
        {/* </div> */}
    </div>
  )
}

export default Trending