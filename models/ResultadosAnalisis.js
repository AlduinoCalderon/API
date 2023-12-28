const { DataTypes } = require('sequelize');
const db = require('../database/conecta'); 
const AnalisisResultados = db.define('AnalisisResultados', {
    ValoresID: {
        type: DataTypes.CHAR(7),
        allowNull: false,
        references: {
            model: 'ValoresNormales',
            key: 'id'
        }
    },
    Resultado: {
        type: DataTypes.STRING(25),
        allowNull: true
    },
    RegistroMeExamID: {
        type: DataTypes.CHAR(7),
        allowNull: false,
        references: {
            model: 'RegistroMedicoExamen',
            key: 'id'
        }
    },
    Estado: {
        type: DataTypes.TINYINT,
        defaultValue: 0
    }
});

module.exports = AnalisisResultados;
