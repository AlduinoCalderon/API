const { DataTypes } = require('sequelize');
const db = require('../database/conecta');

const Medicos = db.define('Medicos', {
  Cedula: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  EmpleadoID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Medicos;
