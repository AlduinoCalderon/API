const { response } = require('express');
const RegistroMedicoExamenesModel = require('../models/RegistroMedicoExamenes');
const { QueryTypes } = require('sequelize');

const getRegistrosMedicosExamenes = async (req, resp = response) => {
    try {
        const registrosMedicosExamenes = await RegistroMedicoExamenesModel.sequelize.query("select * from RegistroMedicoExamenes where estado=1;", {type:QueryTypes.SELECT});
        resp.json(registrosMedicosExamenes);
    } catch (error) {
        console.error(error);
        resp.status(500).json({ mensaje: 'Error en el servidor' });
    }
};

const getRegistroMedicoExamen = async (req, resp = response) => {
    const id = req.params.id;
    try {
        const registroMedicoExamen = await RegistroMedicoExamenesModel.findByPk(id);
        if (registroMedicoExamen==null) {
            resp.json({
                respuesta: false,
                resultado:"No se encuentra"
            });
        }
        else{
            resp.json(registroMedicoExamen);
        }
    } catch (error) {
        console.error(error);
        resp.status(500).json({ mensaje: 'Error en el servidor' });
    }
};

const postRegistroMedicoExamen = async (req, resp = response) => {
    const { body } = req;
    try {
        const registroMedicoExamen = await RegistroMedicoExamenesModel.create(body);
        resp.json(registroMedicoExamen);
    } catch (error) {
        console.error(error);
        resp.status(500).json({ mensaje: 'Error en el servidor' });
    }
};

const putRegistroMedicoExamen = async (req, resp = response) => {
    const id = req.params.id;
    const { body } = req;
    try {
        const registroMedicoExamen = await RegistroMedicoExamenesModel.findByPk(id);
        if (!registroMedicoExamen) {
            return resp.status(404).json({ mensaje: 'No se encuentra el registro' });
        }
        await registroMedicoExamen.update(body);
        resp.json(registroMedicoExamen);
    } catch (error) {
        console.error(error);
        resp.status(500).json({ mensaje: 'Error en el servidor' });
    }
};

const deleteRegistroMedicoExamen = async (req, resp = response) => {
    const id = req.params.id;
    try {
        const registroMedicoExamen = await RegistroMedicoExamenesModel.findOne({ where: { id, estado: 1 } });
        if (!registroMedicoExamen) {
            return resp.status(404).json({ mensaje: 'Registro no encontrado' });
        }
        await registroMedicoExamen.update({ estado: 0 });
        resp.json(registroMedicoExamen);
    } catch (error) {
        console.error(error);
        resp.status(500).json({ mensaje: 'Error en el servidor' });
    }
};

module.exports = {
    getRegistrosMedicosExamenes,
    getRegistroMedicoExamen,
    postRegistroMedicoExamen,
    putRegistroMedicoExamen,
    deleteRegistroMedicoExamen
};
