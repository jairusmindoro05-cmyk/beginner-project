const button = document.querySelector('button')
const ul = document.querySelector('ul')

button.addEventListener('click', () =>{
    button.classList.toggle('act')
    ul.classList.toggle('act')
})