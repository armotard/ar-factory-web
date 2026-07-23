const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});
const contenedorProductos =
  document.getElementById("lista-productos");
productos.forEach(producto => {
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
        ${producto.categoria}
      </p>
      <h3>
        ${producto.nombre}
      </h3>
      <p>
        ${producto.descripcion}
      </p>
      <div class="product-details">
        ${producto.detalles.map(detalle => `
          <span>
            ✓ ${detalle}
          </span>
        `).join("")}
      </div>
<div class="product-buttons">

  <a
    href="producto.html?id=${producto.id}"
    class="button button-primary">

    VER PRODUCTO

  </a>


  <a
    href="${producto.enlaceCompra}"
    target="_blank"
    class="button button-secondary">

    COMPRAR

  </a>

</div>
    </div>
  `;
  contenedorProductos.appendChild(tarjeta);
});
