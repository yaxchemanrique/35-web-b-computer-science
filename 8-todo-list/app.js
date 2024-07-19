class Tarea{
  constructor(estatus, area, prioridad, contenido, index) {
    this.estatus = estatus; //incompleto o completo
    this.area = area; //escuela, trabajo o personal
    this.prioridad = prioridad; //urgente o no urgente
    this.contenido = contenido;
    this.index = index;
  }
}
let i = 0;
let todasLasTareas = [];

const tarea1 = new Tarea('false', 'escuela', 'true', "hacer el proyecto final", i)

// const tareaContenidoInput = document.getElementById('tarea')
// const tareaContenidoInput = document.querySelector('[name="tarea"]')
const tareaContenidoInput = document.querySelector('#tarea');
const agregarTareaBoton = document.querySelector('#agregar-tarea');


function agregarNuevaTarea(e) {
  e.preventDefault();
  let contenido = tareaContenidoInput.value;
  let estatusSeleccionado = document.querySelector('[name="estatus"]:checked').value;
  let areaSeleccionado = document.querySelector('[name="area"]:checked').value;
  let prioridadSeleccionado = document.querySelector('[name="prioridad"]:checked').value;

  const nuevaTarea = new Tarea(estatusSeleccionado, areaSeleccionado, prioridadSeleccionado, contenido, i);
  i++;
  todasLasTareas.push(nuevaTarea);
  //actualicen el local Storage
  console.log(todasLasTareas)
  renderTodasLasTareas();
}

agregarTareaBoton.addEventListener('click', agregarNuevaTarea);


const tareasIncompletasDiv = document.querySelector('.tareas-incompletas');
const tareasCompletasDiv = document.querySelector('.tareas-completas');

function renderTodasLasTareas() {
  // 1. crear el elemnto
  // 2. ponerle contenido
  // 3. appendChild()
  tareasIncompletasDiv.innerHTML = '';
  for(let i = 0; i < todasLasTareas.length; i++){
    const tareaDiv = document.createElement('div');
    tareaDiv.setAttribute('class', 'tarea');
    const innerHtml = `
      <input ${todasLasTareas[i].estatus === 'completo' ? 'checked' : ''} type="checkbox" name="tarea-${todasLasTareas[i].index}" id="tarea-${todasLasTareas[i].index}">
      <label for="tarea-${todasLasTareas[i].index}">${todasLasTareas[i].contenido}</label>
      <button>eliminar</button>
    `
    tareaDiv.innerHTML = innerHtml;
    if(todasLasTareas[i].estatus === 'completo') {
      tareasCompletasDiv.appendChild(tareaDiv);
    } else if(todasLasTareas[i].estatus === 'incompleto') {
      tareasIncompletasDiv.appendChild(tareaDiv);
    }
  }
}