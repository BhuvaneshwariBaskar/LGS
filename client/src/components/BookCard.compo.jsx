import React from "react";
import { FaPlaneArrival, FaPlaneDeparture, FaChild } from "react-icons/fa";
import { GiPerson } from "react-icons/gi";
import { useForm } from "react-hook-form";
const BookCard = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // handle submit
  const onSubmit = (data) => alert(JSON.stringify(data));
  return (
     // handle event
    
        <React.Fragment>
          <section>
            <form className=' bg-slate-50 shadow-lg rounded-xl w-[50vw] h-full ' onSubmit={handleSubmit(onSubmit)}>
              <div className="pb-10 mt-5 mx-5 px-5 rounded-lg sm:w-full md:w-4/5 md:mx-auto lg:w-2/5 lg:mx-auto">
                {/* header section */}
                <div className="h-24 flex justify-center items-center ">
                  <p className="uppercase font-bold text-2xl text-center">
                    flight booking app
                  </p>
                </div>
    
                {/* body section */}
                <div>
                  <div className="grid justify-center space-y-5 pb-8">
                 
    
                    {/* departure section */}
                    <div>
                      <div>
                        <div className="relative">
                          <p className="font-bold text-base uppercase">flying from</p>
                          <select
                            className={`w-full h-12 text-base pl-20 rounded-lg ${
                              errors.departure &&
                              " focus:border-red-500 focus:ring-red-500 border-red-500"
                            }`}
                            {...register("departure", {
                              required: {
                                value: true,
                                message: "Departure is required",
                              },
                            })}
                          >
                            <option value="" selected disabled hidden>
                              --Select Airport--
                            </option>
                            <option value="ENIA">
                              {" "}
                              England Newcastle International Airport
                            </option>
                            <option value="INIA">
                              {" "}
                              Italy Naples International Airport
                            </option>
                            <option value="MMA"> Malaysia Mulu Airport</option>
                            <option value="KMA"> Kenya Malindi Airport</option>
                          </select>
                          <FaPlaneDeparture className="text-2xl absolute left-5 top-10 " />
                        </div>
                        <div>
                          {errors.departure && (
                            <span className="text-sm text-red-500">
                              {errors.departure.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
    
                    {/* arrival section */}
                    <div>
                      <div>
                        <div className="relative">
                          <p className="font-bold text-base uppercase">flying to</p>
                          <select 
                          className={`w-full h-16 text-base pl-20 rounded-lg ${
                            errors.arrival &&
                            " focus:border-red-500 focus:ring-red-500 border-red-500"
                          }`}
                          {...register("arrival", {
                            required: {
                              value: true,
                              message: "Arrival is required",
                            },
                          })}
                          >
                            <option value="" selected disabled hidden>
                              --Select Airport--
                            </option>
                            <option value="ENIA">
                              {" "}
                              England Newcastle International Airport
                            </option>
                            <option value="INIA">
                              {" "}
                              Italy Naples International Airport
                            </option>
                            <option value="MMA"> Malaysia Mulu Airport</option>
                            <option value="KMA"> Kenya Malindi Airport</option>
                          </select>
                          <FaPlaneArrival className="text-2xl absolute left-5 top-10 " />
                        </div>
                        <div>
                        {errors.arrival && (
                            <span className="text-sm text-red-500">
                              {errors.arrival.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
    
                    {/* date section */}
                    <div className="flex space-x-2">
                      {/* departure section */}
                      <div>
                        <div>
                          <div className="relative">
                            <p className="font-bold text-base uppercase">
                              departure date
                            </p>
                            <input
                              type="date"
                              className={`w-full h-16 text-base rounded-lg ${errors.departureDate &&
                                " focus:border-red-500 focus:ring-red-500 border-red-500"}`}
                              {...register("departureDate", {
                                required: {
                                  value: true,
                                  message: "Departure date is required",
                                },
                              })}
                            />
                          </div>
                          <div>
                          {errors.departureDate && (
                            <span className="text-sm text-red-500">
                              {errors.departureDate.message}
                            </span>
                          )}
                          </div>
                        </div>
                      </div>
    
                    </div>
    
    
    
                    {/* btn section */}
                    <div>
                      <input
                        type="submit"
                        value="Find flight"
                        className="w-full h-16 font-bold text-xl uppercase rounded-xl bg-green-100 hover:bg-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </section>
        </React.Fragment>
      );
    };

    

export default BookCard;
