// consumo agregar

const portatilplus = sessionStorage.getItem("portatilplus")+"/admin/notas/";


const cancelar = document.getElementById("cancelar");
cancelar.addEventListener('click',()=>{
    window.location.href= "/dash/notas"
})

// agregar
const agregar = () =>{
    const tarea = document.getElementById("tareas").value;
    const notas = document.getElementById("notas").value;
    const prioridad = document.getElementById("prioridad").value;
    const estado = document.getElementById("estado").value;

    // if(!tarea||!notas||!prioridad||!estado){
    //     Swal.fire("Campos vacios!");
    // }

    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            tarea: tarea,
            notas: notas,
            prioridad: prioridad,
            estado: estado,
        })
    }
   
    fetch(portatilplus, options)
    .then(res => res.json())
    .then(data => {
        if(data.error == false){
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Nota agregada Correctamente",
                showConfirmButton: false,
                timer: 3000
            });
            setTimeout(function () {
                location.href= "/dash/notas";
            }, 1000);
        }else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Error al agregar nota!",
            })
        }
    })
}


// editar nota

const editar = () =>{
    document.getElementById('tareas').value = localStorage.getItem('tareas')
    document.getElementById('notas').value = localStorage.getItem('notas')
    document.getElementById('prioridad').value = localStorage.getItem('prioridad')
    document.getElementById('estado').value = localStorage.getItem('estado')

    console.log(localStorage.getItem('tarea'));
}


