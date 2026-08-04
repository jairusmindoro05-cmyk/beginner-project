const button = document.querySelector('button');
const ul = document.querySelector('ul');

button.addEventListener("click", ()=>{
    button.classList.toggle('active');
    ul.classList.toggle('active')
})