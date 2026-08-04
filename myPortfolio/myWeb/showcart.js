document.addEventListener("DOMContentLoaded", function() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartList = document.getElementById("cartItems");

    if(cart.length === 0){
        cartList.innerHTML = "<h3>Cart is empty</h3>";
        return;
    }

    cart.forEach(function(item, index){

        let div = document.createElement("div");

        div.innerHTML = `
            <img src="${item.image}" width="100">
            <h3>${item.name}</h3>
            <p>${item.category}</p>
            <p>Qty: ${item.qty}</p>

            <button onclick="increase(${index})">+</button>
            <button onclick="decrease(${index})">-</button>
            <button onclick="removeItem(${index})">Remove</button>
        `;

        cartList.appendChild(div);
    });

});

// FUNCTIONS
function increase(index){
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart[index].qty++;
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}

function decrease(index){
    let cart = JSON.parse(localStorage.getItem("cart"));
    
    if(cart[index].qty > 1){
        cart[index].qty--;
    } else {
        cart.splice(index, 1);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}

function removeItem(index){
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}

