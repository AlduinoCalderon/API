const { response } = require("express");
const ValoresNormalesModel = require('../models/ValoresNormales');

const { QueryTypes } = require('sequelize');

const getValoresNormales = async (req, resp = response) => {
    try {
        const valoresNormales = await ValoresNormalesModel.sequelize.query(
            "select * from ValoresNormales where estado=1",
            {type:QueryTypes.SELECT}
        );
        resp.json(valoresNormales);
    } catch (error) {
        console.log(error);
    }
}

const getValorNormal = async (req, resp = response) => {
    const ValoresID = req.params.ValoresID;
    try {
        const valorNormal = await ValoresNormalesModel.findByPk(ValoresID);
        if (valorNormal==null) {
            resp.json({
                respuesta: false,
                resultado:"No se encuentra"
            });
        }
        else{
            resp.json(valorNormal);
        }
        
    } catch (error) {
        console.log(error);
    }
}

const postValorNormal = async (req, resp = response) => {
    const { body } = req;
    try {
        const valorNormal = await ValoresNormalesModel.create(body);
        resp.json(valorNormal);
    } catch (error) {
        console.log(error);
        resp.status(500).json({ mensaje: "Error en el servidor" });
    }
}

const putValorNormal = async (req, resp = response) => {
    const ValoresID = req.params.ValoresID;
    const { body } = req;
    try {
        const valorNormal = await ValoresNormalesModel.findByPk(ValoresID);
        if (!valorNormal) {
            return resp.status(404).json({
                mensaje: "No se encuentra el registro"
            });
        }
        await valorNormal.update(body);
        resp.json(valorNormal);
    } catch (error) {
        console.log(error);
    }
}

const deleteValorNormal = async (req, resp = response) => {
    const ValoresID = req.params.ValoresID;
    try {
        const valorNormal = await ValoresNormalesModel.findByPk(ValoresID);
        if (!valorNormal) {
            return resp.status(404).json({
                mensaje: "Registro no encontrado"
            });
        }
        await valorNormal.update({ estado: false });
        resp.json(valorNormal);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getValoresNormales,
    getValorNormal,
    postValorNormal,
    putValorNormal,
    deleteValorNormal
};
