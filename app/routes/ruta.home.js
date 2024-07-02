import { Router } from "express";
import { navegacion } from "../controllers/controller.home.js";

const rutahome = Router();



rutahome.get("/", navegacion.inicio);
rutahome.get("/estado", navegacion.estado);
rutahome.get("/historial", navegacion.historial);
// histroial
rutahome.get("/reserva", navegacion.historialreservas);

// historial
rutahome.get("/retiro", navegacion.regretiro);
rutahome.get("/sanciones", navegacion.sanciones);
rutahome.get("/accesorio", navegacion.accesorios);
rutahome.get("/computador", navegacion.computadores);
rutahome.get("/notas", navegacion.notas);
rutahome.get("/ingresarnotas", navegacion.ingrenota);


export default rutahome
