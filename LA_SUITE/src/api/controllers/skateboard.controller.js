const Skateboard = require('../models/skateboard.model');
const { HTTPSTATUSCODE } = require("../../utils/httpStatusCode");

const createSkateboard = async (req, res, next) => {
  try {
    const skateboard = await    Skateboard.create(req.body);
    res.status(201).json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      data: skateboard,
    });
  } catch (error) {
    next(error);
  }
};

const getAllSkateboards = async (req, res, next) => {
  try {
    const allSkateboards = await Skateboard.find();
      return res.status(200).json(allSkateboards);
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: Skateboards,
    });
  } catch (error) {
    next(error);
  }
};

const getSkateboardById = async (req, res, next) => {
  try {
    const skateboard = await Skateboard.findById(req.params.id);
    if (skateboard) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: skateboard,
      });
    } else {
      res.status(404).json({ status: 404, message: "Skateboard not found" });
    }
  } catch (error) {
    next(error);
  }
};

const updateSkateboard = async (req, res, next) => {
  try {
    const skateboard = await Skateboard.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (skateboard) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: skateboard,
      });
    } else {
      res.status(404).json({ status: 404, message: "Skateboard not found" });
    }
  } catch (error) {
    next(error);
  }
};

const deleteSkateboard = async (req, res, next) => {
  try {
    const skateboard = await Skateboard.findByIdAndDelete(req.params.id);
    if (skateboard) {
      res.status(204).json({ status: 204, message: "Skateboard deleted" });
    } else {
      res.status(404).json({ status: 404, message: "Skateboard not found" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createSkateboard,
  getAllSkateboards,
  getSkateboardById,
  updateSkateboard,
  deleteSkateboard,
};  