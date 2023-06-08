const bcrypt = require('bcrypt');
const saltRounds = 10;
const db = require("../database");



exports.createUser = (req, res) => {
  const { name, email, password, bookings } = req.body;
  try {
    console.log(req.body);
    var booking_json=JSON.stringify(bookings)
    bcrypt.hash(password, saltRounds, function(err, hash) {
      db.query(
        `INSERT into user_table(name,email,password,bookings) VALUES(?,?,?,?)`,
        [name, email, hash, booking_json],
        (err, response) => {
         
           return res.status(200).json(response.rows);
        }
      );
  });
  

    
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

exports.getUser = (req, res) => {
    const { email,password} = req.params;
    try {
      
      db.query(
        `SELECT * from user_table where email = ?`,
        [email],
        (err, response) => {
          bcrypt.compare(password, response[0].password).then(function(result) {
           if(result == true){
            return res.status(200).json(response[0]);
           } 
          // console.log(response);
        });
           
        
      });
      
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  };