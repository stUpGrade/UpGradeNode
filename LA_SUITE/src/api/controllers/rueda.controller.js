// 1. LLAMAR AL MODELO
const Rueda = require('../models/rueda.model');
const { HTTPSTATUSCODE } = require("../../utils/httpStatusCode");

// 2. CREAR LAS FUNCIONES CRUD (GET, POST, PATCH, DELETE)

// localhost:3000/room/65e0e8046d04e8604e3d8f36
const createRueda = async (req, res, next) => {
  try {
    const rueda = await Rueda.create(req.body);
    res.status(201).json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      data: rueda,
    });
  } catch (error) {
    next(error);
  }
};

const getAllRueda = async (req, res, next) => {
  try {
    const tracks = await Rueda.find();
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: tracks,
    });
  } catch (error) {
    next(error);
  }
};

const getRuedaById = async (req, res, next) => {
  try {
    const rueda = await Rueda.findById(req.params.id);
    if (rueda) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: rueda,
      });
    } else {
      res.status(404).json({ status: 404, message: "Rueda not found" });
    }
  } catch (error) {
    next(error);
  }
};

const updateRueda = async (req, res, next) => {
  try {
    const rueda = await Rueda.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (rueda) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: rueda,
      });
    } else {
      res.status(404).json({ status: 404, message: "Rueda not found" });
    }
  } catch (error) {
    next(error);
  }
};

const deleteRueda = async (req, res, next) => {
  try {
    const rueda = await Rueda.findByIdAndDelete(req.params.id);
    if (rueda) {
      res.status(204).json({ status: 204, message: "Rueda deleted" });
    } else {
      res.status(404).json({ status: 404, message: "Rueda not found" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createRueda,
  getAllRueda,
  getRuedaById,
  updateRueda,
  deleteRueda,
};
