// Obtener el parámetro id de la URL

const parametros =
  new URLSearchParams(window.location.search);


// Obtener el valor del id

const idProducto =
  parametros.get("id");


// Buscar el producto correspondiente

const producto =
  productos.find(
    producto => producto.id == idProducto
  );


// Obtener el contenedor

const contenedor =
  document.getElementById("producto-contenido");
