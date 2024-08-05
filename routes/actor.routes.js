module.exports = app => {
    const actorController = require("../controllers/actor.controller.js");
  
    const router = require("express").Router();
  
  
    // Obtengo todos los actores
    router.get("/todos", actorController.findAll);
  
     // Obtengo un actor por nombre
    router.get("/:nombre", actorController.findName);
  
   // Registro la ruta
    app.use("/api/trailerflix/actor", router);
  };