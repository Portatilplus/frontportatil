// consumo agregar

const url = document.getElementById("url").value;

sessionStorage.setItem("portatilplus", url);

const portatilplus = sessionStorage.getItem("portatilplus")+"/admin/notas/";


// agregar


const formnotas = document.querySelector('form__nota');

const tarea = document.getElementById('tareas').value;
const nota = document.getElementById('notas').value;
const prioridad = document.getElementById('prioridad').value;
const estado = document.getElementById('estado').value;


const optios = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        tarea: tarea,
        notas: nota,
        prioridad: prioridad,
        estado:estado
    })
}
fetch(portatilplus,optios)
.then(res => res.json())
.then(data => {
    // if(!tarea || !nota || !prioridad || !estado){
        //     return;
        //     Swal.fire("Campos vacios!");
        // }
        window.location.href ="/dash/notas";
})




