const { Sequelize, DataTypes, Op } = require("sequelize");
const { database } = require('../../config/config.js');

const sequelize = new Sequelize(
    database.DB_NAME,
    database.DB_USER,
    database.DB_PASS,
    {
        host: database.DB_HOST,
        port: database.DB_PORT,
        dialect: database.dialect
       
    }
);

const db = {};

db.Sequelize = Sequelize;
db.Op = Op;
db.sequelize = sequelize;

// incializo las tablas
db.title = require("./titulo.model.js")(sequelize, Sequelize, DataTypes);
db.category = require("./categoria.model.js")(sequelize, Sequelize, DataTypes);
db.actor = require("./actores.model.js")(sequelize, Sequelize, DataTypes);
db.genre = require("./genero.model.js")(sequelize, Sequelize, DataTypes);

// relaciones. genero una tabla aux 
db.title.belongsToMany(db.actor, {
    through: {
        model: 'ActoresTitulos',
    },
    foreignKey: 'id_titulo',
    otherKey: 'id_actor', 
    timestamps: false // Desactiva las columnas createdAt y updatedAt
});

db.actor.belongsToMany(db.title, {
    through: {
        model: 'ActoresTitulos',
    },
    foreignKey: 'id_actor',
    otherKey: 'id_titulo', 
    timestamps: false 
});

db.title.belongsTo(db.category, {
    foreignKey: 'id_categoria'
});

db.category.hasMany(db.title, {
    foreignKey: 'id_categoria'
});

db.title.belongsTo(db.genre, {
    foreignKey: 'id_genero'
});

db.genre.hasMany(db.title, {
    foreignKey: 'id_genero'
});
/*
// Define initial data creo nuevos datos
const libros = [
    { author: "Author 1", title: "user" },
    { author: "Author 2", title: "moderator" },
    { author: "Author 3", title: "admin" }
];

const Book = db.books;
const Contact = db.contacts;
 // ----- si ya tienen los datos ignored linea 48-79
function initial() {
    // // Insert initial book data
    // Book.create({ title: "Book 1", author: "Author 1", published: true, release_date: new Date(), subject: 1 });

    // Insert initial contact data
    Contact.create({ nombre: "nombre 1", apellido: "apellido 1", telefono: "123456789" }).then(contact => {
    
    // Insert initial book data
    libros.forEach(rol => {
        Book.findOrCreate({
            where: { title: rol.title },
            defaults: {
                title: rol.title,
                author: rol.author,
            }
        }).then(([book, created]) => {
            if (created) {
                console.log('created book', book);
            }
            // Associate the contact with the book
            contact.addBook(book);
        }).catch(err => {
            console.error("Error creating book:", err);
        });
    });
    }).catch(err => {
        console.error("Error creating contact:", err);
    });

    console.log("Database is synced and initial data inserted.");
}
*/
// Sync database and call initial function
sequelize.sync().then(() => {
    //initial(); // ----- si ya tienen los datos ignored esta funcion
}).catch(err => {
    console.error("Error syncing database:", err);
});

module.exports = db;