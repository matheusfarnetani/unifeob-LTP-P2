// controllers/AlunoController.js
const Aluno = require("../models/Aluno");

exports.getAll = async (req, res) => {
  try {
    const alunos = await Aluno.getAll();
    res.json(alunos);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar alunos" });
  }
};

exports.getById = async (req, res) => {
  try {
    const aluno = await Aluno.getById(req.params.id);
    res.json(aluno);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar aluno" });
  }
};

exports.create = async (req, res) => {
  try {
    const result = await Aluno.create(req.body);
    res.status(201).json({ id: result[0] });
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar aluno" });
  }
};

exports.update = async (req, res) => {
  try {
    await Aluno.update(req.params.id, req.body);
    res.json({ success: "Aluno atualizado com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar aluno" });
  }
};

exports.delete = async (req, res) => {
  try {
    await Aluno.delete(req.params.id);
    res.json({ success: "Aluno removido com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao remover aluno" });
  }
};
