const { response } = require('express');
const MedEsp = require('../models/Med_Especialidades');
const { QueryTypes } = require('sequelize');


const getMedicosEsp = async (req, res=response) => {
    try {
      const medicos = await MedEsp.findAll();
      res.json(medicos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  };
  
  
  const getMedicoEsp = async (req, res) => {
    try {
      const { id } = req.params;
      const medico = await MedEsp.findByPk(id);
      if (!medico) {
        return res.status(404).json({ message: 'Médico no encontrado' });
      }
      res.json(medico);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  };
  
  
  const createMedicoEsp = async (req, res) => {
    try {
      const { body } = req;
      const nuevoMedico = await MedEsp.create(body);
      res.json(nuevoMedico);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  };
  
  
  const updateMedicoEsp = async (req, res) => {
    try {
      const  id  = req.params.id;
      const { body } = req;
      const medico = await MedEsp.findByPk(id);
      if (!medico) {
        return res.status(404).json({ message: 'Médico no encontrado' });
      }
      await medico.update(body);
      res.json(medico);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  };
  
  
  const deleteMedicoEsp = async (req, res) => {
    try {
      const { id } = req.params;
      const medico = await MedEsp.findByPk(id);
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
  
  module.exports={getMedicosEsp, getMedicoEsp, deleteMedicoEsp, updateMedicoEsp, createMedicoEsp};