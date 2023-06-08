const { json } = require("express");
const db = require("../database");

exports.bookFlight = (req, res) => {
  const { user_id, booking_id } = req.body;
  try {
    db.query(
      "UPDATE Travel_log SET seats_available = seats_available - 1 WHERE id = ?",
      [booking_id],
      (err, response) => {
        if (err) throw Error(err);
        else {
          db.query(
            "select * from user_detail where id = ?",
            [user_id],
            (err2, response2) => {
              if (err2) throw Error(err2);
              else {
                book_list = JSON.parse(response2.rows[0]);
                book_list.push(booking_id);
                json = JSON.stringify(book_list);
                db.query(
                  "UPDATE user_detail set booking_list = ?",
                  [json],
                  (err3, res3) => {
                    if (err3) throw Error(err3);
                    else return res.status(200).json(res3);
                  }
                );
              }
            }
          );
        }
      }
    );
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

exports.getAirports = (req, res) => {
  try {
    db.query(
      `SELECT * from airport`,

      (err, response) => {
        if (err) throw Error(err);
        else return res.status(200).json(response.rows);
      }
    );
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

exports.searchFlights = (req, res) => {
  try {
    const { from, destination, date, seats } = req.params;
    db.query(
      `SELECT * from Travel_log where from_point = ?1 AND destination_point = ? AND Date = ? AND seats_available >= ?`,
      [from, destination, date, seats],

      (err, response) => {
        if (err) throw Error(err);
        else return res.status(200).json(response.rows);
      }
    );
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

//admin

exports.createFlight = (req, res) => {
  const { flight_name, travel_time, from, destination } = req.body;
  try {
    db.query(
      "SELECT * from flight where flight_name  = ? AND from_point = ? AND destination_point = ?",
      [flight_name, from, destination],
      (err, res1) => {
        if (err) throw new Error(err);
        else {
          if (res1.rows.length > 0) {
            throw Error("Flight exists");
          } else {
            db.query(
              "INSERT into flight(flight_name,from_point,destination_point,travel_time) VALUES(?,?,?,?)",
              [flight_name, from, destination, travel_time],
              (err2, res2) => {
                if (err2) throw new Error(err2);
                else {
                  return res.status(200).json(res2);
                }
              }
            );
          }
        }
      }
    );
  } catch (err) {
    console.log("nooo");
    return res.status(400).json({ error: err.message });
  }
};

exports.createTravel = (req, res) => {
  const {
    flight_name,
    from_point,
    destination_point,
    date_of_travel,
    time_of_travel,
    seats_available,
    cost_of_travel,
  } = req.body;
  try {
    // db.query(
    //   "SELECT * from travel_log where flight_name = ?",
    //   [flight_name],
    //   (err1, res1) => {
    //     if (err1) throw Error(err1);
    //     else if (res1.rowCount != 0) {
    //       db.query(
    //         "SELECT * from flight where flight_name = ?",
    //         [flight_name],
    //         (err2, res2) => {
    //           if (err2) throw Error(err2);
    //           else {

    //             let datetime =  Date.parse(`${date_of_travel}T${time_of_travel}.000Z`);
    //             let last_travelled =  Date.parse(`${date_of_travel}T${time_of_travel}.000Z`);
    //             let flight_selected = res2.rows[0];

    //             // let last_travelled = getDateFromString2(
    //             //   flight_selected.last_travelled_date,
    //             //   flight_selected.last_travelled_time
    //             // );
    //             console.log(datetime.toLocaleString(),"2",last_travelled);

    //             last_travelled.setHours(
    //               last_travelled.getHours + flight_selected.travel_time
    //             );

    //             if (last_travelled < datetime) {
    //               throw Error("Flight already reserved. Try another flight");
    //             } else {
    //               db.query(
    //                 "INSERT into Travel_log(flight_name, from_point, destination_point, date_of_travel, time_of_travel, seats_available,cost_of_travel) VALUES(?,?,?,?,?,?,?)",
    //                 [
    //                   flight_name,
    //                   from_point,
    //                   destination_point,
    //                   date_of_travel,
    //                   time_of_travel,
    //                   seats_available,
    //                   cost_of_travel,
    //                 ],
    //                 (err3, res3) => {
    //                   if (err3) throw Error(err3);
    //                   else {
    //                     return res.status(200).json(res3);
    //                   }
    //                 }
    //               );
    //             }
    //           }
    //         }
    //       );
    //     } else {
    db.query(
      "INSERT into Travel_log(flight_name, from_point, destination_point, date_of_travel, time_of_travel, seats_available,cost_of_travel) VALUES(?,?,?,?,?,?,?)",
      [
        flight_name,
        from_point,
        destination_point,
        date_of_travel,
        time_of_travel,
        seats_available,
        cost_of_travel,
      ],
      (err4, res4) => {
        if (err4) throw Error(err4);
        else {
          db.query(
            "UPDATE flight set last_travelled_date = ? , last_travelled_time = ? where flight_name = ? AND from_point = ? AND destination_point = ?",
            [
              date_of_travel,
              time_of_travel,
              flight_name,
              from_point,
              destination_point,
            ],
            (err5, res5) => {
              if (err5) throw Error(err5);
              return res.status(200).json(res5);
            }
          );
        }
      }
    );
    //     }
    //   }
    // );
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

exports.getFlights = (req, res) => {
  try {
    console.log("ll");
    db.query(
      `SELECT * from flight`,

      (err, response) => {
        if (err) throw Error(err);
        else {
          console.log(response);
          return res.status(200).json(response.rows);
        }
      }
    );
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

exports.getLogs = (req, res) => {
  try {
    db.query(
      `SELECT * from Travel_log`,

      (err, response) => {
        if (err) throw Error(err);
        else return res.status(200).json(response.rows);
      }
    );
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
