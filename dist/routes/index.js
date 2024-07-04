"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _rutaInicio = _interopRequireDefault(require("./ruta.inicio.js"));
var _rutaHome = _interopRequireDefault(require("./ruta.home.js"));
var rutas = (0, _express.Router)();
rutas.use("/", _rutaInicio["default"]);
rutas.use("/dash", _rutaHome["default"]);
var _default = exports["default"] = rutas;