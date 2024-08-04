module.exports = app => {
    const actorController = require("../controllers/actor.controller.js");
  
    const router = require("express").Router();
  
  
    // traigo todos los actores
    router.get("/todos", actorController.findAll);
  
     
    // traigo  actor por nombre
    router.get("/:nombre", actorController.findName);
  
   
    app.use("/api/trailerflix/actor", router);
  };