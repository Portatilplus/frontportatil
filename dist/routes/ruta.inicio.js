"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controllerInicio = require("../controllers/controller.inicio.js");
var rutainicio = (0, _express.Router)();
rutainicio.get("/", _controllerInicio.ruta.login);
var _default = exports["default"] = rutainicio;