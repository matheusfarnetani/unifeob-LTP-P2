// models/Aluno.js
const BaseModel = require("./BaseModel");

class Aluno extends BaseModel {
  constructor() {
    super("alunos");
  }
}

module.exports = new Aluno();
