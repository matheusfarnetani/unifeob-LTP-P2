// controllers/AulaController.js
const Aula = require("../models/Aula");
const Professor = require("../models/Professor"); // Importar o modelo de professor para validação

exports.getAll = async (req, res) => {
  try {
    const aulas = await Aula.getAll();
    res.json(aulas);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar aulas" });
  }
};

exports.getById = async (req, res) => {
  try {
    const aula = await Aula.getById(req.params.id);
    res.json(aula);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar aula" });
  }
};

exports.create = async (req, res) => {
  try {
    const { nome, professores_id } = req.body;

    // Validação dos campos obrigatórios
    if (!nome || !professores_id) {
      return res
        .status(400)
        .json({ error: "Nome e professores_id são obrigatórios" });
    }

    // Criar a aula
    const result = await Aula.create({ nome, professores_id });
    res.status(201).json({ id: result[0] });
  } catch (error) {
    console.error("Erro ao criar aula:", error);
    res.status(500).json({ error: "Erro ao criar aula" });
  }
};

exports.update = async (req, res) => {
  try {
    await Aula.update(req.params.id, req.body);
    res.json({ success: "Aula atualizada com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar aula" });
  }
};

exports.delete = async (req, res) => {
  try {
    await Aula.delete(req.params.id);
    res.json({ success: "Aula removida com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao remover aula" });
  }
};
