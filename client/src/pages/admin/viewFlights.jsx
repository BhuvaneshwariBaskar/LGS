import React, { useState ,useEffect} from "react";
import { getFlights } from "../../axios/admin.axios";

const ViewFlights = () => {
  const [flights, setFlights] = useState();

  useEffect(() => {
      getFlights().then((res)=>{
        setFlights(res.data)
      })
  },[]);
  return (
    <>
      <div className="w-full bg-[#f6f6f6] min-h-screen ">
        jii
        {flights &&
          flights.map((data) => {
            return (
              <div className="w-3/5 p-[2rem] flex justify-evenly mx-auto mt-[2rem]  shadow-md">
                <span> 
                  <h1 className="font-semibold">Name</h1>
                  <p className="mt-2">{data.flight_name}</p>
                </span>
                <span>
                  <h1 className="font-semibold">From</h1>
                  <p className="mt-2">{data.from_point}</p>
                </span>
                <span>
                  <h1 className="font-semibold">Destination</h1>
                  <p className="mt-2">{data.destination_point}</p>
                </span>
                <span>
                  <h1 className="font-semibold">Travel time</h1>
                  <p className="mt-2">{data.travel_time}</p>
                </span>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default ViewFlights
