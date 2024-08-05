//Importamos el modelo title y el operador
const db = require("../database/models");
const Title = db.title;
const Op = db.Op;

// Crea y guarda un nuevo titulo
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nombre_titulo) {
    res.status(400).send({
      message: "Agregue datos para insertar"
    });
    return;
  }

  // Crea los titulos
  const title = {
    nombre_titulo: req.body.nombre_titulo,
    id_categoria: req.body.id_categoria,
    id_genero: req.body.id_genero, 
    temporadas : req.body.temporadas, 
    calificacion : req.body.calificacion
  };

  // Guarda los titulos en la bd
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

// Recupera todos los títulos de la bd incluyendo las categorías, géneros y actores asociados a los títulos.
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

// Busca títulos por nombre incluyendo las categorías, géneros y actores asociados a esos títulos.
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

//Esta función busca los títulos por categoría.
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



// Actualiza un título en la bd con los datos proporcionados en la solicitud.
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

// Elimina un título de la bd usando el ID proporcionado en la solicitud.
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

// Elimina todos los títulos de la bd.
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

// Busca todos los títulos los cuales tengan una calificación mayor que 5⭐⭐⭐⭐⭐.
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
