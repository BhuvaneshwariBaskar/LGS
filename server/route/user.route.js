const {
  createUser,getUser
  } = require("../controller/user.controller");
  
  const router = require("express").Router();
  //user

  
  
  router.post("/user",createUser);
  router.get("/user/:email/:password",getUser);


  
  
  
  module.exports = router;
  