document.addEventListener("DOMContentLoaded", function(){

    let item = JSON.parse(localStorage.getItem("checkout"));

    let container = document.getElementById("checkoutItem");

    if(!item){
        container.innerHTML = "<h3>No item selected</h3>";
        return;
    }

    container.innerHTML = `
        <img src="${item.image}" width="150">
        <h2>${item.name}</h2>
        <p>${item.category}</p>
        <p>Quantity: ${item.qty}</p>
    `;
});

document.addEventListener("DOMContentLoaded", function(){

    let item = JSON.parse(localStorage.getItem("checkout"));
    let container = document.getElementById("checkoutItem");

    if(!item){
        container.innerHTML = "No item selected";
        return;
    }

    container.innerHTML = `
        <img src="${item.image}" width="150">
        <h2>${item.name}</h2>
        <button>Place Order</button>
    `;
});