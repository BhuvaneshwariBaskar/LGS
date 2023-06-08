import React from 'react'
import { useState } from 'react'
import {createFlight} from '../../axios/admin.axios'
const CreateFlight = () => {
    const [name, setName] = useState('');
    const [from, setFrom] = useState('');
    const [destination, setDestination] = useState('');
    const [travel_time, setTravel_time] = useState();


  
    const handleSubmit = (e) => {
            e.preventDefault();
            createFlight(name,from,destination,travel_time).then((res)=>{
                console.log(res);
            })
    }
  return (
    <>
    
   
   
       
        <form className='mt-[5rem]  w-[55%] mx-auto' onSubmit={handleSubmit}>
            <h1 className='text-2xl font-bold'>Create a Flight</h1>
            <div className='flex flex-col mt-6'>
                <label className='font-semibold'>Name</label>
                <input placeholder='Enter the flight name...' value={name} className='bg-[#f5f5f5] px-[1rem] py-[.5rem] rounded-md mt-2' type="text" onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className='flex flex-col  mt-6'>
                <label className='font-semibold'>From</label>
                <input placeholder='Enter the starting location...' value={from} className='bg-[#f5f5f5] px-[1rem] py-[.5rem] rounded-md mt-2'  type="text" onChange={(e)=>setFrom(e.target.value)}/>
            </div>
            <div className='flex flex-col  mt-6'>
                <label className='font-semibold'>Destination</label>
                <input placeholder='Enter the destination location...' value={destination} className='bg-[#f5f5f5] px-[1rem] py-[.5rem] rounded-md mt-2' type="text" onChange={(e)=>setDestination(e.target.value)}/>
            </div>
            <div className='flex flex-col  mt-6'>
                <label className='font-semibold'>Travel time</label>
                <input className='bg-[#f5f5f5] px-[1rem] py-[.5rem] rounded-md mt-2' type="time" value={travel_time} onChange={(e)=>setTravel_time(e.target.value)}/>
            </div>
            <input type="submit" value="Create" />
        </form>
      
    </>
  )
}

export default CreateFlight
