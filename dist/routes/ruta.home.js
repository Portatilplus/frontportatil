import { Router } from "express";
import { navegacion } from "../controllers/controller.home.js";

const rutahome = Router();



rutahome.get("/", navegacion.inicio);
rutahome.get("/salvo", navegacion.pazysalvo);
rutahome.get("/historial", navegacion.historial);
// histroial
rutahome.get("/reserva", navegacion.historialreservas);
rutahome.get("/paz", navegacion.listarpazysalvo);
rutahome.get("/editarpaz", navegacion.editarpazysalvo);

// historial
rutahome.get("/politica", navegacion.politicas);
rutahome.get("/notificaciones", navegacion.correos);
rutahome.get("/sanciones", navegacion.sanciones);
rutahome.get("/accesorio", navegacion.accesorios);
rutahome.get("/computador", navegacion.computadores);
rutahome.get("/notas", navegacion.notas);
rutahome.get("/ingresarnotas", navegacion.ingrenota);
rutahome.get("/editarnotas", navegacion.editarnota);


export default rutahome
