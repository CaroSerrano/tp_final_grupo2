module.exports = app => {
    const titleController = require("../controllers/titulo.controller.js");
  
    const router = require("express").Router();
  
    // Crear un nuevo título
    router.post("/", titleController.create);
  
    // Mostrar todos los títulos
    router.get("/", titleController.findAll);
  
    // Mostrar todos los títulos con una calificación >5
    router.get("/calificacion", titleController.findAllCalificacion);
  
    // Mostrar el o los títulos cuyo nombre coincida con el especificado
    router.get("/:nombre", titleController.findName);

    // Mostrar los títulos cuya categoría coincida con la especificada
    router.get("/categoria/:categoria", titleController.findCategory);
  
    // Actualizar un título mediante su id
    router.put("/:id", titleController.update);
  
    // Eliminar un título mediante su id
    router.delete("/:id", titleController.delete);
  
    // Eliminar todos lo títulos
    router.delete("/", titleController.deleteAll);
  
    app.use("/api/trailerflix", router);
  };
  