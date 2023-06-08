import React, { useState, useEffect } from "react";
import { getFlights } from "../../axios/admin.axios";
import { ButtonYellowComp } from "../../components/ButtonYellowComp";
import { Link } from "react-router-dom";

const ViewFlights = () => {
  const [flights, setFlights] = useState();

  useEffect(() => {
    getFlights().then((res) => {
      setFlights(res.data);
    });
  }, []);
  return (
    <>
      <div className="w-full bg-[#f6f6f6] min-h-screen ">

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
                <div className="px-5">
                  <Link to="/viewtravel">
                    <ButtonYellowComp
                      label={"createFlight"}
                      extraStyle={"mt-5"}
                    />
                  </Link>
                </div>
                <div className="px-5">
                  <Link to="/viewtravel">
                    <ButtonYellowComp
                      label={"viewTravel"}
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
export default ViewFlights;
