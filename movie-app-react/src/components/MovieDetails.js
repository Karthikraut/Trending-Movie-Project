import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { asyncLoadMovie, removeMovie } from '../store/actions/movieActions';
import noImg from "../images/OIP.jpg";
import Loader from './Loader';
import HorizantalCards from '../templates/HorizantalCards';

const MovieDetails = () => {
    const {id} =useParams();
    const dispatch =useDispatch();
    const navigate =useNavigate();
    const info = useSelector((store)=>store.movie.info)
    const backgroundImageUrl = info?.details?.backdrop_path;
    const path =useLocation();

    useEffect(()=>{
        dispatch(asyncLoadMovie(id))
        return()=>  {
            dispatch(removeMovie())
        };
    },[id]);
    
  return (
    info?( 
    
   
    <div  style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${backgroundImageUrl}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
        // display: 'flex',
        // alignItems: 'end',
        // justifyContent: 'end',
        // justifyItems: 'end',
        color: 'white',
      }} className='bg-[#1F1E24] h-screen p-10 w-screen overflow-x-hidden'>
             {/*  Part 1: NavBar */}
        
        <nav className='w-full text-white flex h-[10%] gap-7 p-4 text-xl  '>
            <Link to={'/'} className="hover:text-[#6556CD] ri-arrow-left-line"></Link>
            <a target='_blank' href={`${info.details.homepage}`} >
                <i class="ri-send-plane-fill"></i>
            </a>
            <a target='_blank' href={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`} >
                <i class="ri-earth-fill"></i>
            </a>
            <a target='_blank' href={`https://www.imdb.com/title/${info.externalId.imdb_id}/`} >
                <span>IMDB</span>
            </a>

        </nav>

      {/* Part 2: Poster and Details */}
        <div className='p-4  flex h-[60%]'>
            <img 
                className='shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] object-cover h-[50vh] ' 
                src={(info.details.poster_path || info.details.profile_path) ? 
                (`https://image.tmdb.org/t/p/original/${info.details.poster_path || info.details.profile_path}`)
                : noImg}
                alt={info.details.original_title || info.details.original_name}
            />
            
            <div className='content ml-16'>
                    <h1 className='text-4xl font-black '>
                        {info.details.name || info.details.original_name || info.details.original_title}
                        <small className='text-2xl ml-3 font-bold text-zinc-300'>
                            ({info.details.release_date.split("-")[0]})
                        </small>
                    </h1>
                    <div className='flex gap-x-4 items-center mt-1 text-zinc-100'>
                        {info.details.vote_average &&  
                        <span className='bg-yellow-500 rounded-full h-12 w-12 flex justify-center items-center text-white'>
                                {(info.details.vote_average * 10).toFixed()}<sup>%</sup>
                        </span>}
                        <h1 className='text-2xl font-semibold w-16'> User Score </h1>
                        <h1>{info.details.release_date}</h1>
                        <h1>{info.details.genres.map((g)=> g.name).join(", ")}</h1>
                        <h1>{info.details.runtime} min</h1>
                    </div>

                    <h1 className='my-5 font-bold italic text-zinc-300 text-xl'>
                        {info.details.tagline}
                    </h1>

                    <h1 className='font-semibold text-2xl my-4'>Overview</h1>
                    <p>{info.details.overview}</p>

                    <h1 className='font-semibold text-2xl my-4'>Translated in Languages</h1>
                    <p className='mb-6'>{info.translation.translations.map((e)=> e.name).join(", ")}</p>

                    <Link to={`${path.pathname}/trailer`} className='bg-[#6556CD] h-4 w-4 p-4 rounded-lg ml-10' >
                        <i className="text-xl ri-play-fill"></i> Play Trailer
                    </Link>
            </div>
        </div>
        
        {/* Part 3: Available on Platforms */}

        <div className='w-full flex flex-col gap-7 p-5 '>
                {(info.watchProvider?.results?.IN?.flatrate && 
                    <div className='flex h-10 items-center gap-4'>
                        <h1 className='text-md'>Available to Buy</h1>
                        {info.watchProvider.results.IN.flatrate.map(
                            (e)=>(        
                                <img className='h-10 w-10' src={`https://image.tmdb.org/t/p/original/${e.logo_path}`}/>  
                            )
                            
                        )}
                    </div>)}
                    
                    {(info.watchProvider?.results?.IN?.buy && 
                    <div className='flex h-10 items-center gap-4'>
                        <h1 className='text-md'>Available to Buy</h1>
                        {info.watchProvider.results.IN.buy.map(
                            (e)=>(        
                                <img className='h-10 w-10' src={`https://image.tmdb.org/t/p/original/${e.logo_path}`}/>  
                            )
                            
                        )}
                    </div>)}

                    {(info?.watchProvider?.results?.IN?.rent && 
                    <div className='flex h-10 items-center gap-4'>
                        <h1 className='text-md'>Available to Buy</h1>
                        {info.watchProvider.results.IN.rent.map(
                            (e)=>(        
                                <img className='h-10 w-10' src={`https://image.tmdb.org/t/p/original/${e.logo_path}`}/>  
                            )
                            
                        )}
                    </div>)}
        </div>     

       
        {/* Part 4: Recommedations */}
        <div className='mt-10'>
        <hr className='h-[2px] border-none bg-zinc-500'/>
            <h1 className='text-3xl font-bold my-2'>Recommedations & Similar Stuff</h1>
            <HorizantalCards data={info.recommendations.length >0 ? info.recommendations.results:info.similar.results} title='movie'/>
        </div>

        {/* Trailer Outlet */}
        <Outlet/>
    </div>) : <Loader/>
  )
}

export default MovieDetails;