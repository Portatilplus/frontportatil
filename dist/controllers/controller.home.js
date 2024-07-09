import { config } from "dotenv"
config();

const inicio = (req, res)=>{

    // const tokenprivate = process.env.PRIVATE_KEY;
    res.render("view.nav.dash.ejs")
// , {tokenprivate}
}
const pazysalvo = (req, res)=>{
    const url = process.env.BACK_URL;
    const options ={
        url:url
    };
    
    res.render("view.nav.paz.ejs", options)
}
const listarpazysalvo = (req, res)=>{
    const url = process.env.BACK_URL;
    const options ={
        url:url
    };
    
    res.render("historial/view.paz.ejs", options)
}
const editarpazysalvo = (req, res)=>{
    const url = process.env.BACK_URL;
    const options ={
        url:url
    };
    
    res.render("editar.paz.ejs", options)
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

const correos = (req, res)=>{
    const url = process.env.BACK_URL;
    const options ={
        url:url
    };

    res.render("view.nav.correos.ejs",options)
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
// }edutar
const editarnota = (req, res)=>{
    const url = process.env.BACK_URL;
    const options ={
        url:url
    };

    res.render("view.editar.nota.ejs", options);
}
const notascompletas = (req, res)=>{
    const url = process.env.BACK_URL;
    const options ={
        url:url
    };

    res.render("historial/notas.completas.ejs", options);
}






export const navegacion = {
    inicio,
    pazysalvo,
    listarpazysalvo,
    editarpazysalvo,
    historial,
    correos,
    sanciones,
    accesorios,
    computadores,
    historialreservas,
    notas,
    ingrenota,
    editarnota,
    notascompletas
}
