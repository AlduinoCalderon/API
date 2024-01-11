const { Sequelize } = require('sequelize');

const bdName  = 'SistemaAtencionMedica';
const user = 'root';
const password = 'Tortuga77';
const shost = 'localhost';

const dbConn = new Sequelize(bdName, user, password, {host: shost, dialect:"mariadb"});

module.exports = dbConn;
