//Importación de Módulos y Configuración del Entorno
const { Sequelize } = require('sequelize');
const { database } = require('../config/config');

// Configuración de la Base de Datos
const dotenv = require('dotenv');
dotenv.config()

const sequelize = new Sequelize(database.DB_NAME, database.DB_USER , database.DB_PASS, {
  host: database.DB_HOST,
  dialect: database.dialect 
});
//Función para Conectar a la Base de Datos
async function connect(){
    try {
        await sequelize.authenticate();
        console.log('La coneccion se ha establecido correctamente.');
        } catch (error) {
        console.error('No se puede conectar a la base de datos:', error);
        }
} 
//Función para Desconectar de la Base de Datos
async function disconnect(){
    try {
        await sequelize.authenticate();
        console.log('Cerrar conexion.');
        } catch (error) {
        console.error('No se puede cerrar la coneccion con la base de datos:', error);
        }
} 
//Exportación y Ejecución de Funciones
module.exports = {connect, disconnect}
connect()
disconnect()
module.exports = sequelize;

// sequelize.authenticate().then(() => {
//   console.log('Connection has been established successfully.');
// }).catch((error) => {
//   console.error('Unable to connect to the database: ', error);
// });

// sequelize.close().then(() => {
//   console.log('Clouse Connection.');
// }).catch((error) => {
//   console.error('Unable clouse to Connection to the database: ', error);
// });