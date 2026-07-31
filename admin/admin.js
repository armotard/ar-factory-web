const tabla =
document.getElementById("tablaProductos");

productos.forEach(producto=>{

tabla.innerHTML+=`

<tr>

<td>

<img
src="../${producto.imagenes[0]}"
width="70">

</td>

<td>

${producto.nombre}

</td>

<td>

${producto.precio} €

</td>

<td>

${producto.stock}

</td>

<td>

${producto.estado}

</td>

<td>

<button>

Editar

</button>

</td>

</tr>

`;

});
