function search() {
    let input = document.getElementById("inputItem").value.toLowerCase();
    let item = document.querySelectorAll(".item");

    item.forEach(function(item) {
        let text = item.innerText.toLowerCase();
        
        if(text.includes(input)){
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

// -----------------------------
// Get product info from item card
// -----------------------------
function getProductInfo(button) {
    const item = button.parentElement;
    const name = item.querySelector("h3").innerText;
    const category = item.querySelector("p").innerText;
    const image = item.querySelector("img").src;
    const price = parseFloat(item.querySelectorAll("p")[1]?.innerText.replace("₱","")) || 0;
    return { name, category, image, price, qty: 1 };
}

// -----------------------------
// Add to Cart
// -----------------------------
function addToCart(button) {
    const product = getProductInfo(button);
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find(item => item.name === product.name);
    if(existing){
        existing.qty += 1;
    } else {
        cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "cart.html";
}

// -----------------------------
// Buy Now (single item checkout)
// -----------------------------
function buyNow(button) {
    const product = getProductInfo(button);
    localStorage.setItem("checkout", JSON.stringify([product]));
    window.location.href = "check.html";
}

// -----------------------------
// Search Products
// -----------------------------
function search() {
    const input = document.getElementById("inputItem").value.toLowerCase();
    const items = document.querySelectorAll(".item");
    items.forEach(item => {
        const text = item.innerText.toLowerCase();
        item.style.display = text.includes(input) ? "block" : "none";
    });
}

// -----------------------------
// CART PAGE FUNCTIONS
// -----------------------------
function displayCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const container = document.getElementById("cartItems");
    if(!container) return;

    container.innerHTML = "";
    if(cart.length === 0){
        container.innerHTML = "<h3>Cart is empty</h3>";
        document.getElementById("totalPrice").innerText = "";
        return;
    }

    let total = 0;

    cart.forEach((item, index) => {
        total += item.qty * item.price;
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
            <img src="${item.image}" width="100">
            <h3>${item.name}</h3>
            <p>${item.category}</p>
            <p>Qty: ${item.qty}</p>
            <p>Price: ₱${item.price}</p>
            <button onclick="increase(${index})">+</button>
            <button onclick="decrease(${index})">-</button>
            <button onclick="removeItem(${index})">Remove</button>
        `;
        container.appendChild(div);
    });

    const totalElem = document.getElementById("totalPrice");
    if(totalElem) totalElem.innerText = "Total: ₱" + total;
}

function increase(index){
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart[index].qty++;
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

function decrease(index){
    let cart = JSON.parse(localStorage.getItem("cart"));
    if(cart[index].qty > 1){
        cart[index].qty--;
    } else {
        cart.splice(index,1);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

function removeItem(index){
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.splice(index,1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

function goToCheckout(){
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if(cart.length === 0){
        alert("Cart is empty!");
        return;
    }
    localStorage.setItem("checkout", JSON.stringify(cart));
    window.location.href = "check.html";
}

// -----------------------------
// CHECKOUT PAGE FUNCTIONS
// -----------------------------
function displayCheckout(){
    const items = JSON.parse(localStorage.getItem("checkout")) || [];
    const container = document.getElementById("checkoutItem");
    if(!container) return;

    container.innerHTML = "";
    if(items.length === 0){
        container.innerHTML = "<h3>No items to checkout</h3>";
        document.getElementById("checkoutTotal").innerText = "";
        return;
    }

    let total = 0;
    items.forEach(item => {
        total += item.qty * item.price;
        const div = document.createElement("div");
        div.innerHTML = `
            <img src="${item.image}" width="100">
            <h3>${item.name}</h3>
            <p>${item.category}</p>
            <p>Qty: ${item.qty}</p>
            <p>Price: ₱${item.price}</p>
        `;
        container.appendChild(div);
    });

    const totalElem = document.getElementById("checkoutTotal");
    if(totalElem) totalElem.innerText = "Total: ₱" + total;
}

function placeOrder(e){
    e.preventDefault();
    localStorage.removeItem("cart");
    localStorage.removeItem("checkout");
    alert("Order placed successfully!");
    window.location.href = "home.html";
}

document.addEventListener("DOMContentLoaded", function(){
    displayCart();
    displayCheckout();
});