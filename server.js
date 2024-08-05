// Importación de Módulos
const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config/config");
//Creación de la Aplicación Express
const app = express();

const corsOptions = {
  origin: "http://localhost:"+ config.PORT
};

// Configuración del Middleware
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Hi there, welcome to this tutorial." });
});

// Registro de Rutas de la API
require("./routes/titulo.routes")(app);
require("./routes/actor.routes")(app);


// Configuración del Puerto y Ejecución del Servidor
const PORT = config.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
