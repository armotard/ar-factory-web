const contenedorProductos =
  document.getElementById("catalogo-productos");


const contenedorFiltros =
  document.getElementById("filtros-categorias");


function mostrarProductos(categoria = "todos") {

  contenedorProductos.innerHTML = "";


  const productosFiltrados =
    categoria === "todos"

      ? productos

      : productos.filter(
          producto => producto.categoria === categoria
        );


  productosFiltrados.forEach(producto => {


    const tarjeta =
      document.createElement("article");


    tarjeta.classList.add("product-card");


    tarjeta.innerHTML = `

      <div class="product-image">

        <img

          src="${producto.imagenes[0]}"

          alt="${producto.nombre}"

        >

      </div>


      <div class="product-info">


        <p class="product-category">

          ${producto.categoriaNombre}

        </p>


        <h3>

          ${producto.nombre}

        </h3>


        <p>

          ${producto.descripcion}

        </p>


        <p class="product-price">

          ${producto.precio.toFixed(2)} €

        </p>


        <a

          href="producto.html?id=${producto.id}"

          class="button button-primary"

        >

          VER PRODUCTO

        </a>


      </div>

    `;


    contenedorProductos.appendChild(tarjeta);

  });

}
const categorias =
  [...new Set(
    productos.map(
      producto => producto.categoria
    )
  )];
categorias.forEach(categoria => {

  const producto =
    productos.find(
      producto => producto.categoria === categoria
    );


  const boton =
    document.createElement("button");


  boton.classList.add(
    "category-button"
  );


  boton.dataset.categoria =
    categoria;


  boton.textContent =
    producto.categoriaNombre;


  boton.addEventListener(
    "click",
    () => {

      document
        .querySelectorAll(
          ".category-button"
        )
        .forEach(
          boton =>
            boton.classList.remove("active")
        );


      boton.classList.add("active");


      mostrarProductos(categoria);

    }
  );


  contenedorFiltros.appendChild(boton);

});
mostrarProductos();
