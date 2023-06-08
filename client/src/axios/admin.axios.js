import axios from "axios";
const server_link = "http://localhost:8080/api";

export const createFlight = async (
  flight_name,
  from,
  destination,
  travel_time
) => {
  return await axios.post(`${server_link}/createflight`, {
    flight_name,
    from,
    destination,
    travel_time,
  });
};


export const getFlights = async () => {
  return await axios.get(`${server_link}/flights`)
}

export const getTravel = async () => {
  return await axios.get(`${server_link}/travel_log`)
}


export const createTravel = async (
  flight_name,
  from_point,
  destination_point,
  date_of_travel,
  time_of_travel,
  seats_available,
  cost_of_travel
) => {
  return await axios.post(`${server_link}/createtravel`, {
    flight_name,
    from_point,
    destination_point,
    date_of_travel,
    time_of_travel,
    seats_available,
    cost_of_travel
  });
};