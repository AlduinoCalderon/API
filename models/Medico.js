const { DataTypes } = require('sequelize');
const db = require('../database/conecta'); 

const Medico = db.define('Medico', {
    MedicoID: {
        type: DataTypes.CHAR(7),
        allowNull: false,
        primaryKey: true
    },
    Cedula: {
        type: DataTypes.STRING(25),
        allowNull: true
    },
    EmpleadoID: {
        type: DataTypes.CHAR(7),
        allowNull: true,
        references: {
            model: 'Empleados',
            key: 'EmpleadoID',
        }
    },
});

module.exports = Medico;
