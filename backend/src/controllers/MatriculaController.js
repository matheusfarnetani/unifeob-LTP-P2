// controllers/MatriculaController.js
const Matricula = require("../models/Matricula");

exports.getAll = async (req, res) => {
  try {
    const matriculas = await Matricula.getAllWithJoins();
    res.json(matriculas);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar matrículas" });
  }
};

exports.getById = async (req, res) => {
  try {
    const matricula = await Matricula.getById(req.params.id);
    res.json(matricula);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar matricula" });
  }
};

exports.create = async (req, res) => {
  try {
    const result = await Matricula.create(req.body);
    res.status(201).json({ id: result[0] });
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar matricula" });
  }
};

exports.update = async (req, res) => {
  try {
    await Matricula.update(req.params.id, req.body);
    res.json({ success: "Matricula atualizada com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar matricula" });
  }
};

exports.delete = async (req, res) => {
  try {
    await Matricula.delete(req.params.id);
    res.json({ success: "Matricula removida com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao remover matricula" });
  }
};
