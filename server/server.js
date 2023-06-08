const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./database")
const flightRoute = require("./route/flight.route")
const userRoute=require("./route/user.route")

require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"))
app.use("/api",flightRoute)
app.use("/api",userRoute)


app.listen(process.env.PORT, () => {
  console.log("Running in PORT",process.env.PORT);
});
