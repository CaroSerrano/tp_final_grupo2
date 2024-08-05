const { Sequelize } = require('sequelize');
const { database } = require('../config/config');

// ENVIRONMENT
const dotenv = require('dotenv');
dotenv.config()

const sequelize = new Sequelize(database.DB_NAME, database.DB_USER , database.DB_PASS, {
  host: database.DB_HOST,
  dialect: database.dialect 
});

async function connect(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        } catch (error) {
        console.error('Unable to connect to the database:', error);
        }
} 
async function disconnect(){
    try {
        await sequelize.authenticate();
        console.log('Connection closed.');
        } catch (error) {
        console.error('Unable to close the connection to the database:', error);
        }
} 
module.exports = {connect, disconnect}
connect()
disconnect()

module.exports = sequelize;