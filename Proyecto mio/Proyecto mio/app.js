document.addEventListener('DOMContentLoaded', function(){

const tarea = {
    tarea: ''
}

//Seleccion de elementos
const inputTarea = document.querySelector('#ingreso-tarea');
const btnBorrar = document.querySelector('#borrar');
const btnAgregar = document.querySelector('#agregar');
const formulario = document.querySelector('#form');
const tareasEscritas = document.querySelector('#tareas-escritas');

inputTarea.addEventListener('change', validar);
formulario.addEventListener('submit', agregarTarea);
btnBorrar.addEventListener('click', function(e){
    e.preventDefault();
    resetForm();
})


function agregarTarea(e){
    e.preventDefault();
    const alertaExito = document.createElement('p');
    alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');
    alertaExito.textContent = 'Tarea agregada correctamente';
    formulario.appendChild(alertaExito);
    setTimeout(() => {
        alertaExito.remove();
    }, 1000);
    const tareaAgregada = document.createElement('p');
    tareaAgregada.classList.add('bg-gray-400', 'text-black', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase')
    tareaAgregada.innerHTML = document.getElementById("tarea").value;
    formulario.appendChild(tareaAgregada);
}

    
function validar(evento){
    console.log(tarea)
    if(evento.target.value.trim() === ""){
        mostrarAlerta(`Por favor, escribir una tarea`, evento.target.parentElement.parentElement.parentElement);
        tarea[evento.target.id] = '';
        comprobarInput();
        return;
    }
    limpiarAlerta(evento.target.parentElement.parentElement.parentElement);
    tarea[evento.target.id] = evento.target.value;
    comprobarInput();
}

function mostrarAlerta(mensaje, referencia){
    limpiarAlerta(referencia);
    const error = document.createElement('p');
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
    if(!tarea.tarea){
        btnAgregar.classList.add('opacity-50');
        btnAgregar.disabled = true;  
        return; 
    }else{
        btnAgregar.classList.remove('opacity-50');
        btnAgregar.disabled = false;
        btnAgregar.classList.remove('cursor-not-allowed')
    }
}
function resetForm(){
    tarea.tarea = '';
    formulario.reset();
    comprobarInput();
    btnAgregar.classList.add('opacity-50');
    btnAgregar.disabled = true;  
    btnAgregar.classList.add('cursor-not-allowed')

}

})



