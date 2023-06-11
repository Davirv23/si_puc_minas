fetch('https://diwserver.vps.webdock.cloud/products')
  .then(res => res.json())
  .then(completedata => {
    let data1 = "";
    completedata.forEach(values => {
      data1 += `
        <div class="card">
          <h1 class="title">${values.title}</h1>
          <img src="${values.image}" alt="img">
          <p>${values.description}</p>
          <p class="category">${values.category}</p>
          <p class="price">${values.price}</p>
          <button onclick="redirectToProductDetails(${values.id})">Detalhes</button>
        </div>
      `;
    });
    document.getElementById("cards").innerHTML = data1;
  })
  .catch(err => {
    console.log(err);
  });

function redirectToProductDetails(productId) {
  // Redirecionar para a página de detalhes do produto
  window.location.href = `product-details.html?id=${productId}`;
}
