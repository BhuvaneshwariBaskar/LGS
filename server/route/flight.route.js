const {
  bookFlight,
  getAirports,
  searchFlights,
  createFlight,
  createTravel,
  getLogs,
  getFlights
} = require("../controller/flight.controller");

const router = require("express").Router();
//user


router.post("/bookflight/:id",bookFlight);
router.get("/airports", getAirports);
router.get("/search/:from/:destination/:date/:seats", searchFlights);



//admin

router.post("/createflight", createFlight);
router.post("/createtravel", createTravel);
router.get("/flights", getFlights);
router.get("/travel_log", getLogs);
module.exports = router;
