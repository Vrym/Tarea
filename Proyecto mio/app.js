document.addEventListener('DOMContentLoaded', function(){

const tarea = {
    tarea: ''
}

//Seleccion de elementos
const inputTarea = document.querySelector('#ingreso-tarea');
const btnBorrar = document.querySelector('#borrar');
const btnAgregar = document.querySelector('#agregar');
const formulario = document.querySelector('#form');

inputTarea.addEventListener('input', validar);
formulario.addEventListener('submit', agregarTarea, tareaAgregada);

function agregarTarea(e){
    e.preventDefault();
    const alertaExito = document.createElement('P');
    alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');
    alertaExito.textContent = 'Tarea agregada correctamente';
    formulario.appendChild(alertaExito);
    setTimeout(() => {
        alertaExito.remove();
    }, 2000);
}

function tareaAgregada(e){
    const tareaAgregada = document.createElement('tr');
    tareaAgregada.classList.add('text-black','p2','text-center','text-sm','font-bold');
    tareaAgregada.textContent = tarea.target.value;
    formulario.appendChild(tareaAgregada);
}
    
function validar(evento){
    if(evento.target.value.trim() === ""){
        mostrarAlerta(`Por favor, escribir una tarea`, evento.target.parentElement.parentElement.parentElement);
        tarea[evento.target.id] = '';
        comprobarInput();
        return;
    }
    limpiarAlerta(evento.target.parentElement);
    tarea[evento.target.id] = evento.target.value.trim();
    comprobarInput();
}

function mostrarAlerta(mensaje, referencia){
    limpiarAlerta(referencia);
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');
    referencia.appendChild(error);
}

function limpiarAlerta(referencia) {
    const alerta = referencia.querySelector('.bg-red-600');
    if(alerta){
        alerta.remove();
    }
}

function comprobarInput(){
    if(Object.values(tarea).includes('')){
        btnAgregar.classList.add('opacity-50');
        btnAgregar.disabled = true;  
        return; 
    }else{
        btnAgregar.classList.remove('opacity-50');
        btnAgregar.disabled = false;
        btnAgregar.classList.remove('cursor-not-allowed')
    }
}

})