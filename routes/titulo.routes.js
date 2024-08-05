module.exports = app => {
    const titleController = require("../controllers/titulo.controller.js");
  
    const router = require("express").Router();
  
    // Crea un nuevo titulo POST
    router.post("/", titleController.create);
  
    // Obtengo todos los titulos GET
    router.get("/", titleController.findAll);
  
    // Obtengo todos los títulos con una calificación mayor a 5.⭐⭐⭐⭐⭐ GET
    router.get("/calificacion", titleController.findAllCalificacion);
  
    // Obtengo un título específico por nombre.GET
    router.get("/:nombre", titleController.findName);

    //Obtengo títulos por categoría.GET
    router.get("/categoria/:categoria", titleController.findCategory);
  
    // Actualizar un título específico por ID. PUT
    router.put("/:id", titleController.update);
   
    // Elimina un título específico por ID. DELETE
    router.delete("/:id", titleController.delete);
  
    // Elimina todos los títulos.DELETE
    router.delete("/", titleController.deleteAll);
  
    //Registramos las rutas
    app.use("/api/trailerflix", router);
  };
  