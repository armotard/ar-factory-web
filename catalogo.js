const buscador =
document.getElementById("buscador-productos");

const mensajeSinResultados =
document.getElementById("sin-resultados");

let categoriaActual = "todos";

const contenedorProductos =
  document.getElementById("catalogo-productos");


const contenedorFiltros =
  document.getElementById("filtros-categorias");


// FUNCIÓN PARA MOSTRAR PRODUCTOS

function mostrarProductos() {

  contenedorProductos.innerHTML = "";
  
const textoBuscado =
    buscador.value
        .toLowerCase()
        .trim();


const productosFiltrados =
  if(productosFiltrados.length===0){

    mensajeSinResultados.style.display="block";

}else{

    mensajeSinResultados.style.display="none";

}
    productos.filter(producto => {

        const coincideCategoria =
            categoriaActual === "todos" ||

            producto.categoria === categoriaActual;


const textoProducto = `

${producto.nombre || ""}

${producto.descripcion || ""}

${producto.categoriaNombre || ""}

${producto.especificaciones?.material || ""}

${producto.compatibilidad?.join(" ") || ""}

`
.toLowerCase();


const coincideBusqueda =
    textoProducto.includes(textoBuscado);


        return coincideCategoria && coincideBusqueda;

    });
  productosFiltrados.const productosAMostrar =

productosFiltrados.length>0

?

productosFiltrados

:

productos.slice(0,3);(producto => {

    const tarjeta =
      document.createElement("article");


    tarjeta.classList.add(
      "product-card"
    );


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


    contenedorProductos.appendChild(
      tarjeta
    );

  });

}


// BOTÓN TODOS

const botonTodos =
  document.querySelector(
    '[data-categoria="todos"]'
  );


botonTodos.addEventListener(
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


    botonTodos.classList.add("active");


 categoriaActual = "todos";

mostrarProductos();

  }
);


// CREAR CATEGORÍAS

const categorias =
  [
    ...new Set(
      productos.map(
        producto =>
          producto.categoria
      )
    )
  ];


categorias.forEach(
  categoria => {

    const producto =
      productos.find(
        producto =>
          producto.categoria === categoria
      );


    const boton =
      document.createElement(
        "button"
      );


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
              boton.classList.remove(
                "active"
              )
          );


        boton.classList.add(
          "active"
        );


      categoriaActual = categoria;

mostrarProductos();

      }
    );


    contenedorFiltros.appendChild(
      boton
    );

  }
);


// MOSTRAR TODOS AL CARGAR

mostrarProductos();

buscador.addEventListener(
  "input",
  () => {

    mostrarProductos();

  }
);
