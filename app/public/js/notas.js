const url = document.getElementById("url").value;
sessionStorage.setItem("portatilplus", url);
const portatilplus = sessionStorage.getItem("portatilplus") + "/admin/notas/";

const btnnuevo = document.getElementById('btnnuevo');
btnnuevo.addEventListener('click', () => {
    window.location.href = "/dash/ingresarnotas"
})

fetch(portatilplus)
    .then(res => res.json())
    .then(data => {
        if (data.error) {
            console.log("error en el fetch", data);
        } else {
            mostrar(data.body[0]);
        }
    })
    .catch(error => { console.log(error) })


// datos
const mostrar = (data) => {
    let body = ''
    for (let i = 0; i < data.length; i++) {
        body += `
        <tr>
            <td>${data[i].idnotas}</td>
            <td class="tarea">${data[i].tarea}</td>
            <td>${data[i].notas}</td>
            <td class="prioridad">${data[i].prioridad}</td>
            <td class="estado">
                <select name="estado" class="estado-select form" onchange="cambiarEstado(event, ${data[i].idnotas})">
                    <option value="Pendiente" ${data[i].estado === 'Pendiente' ? 'selected' : ''} class="form">Pendiente</option>
                    <option value="Completado" ${data[i].estado === 'Completado' ? 'selected' : ''} class="form">Completado</option>
                </select>
            </td>
            <td class="btn-container">
                <i class='bx bx-edit btneditar' onclick="enviarnota(event);"></i>
                <i class='bx bx-trash btnborrar'></i>
            </td>
        </tr>`;
    }
    document.getElementById('data').innerHTML = body;
}

// Cambiar estado
function cambiarEstado(event, idnotas) {
    const estado = event.target.value;
    if (estado === 'Completado') {
        Swal.fire({
            title: "Estas Seguro?",
            text: "Esta acción eliminará la tarea.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminar!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(portatilplus + idnotas, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.error) {
                            Swal.fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Hubo un problema al eliminar la tarea!",
                            });
                        } else {
                            Swal.fire({
                                title: "Eliminado!",
                                text: "La tarea ha sido eliminada.",
                                icon: "success"
                            }).then(() => {
                                location.reload();
                            })
                        }
                    })
                    .catch(error => console.error(error));
            } else {
                // Revertir al estado anterior si el usuario cancela la eliminación
                event.target.value = 'Pendiente';
            }
        });
    }
}

// editar notas
function enviarnota(event) {
    const fila = event.target.parentElement.parentElement;
    const idnotas = fila.cells[0].innerText;
    const tarea = fila.cells[1].innerText;
    const notas = fila.cells[2].innerText;
    const prioridad = fila.cells[3].innerText;
    const estado = fila.cells[4].innerText;

    sessionStorage.setItem('idnotas', idnotas);
    sessionStorage.setItem('tarea', tarea);
    sessionStorage.setItem('notas', notas);
    sessionStorage.setItem('prioridad', prioridad);
    sessionStorage.setItem('estado', estado);

    window.location.href = "/dash/ingresarnotas";
}

// borrar notas
const on = (element, event, selector, handler) => {
    element.addEventListener(event, (e) => {
        if (e.target.closest(selector)) {
            handler(e);
        }
    });
}

on(document, 'click', '.btnborrar', e => {
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
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.error) {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Hubo un problema al eliminar la tarea!",
                        });
                    } else {
                        Swal.fire({
                            title: "Eliminado!",
                            text: "La tarea ha sido eliminada.",
                            icon: "success"
                        }).then(() => {
                            location.reload();
                        })
                    }
                })
                .catch(error => console.error(error));
        }
    });
})

// buscador crud
document.getElementById('buscador').addEventListener('keyup', e => {
    const query = e.target.value.toLowerCase();
    document.querySelectorAll('#data tr').forEach(row => {
        const tarea = row.querySelector('.tarea').textContent.toLowerCase();
        const prioridad = row.querySelector('.prioridad').textContent.toLowerCase();
        if (tarea.includes(query) || prioridad.includes(query)) {
            row.classList.remove('filtro')
        } else {
            row.classList.add('filtro')
        }
    });
});

const style = document.createElement('style');
style.innerHTML = `
    .filtro {
        display: none;
    }
`;
document.head.appendChild(style);
