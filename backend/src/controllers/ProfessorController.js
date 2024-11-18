// controllers/ProfessorController.js
const Professor = require("../models/Professor");

exports.getAll = async (req, res) => {
  try {
    const professores = await Professor.getAll();
    res.json(professores);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar professores" });
  }
};

exports.getById = async (req, res) => {
  try {
    const professor = await Professor.getById(req.params.id);
    res.json(professor);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar professor" });
  }
};

exports.create = async (req, res) => {
  try {
    const result = await Professor.create(req.body);
    res.status(201).json({ id: result[0] });
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar professor" });
  }
};

exports.update = async (req, res) => {
  try {
    await Professor.update(req.params.id, req.body);
    res.json({ success: "Professor atualizado com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar professor" });
  }
};

exports.delete = async (req, res) => {
  try {
    await Professor.delete(req.params.id);
    res.json({ success: "Professor removido com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao remover professor" });
  }
};
