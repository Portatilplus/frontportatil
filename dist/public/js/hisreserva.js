const url = document.getElementById("url").value;

sessionStorage.setItem("portatilplus", url);

const portatilplus = sessionStorage.getItem("portatilplus")+"/admin/historialreserva";

// consumir
fetch(portatilplus)
.then(res=>res.json())
.then(data=>{
    if(data.error){
        console.error("error al mostrar los datos", data);
    }else{
        mostrar(data.body[0]);
    }
})
.catch(error => console.error("error al mostrar",error))


// mostrar los resultados

const mostrar = (data) =>{
let body = ''
for(let i = 0; i<data.length; i++){
    body += `
        <li>
                    <div class="cartas">
                        <div class="img__container">
                            <img src="../img/sena.png" alt="" width="100" height="100">
                            <p>${data[i].id_registro_computador}</p>
                            <p>${data[i].id_reserva}</p>
                        </div>
                        <div class="info">
                            <h3>${data[i].nombre}</h3>
                            <p>${data[i].id_accesorio}</p>
                            <p>${data[i].estado}</p>
                            <p>${data[i].fecha}</p>
                        </div>
                    </div>
                </li>
    `
}
document.getElementById('data').innerHTML = body;
}