

const url = document.getElementById("url").value;

sessionStorage.setItem("portatilplus", url);

const portatilplus = sessionStorage.getItem("portatilplus")+"/admin/notas/";


const btnnuevo = document.getElementById('btnnuevo');

btnnuevo.addEventListener('click', () => {
    window.location.href= "/dash/ingresarnotas"
})

fetch(portatilplus)
.then(res => res.json())
.then(data =>{
    if(data.error){
        console.log("error en el fetch", data);
    }else{
        mostrar(data.body[0]);
    }
})
.catch(error => {console.log(error)})


// datos



const mostrar = (data) =>{
    console.log(data);
    let body = ''
    for(let i = 0; i<data.length; i++){
        body += `
        <tr>
            <td class="marca">${data[i].idnotas}</td>
            <td class="marca">${data[i].tarea}</td>
            <td>${data[i].notas}</td>
            <td>${data[i].prioridad}</td>
            <td class="estado">${data[i].estado}</td>
            <td class="btn-container">
                <i class='bx bx-edit btneditar' onclick="enviarnota('${data[i].idnotas}',
                '${data[i].tarea}','${data[i].notas}', 
                '${data[i].prioridad}','${data[i].estado}');"></i>
                <i class='bx bx-trash btnborrar'></i>
            </td>
        </tr>`;
    }
    document.getElementById('data').innerHTML = body;
}

function enviarnota(idnotas, tarea, notas, prioridad, estado) {


    localStorage.setItem('tareaform',tarea);
    localStorage.setItem('notasform',notas);
    localStorage.setItem('prioridadform',prioridad);
    localStorage.setItem('estadoform',estado);
    // redirigi
    window.location.href= "/dash/ingresarnotas"
}


