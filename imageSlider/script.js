const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const imageEl = document.querySelectorAll('img')
const imgConEl = document.querySelector('.image-con')
let currentImg = 1;
let timeout;

nextEl.addEventListener("click", () =>{
    currentImg++;
    updateImg()
})
prevEl.addEventListener("click", () => {
    currentImg--;
    updateImg()
})

function updateImg(){
    if(currentImg > imageEl.length){
        currentImg = 1;
    }else if (currentImg < 1){
        currentImg = imageEl.length;
    }
    imgConEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`
}