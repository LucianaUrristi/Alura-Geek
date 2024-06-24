import { conexionAPI } from './conexionAPI.js';

const formulario = document.querySelector("[data-formulario]");

export function limpiarCampos(event){
    console.log("asdasd")

    event.preventDefault();
    const limpiar = document.getElementById('limpiar');
    limpiar.addEventListener('click', function () {
        console.log("Click en el botón 'Limpiar'"); // Verifica si se registra el evento click
        
        // Obtén todos los elementos con la clase '.campo__escrita'
        const campos = document.querySelectorAll('.campo__escrita');
        console.log("Número de campos encontrados:", campos.length); // Verifica la cantidad de campos encontrados
        
        // Itera sobre cada campo y limpia su valor
        campos.forEach(function (input) {
            console.log(input); // Para verificar que estás obteniendo los campos correctamente
            input.value = '';
        });
    });
try {
    conexionAPI.enviarProducto(nombre, precio, imagen);
    window.location.href="../pages/envio-concluido.html";

} catch (error) {
    alert(error);
}

    
}

formulario.addEventListener("submit", event => crearVideo(event));