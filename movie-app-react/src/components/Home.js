import React, { useEffect, useState } from 'react'
import SideNav from '../templates/SideNav'
import TopNav from '../templates/TopNav'
import Header from '../templates/Header'
import { OPTIONS } from '../utils/constants'

const Home = () => {
    const [movieInfo, setMovieInfo] =useState();
   const getMovieInfo= async ()=>{
        try{
          const data = await fetch('https://api.themoviedb.org/3/trending/all/day',OPTIONS);
          const jsonData  =await data.json();
          console.log(" JSON DATA: ", jsonData.results);
          const randomData = jsonData.results[(Math.random() * jsonData.results.length).toFixed()];
          setMovieInfo(randomData);
        } catch(error){
          console.log(" Error: ",error);
        }
   }
   useEffect(()=>{
        !movieInfo && getMovieInfo();
   },[]);


  return (
    <>
        <SideNav/>
        <div className='w-[80%] h-full'>
            <TopNav/>
            <Header data={movieInfo} />
        </div>
    </>
  )
}

export default Home