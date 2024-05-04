import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TopNav from '../templates/TopNav';
import Dropdown from '../templates/Dropdown';
import {OPTIONS} from '../utils/constants';
import Cards from '../templates/Cards';
import Loader from './Loader';
import InfiniteScroll from 'react-infinite-scroll-component'
const People = () => {
  const navigate =useNavigate();
  const [category,setCategory] =useState("popular");
  const [people,setPeople] =useState([]);
  const [page,setPage] =useState(1);
  const [hasMore,setHasmore] =useState(true)

  const getPeople= async()=>{
    const data = await  fetch(`https://api.themoviedb.org/3/person/${category}?page=${page}`,OPTIONS);
    const jsonData =await data.json();

    if(jsonData?.results?.length>0){
      setPeople((prevState)=>([...prevState,...jsonData.results]));
      setPage(page+1);
    }
    else{
      setHasmore(false);
    }

  }

const refreshHandler= ()=>{
  if(people?.length ===0 ){
    getPeople();
  }
  else{
    setPage(1);
    setPeople([]);
    getPeople();
  }
}
  useEffect(()=>{
    refreshHandler();
  },[category])

  return (
    people.length>0 ? (<div className="bg-[#1F1E24] w-92  overflow-x-hidden ">
        <div className='w-full h-16 flex items-center '>
            <h1 className=' text-2xl font-bold text-zinc-400 p-2'>
            <i onClick={()=>navigate('/')} className="hover:text-[#6656CD] ri-arrow-left-line"></i>  People
            </h1>
            <div className='flex items-center w-[90%]'>
              <TopNav/>
            </div>
        </div>
        {/* <div className='w-92'> */}
        <InfiniteScroll
            dataLength ={people.length}
            next={getPeople}
            hasMore= {hasMore}
            loader={<h1>Loading....</h1>}
        >
          <Cards data={people} title="people"/>
        </InfiniteScroll>
        {/* </div> */}
    </div>):( <Loader/>)
  )
}

export default People;