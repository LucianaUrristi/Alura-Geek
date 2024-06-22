import { conexionAPI } from "./conexionAPI.js";


const lista = document.querySelector("[data-lista]");

export default function  crearCard(nombre, precio, imagen){
    const product = document.createElement("li");

    product.className = "product__item";
    product.innerHTML = `<iframe width="100%" height="72%"
    name="${nombre}" frameborder="0"
    clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
    <div class="descripcion-video">
        <img src="./img/logoo.png" alt="logo canal alura">
        <h3>${nombre}</h3>
        <p>${precio}</p>
    </div>
    `;

    return product;
}

async function listarProductos(){
    try{
        const listaAPI = await conexionAPI.listarProductos();

        listaAPI.forEach(product =>lista.appendChild(crearCard(product.nombre, product.precio, product.imagen)));
        
    }catch{
        lista.innerHTML=`<h2 class="mensaje__titulo">Ha ocurrido un problema con la conexion</h2>`
    }
    
}

listarProductos();