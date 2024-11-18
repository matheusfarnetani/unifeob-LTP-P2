// models/Professor.js
const BaseModel = require("./BaseModel");

class Professor extends BaseModel {
  constructor() {
    super("professores");
  }
}

module.exports = new Professor();
