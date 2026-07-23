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


// Mostrar la información del producto

if (producto) {

  contenedor.innerHTML = `

    <div class="product-detail-image">

      <img
        src="${producto.imagen}"
        alt="${producto.nombre}"
      >

    </div>


    <div class="product-detail-info">


      <p class="product-category">

        ${producto.categoria}

      </p>


      <h1>

        ${producto.nombre}

      </h1>


      <p class="product-detail-description">

        ${producto.descripcion}

      </p>


      <div class="product-details">

        ${producto.detalles.map(detalle => `

          <span>
            ✓ ${detalle}
          </span>

        `).join("")}

      </div>


      <p class="product-price">

        ${producto.precio.toFixed(2)} €

      </p>


      <a

        href="${producto.enlaceCompra}"

        target="_blank"

        class="button button-primary"

      >

        COMPRAR

      </a>


    </div>

  `;

}
