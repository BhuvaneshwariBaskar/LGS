import React from "react";
import { Link } from "react-router-dom";

export const HeaderNavComp = () => {
  return (
    <div className="grid grid-cols-4 gap-2">
      <div className="flex justify-center col-span-1 p-5 items-center">
        <div>
          <p className="text-3xl font-bold text-white">LGS</p>
          <p className="text-sm text-white text-center">BUDGET</p>
        </div>
      </div>
      <div className="col-span-3 p-5 flex justify-center items-center">
        <Link to="index.html">
          <div className="hover:border-b-[2px] hover:border-b-yellow-400 pb-2">
            <p className="text-white">HOME</p>
          </div>
        </Link>
   
        <Link to="index.html" className="ml-5">
          <div className="hover:border-b-[2px] hover:border-b-yellow-400 pb-2">
            <p className="text-white">YOUR BOOKINGS</p>
          </div>
        </Link>
        <Link to="/createFlight" className="ml-5">
          <div className="hover:border-b-[2px] hover:border-b-yellow-400 pb-2">
            <p className="text-white">Flight</p>
          </div>
        </Link>
        <Link to="index.html" className="ml-5">
          <div className="hover:border-b-[2px] hover:border-b-yellow-400 pb-2">
            <p className="text-white">LOGIN</p>
          </div>
        </Link>
        <Link to="index.html" className="ml-5">
          <div className="py-2 px-5 border-white border-[2px]">
            <p className="text-white">FIND FLIGHT</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
