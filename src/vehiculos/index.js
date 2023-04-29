const express = require("express");
const router = express.Router();

const { AutoServices } = require("./services.js");

module.exports.AutoAPI = (app) => {
  router
    .get("/", AutoServices.getAll)
    .get("/:matricula", AutoServices.getOne)
    .post("/", AutoServices.createAuto)
    .put("/:matricula", AutoServices.editAuto)
    .delete("/:matricula", AutoServices.deleteAuto );

  app.use("/Vehiculos", router);
};
