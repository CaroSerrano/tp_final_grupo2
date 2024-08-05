const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config/config");

const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Bienvenid@ a la API del grupo 2!" });
});

// api routes
require("./routes/titulo.routes")(app);
require("./routes/actor.routes")(app);


// set port, listen for requests
const PORT = config.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
