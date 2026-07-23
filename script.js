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
        src="${producto.imagen}"
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
      <a
        href="${producto.enlaceCompra}"
        target="_blank"
        class="button button-primary"
      >
        COMPRAR
      </a>
    </div>
  `;
  contenedorProductos.appendChild(tarjeta);
});
