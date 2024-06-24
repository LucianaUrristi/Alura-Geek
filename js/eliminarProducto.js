import { conexionAPI } from "./conexionAPI";

const lista = document.querySelector("[data-lista]");

async function deleteCard(event) {
    // Verifica si el clic ocurrió en el ícono de eliminar (product__delete)
    if (event.target.classList.contains('product__delete')) {
        const iconoEliminar = event.target; // Elemento clickeado (ícono de eliminar)
        const producto = iconoEliminar.closest('.product__item'); // Encuentra el elemento padre del ícono de eliminar

        try {
            // Puedes obtener el ID del producto de alguna manera, por ejemplo, a través de un atributo data-* del artículo
            const id = producto.con.id; // Asegúrate de que el atributo data-product-id esté definido en tu HTML

            // Llama a la función para eliminar el producto en la API
            await conexionAPI.eliminarProducto(productId);

            // Elimina el elemento del DOM después de eliminarlo en la API
            producto.remove();
        } catch (error) {
            console.error('Error al eliminar el producto:', error);
            // Aquí podrías mostrar un mensaje de error al usuario si la eliminación falla
        }
    }
}

// Escucha los clics en la lista para activar la función deleteCard
lista.addEventListener("click", deleteCard);