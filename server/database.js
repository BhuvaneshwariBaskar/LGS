const mysql = require("mysql2");

const db = mysql.createConnection({
  user: "uslfkghtehzmtgkr",
  host: "by04rsra1m6gqpewmmsu-mysql.services.clever-cloud.com",
  database: "by04rsra1m6gqpewmmsu",
  password: "W7u10xWnujKhLDxdkdfP",
  multipleStatements:true
});
db.connect((err)=>{
  if(err){
    console.log("MySql not connected");
  } else {
    console.log("MySql connected");
  }
})
module.exports = db;
