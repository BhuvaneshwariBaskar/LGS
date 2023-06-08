import React from "react";
import { useState,useEffect } from "react";
import { createFlight, createTravel, getFlights } from "../../axios/admin.axios";
const CreateTravel = () => {
  
  const [from, setFrom] = useState("");
  const [destination, setDestination] = useState("");
  const [travel_time, setTravel_time] = useState();
  const [flights, setFlights] = useState();
  const [selectedFlight, setSelectedFlight] = useState();
  const [date, setDate] = useState();
  const [seats, setSeats] = useState(0);
  const [cost, setCost] = useState(0);
  useEffect(() => {
    getFlights().then((res) => {
      setFlights(res.data);
    });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();

    createTravel(selectedFlight, from, destination,date, travel_time,seats,cost).then((res) => {
      console.log(res);
    });
  };
  return (
    <>
      <form className="mt-[5rem]  w-[55%] mx-auto" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold">Create a Flight</h1>
        <div className="flex flex-col mt-6">
          <label className="font-semibold">Name</label>
          <select
            onChange={(e) => {
              let flight = flights.filter((data)=> {return data.flight_name == e.target.value})
              setFrom(flight[0].from_point)
              setSelectedFlight(flight[0].flight_name)
              setDestination(flight[0].destination_point)
            

            }}
            name="name"
            id="">
                <option value={""}>select a option</option>
            {flights &&
              flights.map((data) => {
                return (
                  <option value={data.flight_name}>{data.flight_name}</option>
                );
              })}
          </select>
        </div>
        <div className='flex flex-col  mt-6'>
                <label className='font-semibold'>From</label>
                <input disabled placeholder='Enter the starting location...' value={from} className='bg-[#f5f5f5] px-[1rem] py-[.5rem] rounded-md mt-2'  type="text" onChange={(e)=>setFrom(e.target.value)}/>
            </div>
            <div className='flex flex-col  mt-6'>
                <label className='font-semibold'>Destination</label>
                <input disabled placeholder='Enter the destination location...' value={destination} className='bg-[#f5f5f5] px-[1rem] py-[.5rem] rounded-md mt-2' type="text" onChange={(e)=>setDestination(e.target.value)}/>
            </div>
            <div className="flex flex-col  mt-6">
          <label className="font-semibold">Date</label>
          <input
            className="bg-[#f5f5f5] px-[1rem] py-[.5rem] rounded-md mt-2"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="flex flex-col  mt-6">
          <label className="font-semibold">Time</label>
          <input
            className="bg-[#f5f5f5] px-[1rem] py-[.5rem] rounded-md mt-2"
            type="time"
            value={travel_time}
            onChange={(e) => setTravel_time(e.target.value)}
          />
        </div>
        <div className='flex flex-col mt-6'>
                <label className='font-semibold'>Seats_available</label>
                <input placeholder='Enter the flight seats...' value={seats} className='bg-[#f5f5f5] px-[1rem] py-[.5rem] rounded-md mt-2' type="number" onChange={(e)=>setSeats(e.target.value)} />
            </div>
            <div className='flex flex-col mt-6'>
                <label className='font-semibold'>Cost of travel</label>
                <input placeholder='Enter the flight cost...' value={cost} className='bg-[#f5f5f5] px-[1rem] py-[.5rem] rounded-md mt-2' type="number" onChange={(e)=>setCost(e.target.value)} />
            </div>
        <input type="submit" value="Create" />
      </form>
    </>
  );
};

export default CreateTravel;
