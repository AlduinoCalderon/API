
const { DataTypes } = require('sequelize');
const db = require('../database/conecta'); 
const ValoresNormales = db.define('ValoresNormales', {
    Nombre: {type: DataTypes.STRING},
    valor_min: {type: DataTypes.DECIMAL(10, 2)},
    valor_max: {type: DataTypes.DECIMAL(10, 2)},
    Unidades: {type: DataTypes.STRING},
    RangoNormal: {type: DataTypes.STRING},
    estado: {type: DataTypes.BOOLEAN},
});

module.exports = ValoresNormales;
