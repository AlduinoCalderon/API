const { DataTypes } = require('sequelize');
const db = require('../database/conecta');

const MedEspecialidades = db.define('Med_Especialidades', {
  
  MedicoID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  EspecialidadID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: false,
  createdAt: false,
  updatedAt: false,
});

module.exports = MedEspecialidades;
