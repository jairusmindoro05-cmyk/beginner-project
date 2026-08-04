const button = document.querySelector('button')
const ul = document.querySelector('ul')

button.addEventListener("click", () => {
    button.classList.toggle('act');
    ul.classList.toggle('act');
})

const pro1 = document.querySelector('.pro1');
const pro2 = document.querySelector('.pro2');
const pro3 = document.querySelector('.pro3');
const pro4 = document.querySelector('.pro4');
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');
let act = false;

op1.addEventListener('click', () => {
    if(!act){
        pro1.style.display = "flex";
        op1.textContent = "Close";
        act = true;
    }else{
        pro1.style.display = "none";
        op1.textContent = "Project1";
        act = false;
    }
})
op2.addEventListener('click', () => {
    if(!act){
        pro2.style.display = "flex";
        op2.textContent = "Close";
        act = true;
    }else{
        pro2.style.display = "none";
        op2.textContent = "Project2";
        act = false;
    }
})
op3.addEventListener('click', () => {
    if(!act){
        pro3.style.display = "flex";
        op3.textContent = "Close";
        act = true;
    }else{
        pro3.style.display = "none";
        op3.textContent = "Project3";
        act = false;
    }
})
op4.addEventListener('click', () => {
    if(!act){
        pro4.style.display = "flex";
        op4.textContent = "Close";
        act = true;
    }else{
        pro4.style.display = "none";
        op4.textContent = "Project4";
        act = false;
    }
})

const body = document.querySelector("body");

function theme(){
    document.body.classList.toggle('lightmode');
}

