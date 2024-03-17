const Eje = require('../models/eje.model');
const { HTTPSTATUSCODE } = require("../../utils/httpStatusCode");

const createEje = async (req, res, next) => {
  try {
    const eje = await Eje.create(req.body);
    res.status(201).json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      data: eje,
    });
  } catch (error) {
    next(error);
  }
};

const getAllEjes = async (req, res, next) => {
  try {
    const ejes = await Eje.find();
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: ejes,
    });
  } catch (error) {
    next(error);
  }
};

const getEjeById = async (req, res, next) => {
  try {
    const eje = await Eje.findById(req.params.id);
    if (eje) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: eje,
      });
    } else {
      res.status(404).json({ status: 404, message: "Eje not found" });
    }
  } catch (error) {
    next(error);
  }
};

const updateEje = async (req, res, next) => {
  try {
    const eje = await Eje.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (eje) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: eje,
      });
    } else {
      res.status(404).json({ status: 404, message: "Eje not found" });
    }
  } catch (error) {
    next(error);
  }
};

const deleteEje = async (req, res, next) => {
  try {
    const eje = await Eje.findByIdAndDelete(req.params.id);
    if (eje) {
      res.status(204).json({ status: 204, message: "Eje deleted" });
    } else {
      res.status(404).json({ status: 404, message: "Eje not found" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createEje,
  getAllEjes,
  getEjeById,
  updateEje,
  deleteEje,
};




