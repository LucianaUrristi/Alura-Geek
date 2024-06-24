import { conexionAPI } from "./conexionAPI.js";


const lista = document.querySelector("[data-lista]");

export default function  crearCard(nombre, precio, imagen){
    const product = document.createElement("div");

    product.className = "product__item";
    product.innerHTML = `
    
        <img 
        class="product__img"
        src="${imagen}"
        alt="gameboy"
        />
        <div class="product__info">
            <span class="product__titulo">${nombre}</span>
        </div>
        <div class="product__precio__bloque">
        <span class="product__precio">$ ${precio}</span>
        <span class="product__delete"><i class="fas fa-trash-alt"></i></span>
        </div>
    
    `;

    return product;
}

async function listarProductos(){
    try{
        const listaAPI = await conexionAPI.listarProductos();

        listaAPI.forEach(product =>lista.appendChild(crearCard(product.nombre, product.precio, product.imagen)));
        
    }catch{
        lista.innerHTML=`<h2 class="mensaje__error__titulo">Ha ocurrido un problema con la conexion</h2>`
    }
    
}

listarProductos();