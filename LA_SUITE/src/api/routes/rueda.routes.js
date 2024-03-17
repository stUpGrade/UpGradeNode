const express = require('express');
const ruedaRouter = express.Router();

const {
  createRueda,
  getAllRueda,
  getRuedaById,
  updateRueda,
  deleteRueda,
} = require('../controllers/rueda.controller');

ruedaRouter.post("/", createRueda);
ruedaRouter.get("/", getAllRueda);
ruedaRouter.get("/:id", getRuedaById);
ruedaRouter.put("/:id", updateRueda);
ruedaRouter.delete("/:id", deleteRueda);

module.exports = ruedaRouter;