"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controllerHome = require("../controllers/controller.home.js");
var rutahome = (0, _express.Router)();
rutahome.get("/", _controllerHome.navegacion.inicio);
rutahome.get("/estado", _controllerHome.navegacion.estado);
rutahome.get("/historial", _controllerHome.navegacion.historial);
// histroial
rutahome.get("/reserva", _controllerHome.navegacion.historialreservas);

// historial
rutahome.get("/retiro", _controllerHome.navegacion.regretiro);
rutahome.get("/sanciones", _controllerHome.navegacion.sanciones);
rutahome.get("/accesorio", _controllerHome.navegacion.accesorios);
rutahome.get("/computador", _controllerHome.navegacion.computadores);
rutahome.get("/notas", _controllerHome.navegacion.notas);
rutahome.get("/ingresarnotas", _controllerHome.navegacion.ingrenota);
var _default = exports["default"] = rutahome;