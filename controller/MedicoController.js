
const { response } = require('express');
const Medicos = require('../models/Medicos');
const { QueryTypes } = require('sequelize');

const getMedicos = async (req, res=response) => {
  try {
    const medicos = await Medicos.findAll();
    res.json(medicos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};


const getMedicoById = async (req, res) => {
  try {
    const { id } = req.params;
    const medico = await Medicos.findByPk(id);
    if (!medico) {
      return res.status(404).json({ message: 'Médico no encontrado' });
    }
    res.json(medico);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};


const createMedico = async (req, res) => {
  try {
    const { Cedula, EmpleadoID } = req.body;
    const nuevoMedico = await Medicos.create({ Cedula, EmpleadoID });
    res.status(201).json(nuevoMedico);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};


const updateMedico = async (req, res) => {
  try {
    const { id } = req.params;
    const { Cedula, EmpleadoID } = req.body;
    const medico = await Medicos.findByPk(id);
    if (!medico) {
      return res.status(404).json({ message: 'Médico no encontrado' });
    }
    await medico.update({ Cedula, EmpleadoID });
    res.json(medico);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};


const deleteMedico = async (req, res) => {
  try {
    const { id } = req.params;
    const medico = await Medicos.findByPk(id);
    if (!medico) {
      return res.status(404).json({ message: 'Médico no encontrado' });
    }
    await medico.destroy();
    res.json({ message: 'Médico eliminado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

module.exports={getMedicos, getMedicoById, deleteMedico, updateMedico, createMedico};