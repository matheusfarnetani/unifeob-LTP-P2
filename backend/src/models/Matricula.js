// models/Matricula.js
const BaseModel = require("./BaseModel");
const db = require("../db/knexfile");

class Matricula extends BaseModel {
  constructor() {
    super("matriculas");
  }

  // Método específico para buscar matrículas com informações dos alunos e aulas
  getAllWithJoins() {
    return db(this.tableName)
      .join("alunos", "matriculas.alunos_id", "alunos.id")
      .join("aulas", "matriculas.aulas_id", "aulas.id")
      .select(
        "matriculas.*",
        "alunos.nome as alunoNome",
        "aulas.nome as aulaNome"
      );
  }
}

module.exports = new Matricula();
