const db = require("../database/models");
const Actor = db.actor;
const Op = db.Op;

// Muestra todos los actores
exports.findAll = (req, res) => {
  Actor.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ocurrió un error al mostrar los actores",
      });
    });
};

//Muestra un actor y todos los títulos en los que trabajó, buscando mediante su nombre o apellido.
exports.findName = (req, res) => {
  const nombre = req.params.nombre;
  let condition = nombre
    ? {
        [Op.or]: [
          { nombre: { [Op.like]: `%${nombre}%` } },
          { apellido: { [Op.like]: `%${nombre}%` } },
        ],
      }
    : null;

  Actor.findAll({
    where: condition,
    include: [
      {
        model: db.title,
        attributes: ["nombre_titulo"],
        through: { attributes: [] },
      },
    ],
    attributes: ["nombre", "apellido"],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error en obtener el actor = ${nombre}`,
      });
    });
};
