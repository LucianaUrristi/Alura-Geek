async function listarProductos(){
    const conexion = await fetch("http://localhost:3001/products");
    const conexionConvertida = conexion.json();
    return conexionConvertida;
}

async function enviarProducto(nombre, precio, imagen){
    const conexion = await fetch("http://localhost:3001/products", {
        method:"POST",
        headers:{"Content-type":"application/json"},
        body: JSON.stringify({
            nombre:nombre,
            precio:precio,
            imagen:imagen
        })
    })
    const conexionConvertida = conexion.json();

    if(!conexion.ok){
        throw new Error("Ha ocurrido un error al enviar el producto.");
    }

    return conexionConvertida;
}

export async function eliminarProducto(id) {
    try {
        const response = await fetch(`${conexion}/products/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('No se pudo eliminar el producto');
        }

        
        return response.json();
    } catch (error) {
        console.error('Error al eliminar el producto:', error);
        throw error; 
    }
}

export const conexionAPI={
    listarProductos, enviarProducto, eliminarProducto
}


