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

<p class="product-stock">
  ${
    producto.stock > 10
      ? `🟢 En stock (${producto.stock} uds.)`
      : producto.stock > 0
      ? `🟡 Quedan solo ${producto.stock} uds.`
      : `🔴 Agotado`
  }
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
const backToTop =
document.getElementById("backToTop");


window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        backToTop.classList.add("show");

    }else{

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
