// routes/AlunoRoutes.js
const express = require("express");
const router = express.Router();
const AlunoController = require("../controllers/AlunoController");

router.get("/", AlunoController.getAll);
router.get("/:id", AlunoController.getById);
router.post("/", AlunoController.create);
router.put("/:id", AlunoController.update);
router.delete("/:id", AlunoController.delete);

module.exports = router;
