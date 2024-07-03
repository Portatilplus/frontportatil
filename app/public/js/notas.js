

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
function editRow(button) {
    // Obtener la fila correspondiente al botón de edición
    const row = button.parentElement.parentElement;

    // Obtener los datos de la fila
    const name = row.cells[0].innerText;
    const age = row.cells[1].innerText;

    // Guardar los datos en localStorage
    localStorage.setItem('editName', name);
    localStorage.setItem('editAge', age);

    // Redirigir a la página de edición
    window.location.href = 'edit.html';
}

// function enviarnota(idnotas, tarea, notas, prioridad, estado) {


//     localStorage.setItem('tareaform',tarea);
//     localStorage.setItem('notasform',notas);
//     localStorage.setItem('prioridadform',prioridad);
//     localStorage.setItem('estadoform',estado);
//     // redirigi
//     window.location.href= "/dash/ingresarnotas"
// }


// borrar notas

const on = (element, event, selector, handler)=>{
    element.addEventListener(event, (e)=>{
        if(e.target.closest(selector)){
            handler(e);
        }
    });
}

on(document, 'click', '.btnborrar', e=>{
    const fila = e.target.parentNode.parentNode;
    const idnotas = fila.firstElementChild.innerHTML;
    

    Swal.fire({
        title: "Estas Seguro?",
        text: "No podras revertirlo",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar!"
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(portatilplus + idnotas, {
                method: "DELETE",
                headers:{
                    "Content-Type": "application/json"
                }
            })
            .then(res => res.json())
            .then(data => {
                if(data.error){
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Hubo un problema al eliminar sancion!",
                      });
                }else{
                    Swal.fire({
                        title: "Eliminado!",
                        text: "La sancion ha sido eliminada.",
                        icon: "success"
                      }).then(()=>{
                        location.reload()
                      })
                }
            })
            .catch(error => console.error(error));

        }
      });
})

