document.addEventListener('DOMContentLoaded', function() {
    // Categories
    const categories = [...new Set(products.map(p => p.category))];
    const catDiv = document.getElementById('categories');
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.textContent = cat;
        btn.onclick = () => window.location.href = `product.html?cat=${cat}`;
        catDiv.appendChild(btn);
    });

    // Featured (first 6)
    const featured = document.getElementById('featured');
    products.slice(0,6).forEach(product => {
        const item = document.createElement('div');
        item.className = 'item';
        item.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price} - ${product.category}</p>
            <button onclick="addToCartFromHome(${product.id})">Add to Cart</button>
        `;
        featured.appendChild(item);
    });
});

function addToCartFromHome(id) {
    const product = products.find(p => p.id === id);
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({...product, qty: 1});
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart!');
}
