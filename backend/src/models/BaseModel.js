// models/BaseModel.js
const db = require("../db/knexfile");

class BaseModel {
  constructor(tableName) {
    this.tableName = tableName;
  }

  getAll() {
    return db(this.tableName).select("*");
  }

  getById(id) {
    return db(this.tableName).where("id", id).first();
  }

  create(data) {
    return db(this.tableName)
      .insert(data)
      .catch((error) => {
        console.error(`Erro ao inserir na tabela ${this.tableName}:`, error);
        throw error;
      });
  }

  update(id, data) {
    return db(this.tableName).where("id", id).update(data);
  }

  delete(id) {
    return db(this.tableName).where("id", id).del();
  }
}

module.exports = BaseModel;
