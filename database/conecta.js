const { Sequelize } = require('sequelize');
//
const bdName  = 'bpbzooyb0hdwe3yri4x1';
const user = 'root';
const password = 'Tunombre2';
const shost = 'localhost';
/*
const bdName  = 'SistemaAtencionMedica';
const user = 'root';
const password = '';
const shost = 'localhost';
*///
const dbConn = new Sequelize(bdName, user, password, {host: shost, dialect:"mariadb"});

module.exports = dbConn;
