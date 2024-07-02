// consumo agregar

let url = 'http://localhost:5000/admin/notas'

const tarea = document.getElementById('tarea').value;
const nota = document.getElementById('notas').value;
const prioridad = document.getElementById('prioridad').value;
const estado = document.getElementById('estado').value;

fetch()




document.getElementById('tareas').innerText = localStorage.getItem('tareaform');
document.getElementById('notas').innerText = localStorage.getItem('notasform');
document.getElementById('prioridad').innerText = localStorage.getItem('prioridadform');
document.getElementById('estado').innerText = localStorage.getItem('estadoform');