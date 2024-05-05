import React, { useEffect } from 'react'
import { asyncLoadPerson } from '../store/actions/personActions'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

const PersonDetail = () => {
  const {id} = useParams();
  const dispatch =useDispatch();
  console.log("ID:- ",id);
  const info = useSelector((store)=>store.person.info);
  console.log("Info:- ",info)

  useEffect(()=>{
    dispatch(asyncLoadPerson(id));
  },[id])
  return (
    <div className='bg-[#1F1E24] h-screen flex w-screen overflow-x-hidden'>PersonDetail</div>
  )
}

export default PersonDetail