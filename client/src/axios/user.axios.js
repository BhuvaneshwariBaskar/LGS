import axios from "axios";
const server_link = "http://localhost:8080/api";

export const createUser = async (
  name,email,password
) => {
    console.log(email);
  return await axios.post(`${server_link}/user`, {
  name,email,password,bookings:[]
  });
};


export const getUser = async (email,password) => {
  return await axios.get(`${server_link}/user/${email}/${password}`)
}