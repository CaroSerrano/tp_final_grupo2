module.exports = app => {
    const titleController = require("../controllers/titulo.controller.js");
  
    const router = require("express").Router();
  
    // Create a new Book
    router.post("/", titleController.create);
  
    // Retrieve all Books
    router.get("/", titleController.findAll);
  
    // Retrieve all published Books
    router.get("/calificacion", titleController.findAllCalificacion);
  
    // Retrieve a single Book with id
    router.get("/:nombre", titleController.findName);
    router.get("/categoria/:categoria", titleController.findCategory);
  
    // Update a Book with id
    router.put("/:id", titleController.update);
  
    // Delete a Book with id
    router.delete("/:id", titleController.delete);
  
    // Delete all Books
    router.delete("/", titleController.deleteAll);
  
    app.use("/api/trailerflix", router);
  };
  