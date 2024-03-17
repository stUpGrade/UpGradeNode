const express = require('express');
const ejeRouter = express.Router();

const {
  createEje,
  getAllEjes,
  getEjeById,
  updateEje,
  deleteEje,
} = require('../controllers/eje.controller');

ejeRouter.post("/", createEje);
ejeRouter.get("/", getAllEjes);
ejeRouter.get("/:id", getEjeById);
ejeRouter.put("/:id", updateEje);
ejeRouter.delete("/:id", deleteEje);

module.exports = ejeRouter;