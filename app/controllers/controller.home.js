import { config } from "dotenv"
config();

const inicio = (req, res)=>{

    // const tokenprivate = process.env.PRIVATE_KEY;
    res.render("view.nav.dash.ejs")
// , {tokenprivate}
}
const estado = (req, res)=>{
    const url = process.env.BACK_URL;
    const options ={
        url:url
    };
    
    res.render("view.nav.estado.ejs", options)
}
const historial = (req, res)=>{
    const url = process.env.BACK_URL;
    const options ={
        url:url
    };

    res.render("view.nav.historial.ejs", options)

}
// historial
const historialreservas = (req, res) =>{
    const url = process.env.BACK_URL;
    const options ={
        url:url
    };
    res.render("historial/view.his.ejs",options);
    // historail reserva
}

// historial

const regretiro = (req, res)=>{
    const url = process.env.BACK_URL;
    const options ={
        url:url
    };

    res.render("view.nav.retiro.ejs",options)
}
const sanciones = (req, res)=>{
    const url = process.env.BACK_URL;
    const options ={
        url:url
    };
    res.render("view.nav.sancion.ejs",options)
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
    const url = process.env.BACK_URL;
    const options ={
        url:url
    };
    res.render("view.nav.notas.ejs",options);
}
const ingrenota = (req, res)=>{
    const url = process.env.BACK_URL;
    const options ={
        url:url
    };

    res.render("view.notaingre.ejs", options);
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
