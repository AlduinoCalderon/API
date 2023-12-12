
const { DataTypes } = require('sequelize');
const db = require('../database/conecta');

const RegistroMedicoExamenes = db.define('RegistroMedicoExamenes', {
    PacienteID: {
        type: DataTypes.CHAR(7),
        allowNull: false
    },
    FechaRealizacion: {
        type: DataTypes.DATE,
        allowNull: false
    },
    estado: {
        type: DataTypes.TINYINT,
        defaultValue: 0
    }
});

module.exports = RegistroMedicoExamenes;
