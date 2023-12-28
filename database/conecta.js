const { Sequelize } = require('sequelize');
//
const bdName  = 'bzlkggjfbk6mwj4mvu3y';
const user = 'u6qjgymqhecxzons';
const password = '3TWjdAGUvgpmuPWkGOHm';
const shost = 'bzlkggjfbk6mwj4mvu3y-mysql.services.clever-cloud.com';
/*
const bdName  = 'SistemaAtencionMedica';
const user = 'root';
const password = '';
const shost = 'localhost';
*/
const dbConn = new Sequelize(bdName, user, password, {host: shost, dialect:"mariadb"});

module.exports = dbConn;
