const db = require("../database/models");
const Actor = db.actor;
const Op = db.Op;


// Retrieve all Books from the database.
exports.findAll = (req, res) => {
   Actor.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Ocurrio un error al mostrar los actores"
      });
    });
};


exports.findName = (req, res) => {
  const nombre = req.params.nombre;
  var condition = nombre ? { nombre: { [Op.like]: `%${nombre}%` } } : null;
  Actor.findAll({where:condition, include: [{model: db.title, attributes: ['nombre_titulo']}
    
], attributes: ['nombre', 'apellido']})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: `Error en obtener el actor = ${nombre}`
      });
    });
};

