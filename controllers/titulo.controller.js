const db = require("../database/models");
const Title = db.title;
const Op = db.Op;

// Create and Save a new Book
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nombre_titulo) {
    res.status(400).send({
      message: "Agregue datos para insertar"
    });
    return;
  }

  // Create a Book
  const title = {
    nombre_titulo: req.body.nombre_titulo,
    id_categoria: req.body.id_categoria,
    id_genero: req.body.id_genero, 
    temporadas : req.body.temporadas, 
    calificacion : req.body.calificacion
  };

  // Save Book in database
  Title.create(title)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Ocurrio un error en la creacion del titulo"
      });
    });
};

// Retrieve all Books from the database.
exports.findAll = (req, res) => {
  //const title = req.query.title;
  //var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;


  Title.findAll({include: [{model: db.category, attributes: ['nombre_categoria']}
                         , {model: db.genre, attributes: ['nombre_genero']}
                         , {model: db.actor, attributes: ['nombre', 'apellido']
                          
                         }
             ], attributes: ['nombre_titulo', 'temporadas', 'calificacion']})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Ocurrio un error al mostrar los titulos"
      });
    });
};

// Find a single Book with an id
exports.findName = (req, res) => {
  const nombre = req.params.nombre;
  var condition = nombre ? { nombre_titulo: { [Op.like]: `%${nombre}%` } } : null;
  Title.findAll({where:condition, include: [{model: db.category, attributes: ['nombre_categoria']}
    , {model: db.genre, attributes: ['nombre_genero']}
    , {model: db.actor, attributes: ['nombre', 'apellido']
     
    }
], attributes: ['nombre_titulo', 'temporadas', 'calificacion']})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: `Error en obtener el titulo = ${nombre}`
      });
    });
};

exports.findCategory = (req, res) => {
const categoria = parseInt(req.params.categoria); 
    Title.findAll({ where: {id_categoria: { [Op.eq]:  categoria} }})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Ocurrio un error"
        });
      });
  };



// Update a Book by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Title.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "El titulo de la serie fue actualizado"
        });
      } else {
        res.send({
          message: `No se puede actualizar la serie con el id=${id}!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al actualizar la serie con id=" + id
      });
    });
};

// Delete a Book with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Title.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Se elimino el titulo correctamente!"
        });
      } else {
        res.send({
          message: `No se pudo eliminar el titulo con id=${id}.!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "No se pudo eliminar el titulo con id=" + id
      });
    });
};

// Delete all Books from the database.
exports.deleteAll = (req, res) => {
  Title.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Titulos se borraron exitosamente!` });
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "No se pudieron borrar los titulos."
      });
    });
};

// Find all published Books
exports.findAllCalificacion = (req, res) => {

var condition = { calificacion: { [Op.gt]: 5 } }; 

  Title.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Ocurrio un error"
      });
    });
};
