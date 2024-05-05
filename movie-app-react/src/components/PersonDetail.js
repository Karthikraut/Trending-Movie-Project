import React, { useEffect, useState } from 'react'
import { asyncLoadPerson, removePerson } from '../store/actions/personActions'
import { useParams,Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import noImg from "../images/OIP.jpg"
import Loader from './Loader';
import HorizantalCards from '../templates/HorizantalCards';
import Dropdown from '../templates/Dropdown';

const PersonDetail = () => {
  const {id} = useParams();
  const dispatch =useDispatch();
  const[category,setCategory] = useState('movie');
  const info = useSelector((store)=>store.person.info);


  useEffect(()=>{
    dispatch(asyncLoadPerson(id));

    return ()=>{
      dispatch(removePerson());
    }
  },[])


  return (
    info? <div className='bg-[#1F1E24] h-screen  w-screen overflow-x-hidden'>
      {/* First Section: Back Arrow */}
       <nav className='w-full text-zinc-400 flex h-[10%] gap-7 p-10 text-xl  '>
            <Link to={'/'} className="hover:text-[#6556CD] ri-arrow-left-line text-2xl"></Link>
        </nav>

        {/* Second Section  */}
        <div className='px-16 py-10 ml-10 w-screen flex '>
          <div className='w-[30%]'>
          <img 
                  className='shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] object-cover h-[35vh] mb-2 w-44' 
                  src={(info?.details?.profile_path) ? 
                  (`https://image.tmdb.org/t/p/original/${ info?.details?.profile_path}`)
                  : noImg}

              />
            <hr className='border-none w-44 h-[1px]   bg-zinc-500'/>
            <div className='text-zinc-400 flex gap-5 my-2 text-2xl '>
              <a target='_blank' href={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`} >
                <i className="ri-earth-fill "></i>
              </a>
              <a target='_blank' href={`https://www.facebook.com/${info.externalId.facebook_id}`} >
                <i className="ri-facebook-circle-fill "></i>
              </a>
              <a target='_blank' href={`https://www.instagram.com/${info.externalId.instagram_id}`} >
              <i className="ri-instagram-fill"></i>
              </a>
              <a target='_blank' href={`https://www.twitter.com/${info.externalId.twitter_id}`} >
                <i className=" ri-twitter-x-fill"></i>
              </a>
            </div>
            
            <div className='w-44'>
              <h1 className='font-semibold text-lg text-zinc-400 mt-2'>Known for</h1>
              <h1 className=' text-md text-zinc-400 '>{info.details.known_for_department}</h1>

              <h1 className='font-semibold text-lg text-zinc-400 mt-2'>Birthday</h1>
              <h1 className=' text-md text-zinc-400 '>{info.details.birthday}</h1>

              <h1 className='font-semibold text-lg text-zinc-400 mt-2'>Deathday</h1>
              <h1 className=' text-md text-zinc-400 '>{info.details.deathday? info.details.deathday:"Still Alive" }</h1>

              <h1 className='font-semibold text-lg text-zinc-400 mt-2'>Gender</h1>
              <h1 className=' text-md text-zinc-400 '>{info.details.gender==1? "Female":"Male"}</h1>

              <h1 className='font-semibold text-lg text-zinc-400 mt-2'>Also Known as</h1>
              <h1 className=' text-md text-zinc-400 '>{info.details.also_known_as.join(", ")}</h1>
            </div>
          </div>
          {/* Right Part of Second Container */}
          <div className='w-[80%] h-full '>
              <h1 className='text-zinc-300 font-bold text-6xl w-auto'>{info.details.name}</h1>
              <h1 className='text-zinc-400 font-semibold text-3xl mt-5'>Overview</h1>
              <p className='text-zinc-500 text-xl'>{info.details.biography}</p>
             

              <h1 className='text-zinc-400 font-semibold text-3xl mt-5'>Work</h1>
              <HorizantalCards data={info.combinedCredits.cast} title="Person"/>

              <div className='w-full flex justify-between mt-5'>
                    <h1 className='mt-5 text-3xl text-zinc-400 font-semibold'>
                      Acting
                    </h1>
                    
                    <Dropdown 
                        title="Category"
                        options= {["tv","movie"]}
                        func= {(e)=> setCategory(e.target.value)}
                    />

              </div>
              
              <div className='list-disc text-zinc-400 w-full h-[50vh] mt-5 overflow-x-hidden overflow-y-auto
                shadow-xl shadow-[rgba(255,255,255,.9))] border-2 border-zinc-700 p-5 '>
                 {info[category+ "Credits"].cast.map((c,i)=>
                 
                  <li className='hover:text-white duration-300 cursor-pointer m-4'>
                    <Link to={`/${category}/details/${id}`}>
                      <span>{c.original_name || c.name || c.original_title}</span>
                      <span className='block ml-5'>{`Character name: ${c.character}`}</span>
                    </Link>
                  </li>)}

              </div>
          </div>
        </div>
    </div> :<Loader/>
  )
}
{/* <a target='_blank' href={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`} >
              <i className="ri-earth-fill"></i>
            </a>
            <a target='_blank' href={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`} >
              <i className="ri-facebook-circle-fill"></i>
            </a>
            <a target='_blank' href={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`} >
              <i className="ri-instagram-fill"></i>
            </a> */}

export default PersonDetail