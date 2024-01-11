const VistaResultados = require('../models/VistaResultados');
const { response } = require("express");
const { QueryTypes } = require('sequelize');

const getVistaResultados = async (req, resp = response) => {
    const { Nombre } = req.params;
    // const { FechaRealizacion } = req.body; // Obtén la fecha de realización desde el body
    
    try {
    
        console.log('Nombre:', Nombre);
    
        const resultadoAnalisis = await VistaResultados.sequelize.query(
            'SELECT * FROM VistaResultados WHERE NombrePaciente = :nombre',
            //AND FechaRealizacion = :fechaRealizacion  
            {
              replacements: {
                // fechaRealizacion: FechaRealizacion,
                nombre: Nombre
              },
              type: QueryTypes.SELECT
            }
          );
        

        if (!resultadoAnalisis || resultadoAnalisis.length === 0) {
            return resp.status(404).json({ mensaje: 'No se encuentra el resultado de análisis para el paciente' });
        }

        resp.json(resultadoAnalisis);
    } catch (error) {
        console.error(error);
        resp.status(500).json({ mensaje: 'Error en el servidor' });
    }
};

module.exports = { getVistaResultados };


module.exports = { getVistaResultados };
