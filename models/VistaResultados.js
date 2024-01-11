const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database/conecta');

const VistaResultados = db.define('VistaResultados', {
  NombrePaciente: {
    type: DataTypes.STRING(25),
    allowNull: false,
  },
  FechaRealizacion: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  TipoEstudio: {
    type: DataTypes.STRING(25),
    allowNull: false,
  },
  ResultadoAnalisis: {
    type: DataTypes.STRING(25),
    allowNull: false,
  },
  ValorMinimo: {
    type: DataTypes.STRING(25),
    allowNull: false,
  },
  ValorMaximo: {
    type: DataTypes.STRING(25),
    allowNull: false,
  },
  RangoNormal: {
    type: DataTypes.STRING(25),
    allowNull: false,
  },
}, {
  tableName: 'VistaResultados',
  timestamps: false,
});
module.exports = VistaResultados;
