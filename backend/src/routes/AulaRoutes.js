// routes/AulaRoutes.js
const express = require("express");
const router = express.Router();
const AulaController = require("../controllers/AulaController");

router.get("/", AulaController.getAll);
router.get("/:id", AulaController.getById);
router.post("/", AulaController.create);
router.put("/:id", AulaController.update);
router.delete("/:id", AulaController.delete);

module.exports = router;
