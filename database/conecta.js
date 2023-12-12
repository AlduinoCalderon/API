const { Sequelize } = require('sequelize');
/*
const bdName  = 'bpbzooyb0hdwe3yri4x1';
const user = 'uhnzfqkbwbz2b5bo';
const password = 'E6S3UKkPzkfZTktDbHE8';
const shost = 'bpbzooyb0hdwe3yri4x1-mysql.services.clever-cloud.com';
*/
const bdName  = 'SistemaAtencionMedica';
const user = 'root';
const password = '';
const shost = 'localhost';

const dbConn = new Sequelize(bdName, user, password, {host: shost, dialect:"mariadb"});

module.exports = dbConn;
