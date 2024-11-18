// routes/MatriculaRoutes.js
const express = require("express");
const router = express.Router();
const MatriculaController = require("../controllers/MatriculaController");

router.get("/", MatriculaController.getAll);
router.get("/:id", MatriculaController.getById);
router.post("/", MatriculaController.create);
router.put("/:id", MatriculaController.update);
router.delete("/:id", MatriculaController.delete);

module.exports = router;
