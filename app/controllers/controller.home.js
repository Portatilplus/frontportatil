import { config } from "dotenv"
config();

const inicio = (req, res)=>{

    // const tokenprivate = process.env.PRIVATE_KEY;
    res.render("view.nav.dash.ejs")
// , {tokenprivate}
}
const estado = (req, res)=>{
    res.render("view.nav.estado.ejs")
}
const historial = (req, res)=>{
    res.render("view.nav.historial.ejs")

}
// historial
const historialreservas = (req, res) =>{
    res.render("historial/view.his.ejs");
    // historail reserva
}

// historial

const regretiro = (req, res)=>{
    res.render("view.nav.retiro.ejs")
}
const sanciones = (req, res)=>{
    res.render("view.nav.sancion.ejs")
}

const accesorios = (req, res)=>{
    const url = process.env.BACK_URL;
    const options ={
        url:url
    };

    res.render("view.nav.accesorio.ejs", options);
}

const computadores = (req, res)=>{
    const url = process.env.BACK_URL;
    const options ={
        url:url
    };

    res.render("view.nav.computador.ejs", options);
}
const notas = (req, res)=>{
    res.render("view.nav.notas.ejs");
}
const ingrenota = (req, res)=>{
    res.render("view.notaingre.ejs");
}






export const navegacion = {
    inicio,
    estado,
    historial,
    regretiro,
    sanciones,
    accesorios,
    computadores,
    historialreservas,
    notas,
    ingrenota
}
