const formulario = document.querySelector("[data-formulario]");
const limpiar = document.getElementById('limpiar');

function limpiarCampos() {
    console.log("Click en el botón 'Limpiar'"); // Verifica si se registra el evento click

    // Obtén todos los elementos con la clase '.campo__escrita'
    const campos = document.querySelectorAll('.campo__escrita');
    console.log("Número de campos encontrados:", campos.length); // Verifica la cantidad de campos encontrados

    // Itera sobre cada campo y limpia su valor
    campos.forEach(function (input) {
        console.log(input); // Para verificar que estás obteniendo los campos correctamente
        input.value = '';
    });
}

limpiar.addEventListener('click', limpiarCampos);

