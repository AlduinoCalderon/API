const { VistaResultados } = require('../models/VistaResultados');
const { response } = require("express");

const getVistaResultados = async (req, resp = response) => {
    const id = req.params.nombre;
    try {
        const resultadoAnalisis = await VistaResultados.sequelize.query(
            'SELECT * FROM VistaResultados WHERE nombre='+nombre,
            { type: QueryTypes.SELECT }
        );
        if (!resultadoAnalisis) {
            return resp.status(404).json({ mensaje: 'No se encuentra el resultado de análisis' });
        }
        resp.json(resultadoAnalisis);
    } catch (error) {
        console.error(error);
        resp.status(500).json({ mensaje: 'Error en el servidor' });
    }
};

module.exports = {getVistaResultados};





