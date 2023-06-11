const search = document.getElementById('inputSearch');
const buttonSearch = document.getElementById('button-addon2');
const mosaicContainer = document.getElementById('mosaic');

async function searchProducts() {
    try {
        const response = await fetch('https://diwserver.vps.webdock.cloud/products');
        const data = await response.json();
        const products = data.products.slice(0, 9);

        const cards = products.map(product => `
            <div class="card">
            <a href="detalhe.html?id=${product.id}">
                    <h1 class="title">${product.title}</h1>
                </a>
                <img src="${product.image}" height="300" alt="img">
                <p class="category">${product.category}</p>
                <p class="price">${product.price}</p>
            </div>
        `);

        mosaicContainer.innerHTML = cards.join('');
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

searchProducts();
