const { response } = require('express');
const { QueryTypes } = require('sequelize');
const ResultadosAnalisisModel = require('../models/ResultadosAnalisis');

const getResultadosAnalisis = async (req, resp = response) => {
    try {
        const resultadosAnalisis = await ResultadosAnalisisModel.sequelize.query(
            'SELECT * FROM AnalisisResultados WHERE Estado = 1',
            { type: QueryTypes.SELECT }
        );
        resp.json(resultadosAnalisis);
    } catch (error) {
        console.error(error);
        resp.status(500).json({ mensaje: 'Error en el servidor' });
    }
};

const getResultadoAnalisis = async (req, resp = response) => {
    const id = req.params.id;
    try {
        const resultadoAnalisis = await ResultadosAnalisisModel.sequelize.query(
            'SELECT * FROM AnalisisResultados WHERE id='+id,
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

const postResultadoAnalisis = async (req, resp = response) => {
    const { body } = req;
    try {
        const resultadoAnalisis = await ResultadosAnalisisModel.create(body);
        resp.json(resultadoAnalisis);
    } catch (error) {
        console.error(error);
        resp.status(500).json({ mensaje: 'Error en el servidor' });
    }
};

const putResultadoAnalisis = async (req, resp = response) => {
    const id = req.params.id;
    const { body } = req;
    try {
        const resultadoAnalisis = await ResultadosAnalisisModel.findByPk(id);
        if (!resultadoAnalisis) {
            return resp.status(404).json({ mensaje: 'No se encuentra el resultado de análisis' });
        }
        
        await resultadoAnalisis.update(body);
        resp.json(resultadoAnalisis);
    } catch (error) {
        console.error(error);
        resp.status(500).json({ mensaje: 'Error en el servidor' });
    }
};

const deleteResultadoAnalisis = async (req, resp = response) => {
    const id = req.params.id;
    try {
        const resultadoAnalisis = await ResultadosAnalisisModel.findByPk(id);
        if (!resultadoAnalisis) {
            return resp.status(404).json({ mensaje: 'Resultado de análisis no encontrado' });
        }
        await resultadoAnalisis.update({ Estado: 0 });
        resp.json(resultadoAnalisis);
    } catch (error) {
        console.error(error);
        resp.status(500).json({ mensaje: 'Error en el servidor' });
    }
};



module.exports = {
    getResultadosAnalisis,
    getResultadoAnalisis,
    postResultadoAnalisis,
    putResultadoAnalisis,
    deleteResultadoAnalisis
};
