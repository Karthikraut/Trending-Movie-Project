import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TopNav from '../templates/TopNav';
import Dropdown from '../templates/Dropdown';
import {OPTIONS} from '../utils/constants';
import Cards from '../templates/Cards';
import Loader from './Loader';
import InfiniteScroll from 'react-infinite-scroll-component'
const Trending = () => {
  const navigate =useNavigate();
  const [category,setCategory] =useState("all");
  const [duration,setDuration] = useState("week");
  const [trending,setTrending] =useState([]);
  const [page,setPage] =useState(1);
  const [hasMore,setHasmore] =useState(true)

  const getTrending= async()=>{
    const data = await  fetch(`https://api.themoviedb.org/3/trending/${category}/${duration}?page=${page}`,OPTIONS);
    const jsonData =await data.json();
    console.log(" JSON DATA:- ", jsonData);
    if(jsonData?.results?.length>0){
      setTrending((prevState)=>([...prevState,...jsonData.results]));
      setPage(page+1);
    }
    else{
      setHasmore(false);
    }

  }

const refreshHandler= ()=>{
  if(trending?.length ===0 ){
    getTrending();
  }
  else{
    setPage(1);
    setTrending([]);
    getTrending();
  }
}
  useEffect(()=>{
    refreshHandler();
  },[category,duration])

  return (
    trending.length>0 ? (<div className="bg-[#1F1E24] w-screen  overflow-x-hidden ">
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
        <InfiniteScroll
            dataLength ={trending.length}
            next={getTrending}
            hasMore= {hasMore}
            loader={<h1>Loading....</h1>}
        >
          <Cards data={trending}/>
        </InfiniteScroll>
    </div>):( <Loader/>)
  )
}

export default Trending