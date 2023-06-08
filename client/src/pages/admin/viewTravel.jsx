import React, { useState ,useEffect} from "react";
import {  getTravel } from "../../axios/admin.axios";
import { Link } from "react-router-dom";
import { ButtonYellowComp } from "../../components/ButtonYellowComp";

const ViewTravel = () => {
  const [travel, setTravel] = useState();

  useEffect(() => {
      getTravel().then((res)=>{
        setTravel(res.data)
      })
  },[]);
  return (
    <>
      <div className="w-full bg-[#f6f6f6] min-h-screen ">
        
        {travel &&
          travel.map((data) => {
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
                  <h1 className="font-semibold">Date</h1>
                  <p className="mt-2">{data.date_of_travel.split("T")[0]}</p>
                </span>
                <span>
                  <h1 className="font-semibold">Time</h1>
                  <p className="mt-2">{data.time_of_travel}</p>
                </span>
                <span>
                  <h1 className="font-semibold">Seats</h1>
                  <p className="mt-2">{data.seats_available}</p>
                </span>
                <span>
                  <h1 className="font-semibold">Cost</h1>
                  <p className="mt-2">{data.cost_of_travel}</p>
                </span>
                <div className="px-5">
                  <Link to="/createtravel">
                    <ButtonYellowComp
                      label={"createTravel"}
                      extraStyle={"mt-5"}
                    />
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default ViewTravel
