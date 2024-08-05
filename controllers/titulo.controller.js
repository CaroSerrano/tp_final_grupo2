const db = require("../database/models");
const Title = db.title;
const Op = db.Op;

// Crear y guardar un nuevo título
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nombre_titulo) {
    res.status(400).send({
      message: "Agregue datos para insertar",
    });
    return;
  }

  // Datos del nuevo título
  const title = {
    nombre_titulo: req.body.nombre_titulo,
    id_categoria: req.body.id_categoria,
    id_genero: req.body.id_genero,
    temporadas: req.body.temporadas,
    calificacion: req.body.calificacion,
  };

  // Guardar el título en la BBDD
  Title.create(title)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ocurrió un error en la creación del título",
      });
    });
};

// Muestra todos los títulos
exports.findAll = (req, res) => {
  Title.findAll({
    include: [
      { model: db.category, attributes: ["nombre_categoria"] },
      { model: db.genre, attributes: ["nombre_genero"] },
      {
        model: db.actor,
        attributes: ["nombre", "apellido"],
        through: { attributes: [] },
      },
    ],
    attributes: ["nombre_titulo", "temporadas", "calificacion"],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ocurrió un error al mostrar los títulos",
      });
    });
};

// Busca uno o más títulos mediante el nombre
exports.findName = (req, res) => {
  const nombre = req.params.nombre;
  var condition = nombre
    ? { nombre_titulo: { [Op.like]: `%${nombre}%` } }
    : null;
  Title.findAll({
    where: condition,
    include: [
      { model: db.category, attributes: ["nombre_categoria"] },
      { model: db.genre, attributes: ["nombre_genero"] },
      {
        model: db.actor,
        attributes: ["nombre", "apellido"],
        through: { attributes: [] },
      },
    ],
    attributes: ["nombre_titulo", "temporadas", "calificacion"],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error en obtener el título = ${nombre}`,
      });
    });
};

//Buscar todos los títulos pertenecientes a la categoría indicada por parámetro (1: Series, 2: Películas)
exports.findCategory = (req, res) => {
  const categoria = parseInt(req.params.categoria);
  Title.findAll({
    where: { id_categoria: { [Op.eq]: categoria } },
    include: [
      { model: db.category, attributes: ["nombre_categoria"] },
      { model: db.genre, attributes: ["nombre_genero"] },
      {
        model: db.actor,
        attributes: ["nombre", "apellido"],
        through: { attributes: [] },
      },
    ],
    attributes: ["nombre_titulo", "temporadas", "calificacion"],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ocurrió un error",
      });
    });
};

// Actualiza un título mediante su id
exports.update = (req, res) => {
  const id = req.params.id;

  Title.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "El título fue actualizado",
        });
      } else {
        res.send({
          message: `No se puede actualizar el título con el id=${id}!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error al actualizar el título con id=" + id,
      });
    });
};

// Elimina un título mediante su id
exports.delete = (req, res) => {
  const id = req.params.id;

  Title.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Se eliminó el título correctamente!",
        });
      } else {
        res.send({
          message: `No se pudo eliminar el título con id=${id}.!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "No se pudo eliminar el título con id=" + id,
      });
    });
};

// Elimina todos los títulos de la BBDD
exports.deleteAll = (req, res) => {
  Title.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Títulos se borraron exitosamente!` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "No se pudieron borrar los títulos.",
      });
    });
};

// Buscar todos los títulos con una calificación > 5, ordenados de forma descendente
exports.findAllCalificacion = (req, res) => {
  let condition = { calificacion: { [Op.gt]: 5 } };

  Title.findAll({
    where: condition,
    order: [["calificacion", "DESC"]],
    attributes: ["nombre_titulo", "calificacion"],
    include: [
      { model: db.category, attributes: ["nombre_categoria"] },
      { model: db.genre, attributes: ["nombre_genero"] },
    ],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ocurrió un error",
      });
    });
};
