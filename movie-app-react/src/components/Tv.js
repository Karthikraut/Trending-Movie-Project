import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TopNav from '../templates/TopNav';
import Dropdown from '../templates/Dropdown';
import {OPTIONS} from '../utils/constants';
import Cards from '../templates/Cards';
import Loader from './Loader';
import InfiniteScroll from 'react-infinite-scroll-component'
const Shows = () => {
  document.title = "FilmFusion | Tv"
  const navigate =useNavigate();
  const [category,setCategory] =useState("airing_today");
  const [show,setShow] =useState([]);
  const [page,setPage] =useState(1);
  const [hasMore,setHasmore] =useState(true)

  const getShow= async()=>{
    const data = await  fetch(`https://api.themoviedb.org/3/tv/${category}?page=${page}`,OPTIONS);
    const jsonData =await data.json();

    if(jsonData?.results?.length>0){
      setShow((prevState)=>([...prevState,...jsonData.results]));
      setPage(page+1);
    }
    else{
      setHasmore(false);
    }

  }

const refreshHandler= ()=>{
  if(show?.length ===0 ){
    getShow();
  }
  else{
    setPage(1);
    setShow([]);
    getShow();
  }
}
  useEffect(()=>{
    refreshHandler();
  },[category])

  return (
    show.length>0 ? (<div className="bg-[#1F1E24] w-92  overflow-x-hidden ">
        <div className='w-full h-16 flex items-center '>
            <h1 className=' text-2xl font-bold text-zinc-400 p-2 '>
            <i onClick={()=>navigate('/')} className="hover:text-[#6656CD] ri-arrow-left-line m-4"></i>TV
            </h1>
            <div className='flex items-center w-[90%]'>
              <TopNav/>
              <Dropdown title="Category" options={["top_rated","on_the_air","popular","airing_today"]} func={(e)=>setCategory(e.target.value)}/>
            </div>
        </div>
        {/* <div className='w-92'> */}
        <InfiniteScroll
            dataLength ={show.length}
            next={getShow}
            hasMore= {hasMore}
            loader={<h1>Loading....</h1>}
        >
          <Cards data={show} title="tv"/>
        </InfiniteScroll>
        {/* </div> */}
    </div>):( <Loader/>)
  )
}

export default Shows;