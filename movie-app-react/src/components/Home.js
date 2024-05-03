import React, { useEffect, useState } from 'react'
import SideNav from '../templates/SideNav'
import TopNav from '../templates/TopNav'
import Header from '../templates/Header'
import { OPTIONS } from '../utils/constants'
import HorizantalCards from '../templates/HorizantalCards'
import Dropdown from '../templates/Dropdown'
import Loader from './Loader'
const Home = () => {
    const [movieInfo, setMovieInfo] =useState();
    const [trending,setIsTrending] = useState();
    const [category,setCategory] =useState('all');

   const getMovieInfo= async ()=>{
        try{
          const data = await fetch('https://api.themoviedb.org/3/trending/all/day',OPTIONS);
          const jsonData  =await data.json();
         
          const randomData = jsonData.results[(Math.random() * jsonData.results.length).toFixed()];
          setMovieInfo(randomData);
        } catch(error){
          console.log(" Error: ",error);
        }
   }

   const getTrendingMovies= async ()=>{
    try{
      const data = await fetch(`https://api.themoviedb.org/3/trending/${category}/week`,OPTIONS);
      const jsonData  =await data.json();
     setIsTrending(jsonData.results);
   
    } catch(error){
      console.log(" Error: ",error);
    }
} 
   useEffect(()=>{
        !movieInfo && getMovieInfo();
        getTrendingMovies();
        console.log("CATEGORY",category)
   },[category]);


  return (
    (movieInfo && trending)? (<>
    <SideNav/>
    <div className='w-[80%] h-full overflow-x-hidden overflow-y-auto'>
        <TopNav/>
        <Header data={movieInfo} />
        <div className='flex p-5 justify-between w-full'>
          <h1 className='mb-2  text-left text-3xl font-semibold text-zinc-400'>Trending</h1>
          <div className=''>
              <Dropdown title="Filter" options={["tv","movie","all"]} func={(e)=> setCategory(e.target.value)} />
          </div>
        </div>
        <HorizantalCards data={trending}/>
    </div>
</>): <Loader/>
  )
}

export default Home