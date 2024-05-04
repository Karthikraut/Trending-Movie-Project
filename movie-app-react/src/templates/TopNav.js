import axios from '../utils/axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {  MOVIE_SEARCH_API, OPTIONS} from '../utils/constants';
import noimage from "../images/OIP.jpg";

const TopNav = () => {
    const [query,setQuery] = useState("");
    const [searches, setSearches] = useState([]);

    const GetSearches =async ()=>{
        try{
            const data = await fetch(`https://api.themoviedb.org/3/search/multi?query=${query}`, OPTIONS)
            const JsonData = await data.json();
            
            setSearches(JsonData.results);
           
        }
        catch(error){
            console.log("Error: ", error )
        }
    }

    useEffect(()=>{
        GetSearches();
    },[query])
  return (
    <div className='w-full flex justify-start ml-56 items-center h-[10vh] relative z-50'>
        <i className="text-3xl text-zinc-400 ri-search-line"></i>
        <input 
            onChange={(e)=> setQuery(e.target.value)}
            value={query} 
            type='text' 
            className='w-[50%] mx-10 p-5 text-xl outline-none border-none bg-transparent text-zinc-200' 
            placeholder='Search Anything'
        />

        {query.length >0 &&
         <i onClick={()=> setQuery("")} 
         className='ri-close-fill text-zinc-400 text-3xl'
         ></i>}

        <div className='bg-zinc-200 w-[50%] max-h-[50vh] absolute top-[80%] overflow-auto left-[5%]'>
           {searches.map( (s,i)=>
             (<Link to={`/${s.media_type}/details/${s.id}`} className='text-zinc-600 font-semibold hover:text-black hover:bg-zinc-600 duration-300 w-full flex justify-start items-center border-b-2 border-zinc-100 p-10' >
             <img className="w-[10vh] h-[10vh] object-cover rounded mr-5" 
                src= {s.backdrop_path || 
                      s.profile_path ? 
                        `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.poster_path || s.profile_path}`
                        : noimage
                    }   
               />
             <span>{s.original_title || s.original_name || s.name}</span>
            </Link>)
           )}
            
        </div>

    </div>
  )
}

export default TopNav;