const express = require('express');
const skateboardRouter = express.Router();

const {
  createSkateboard,
  getAllSkateboards,
  getSkateboardById,
  updateSkateboard,
  deleteSkateboard,
} = require('../controllers/skateboard.controller');

skateboardRouter.post("/", createSkateboard);
skateboardRouter.get("/", getAllSkateboards);
skateboardRouter.get("/:id", getSkateboardById);
skateboardRouter.put("/:id", updateSkateboard);
skateboardRouter.delete("/:id", deleteSkateboard);

module.exports = skateboardRouter;