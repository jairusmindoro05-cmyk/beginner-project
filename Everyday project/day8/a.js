const btn = document.querySelector(".btn");
const exit = document.querySelector(".exit");
const nav = document.querySelector("nav");

btn.addEventListener("click", () => {
    nav.style.display = "flex";
    exit.style.display = "flex";

    exit.addEventListener("click", () => {
        nav.style.display = "none";
        
    })
})