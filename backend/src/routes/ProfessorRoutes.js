// routes/ProfessorRoutes.js
const express = require("express");
const router = express.Router();
const ProfessorController = require("../controllers/ProfessorController");

router.get("/", ProfessorController.getAll);
router.get("/:id", ProfessorController.getById);
router.post("/", ProfessorController.create);
router.put("/:id", ProfessorController.update);
router.delete("/:id", ProfessorController.delete);

module.exports = router;
