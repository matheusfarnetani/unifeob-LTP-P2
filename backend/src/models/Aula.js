// models/Aula.js
const BaseModel = require("./BaseModel");

class Aula extends BaseModel {
  constructor() {
    super("aulas");
  }
}

module.exports = new Aula();
