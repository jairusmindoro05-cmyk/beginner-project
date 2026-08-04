let number = 0;

function minus(){
    number--;
    document.getElementById('count').innerText = number;
}

function plus(){
    number++;
    document.getElementById('count').innerText = number;
}

function reset(){
    number = 0;
    document.getElementById('count').innerText = number;
}

function addtask(){
    const input = document.getElementById('inputTask');
    const task = input.value;

    if (task ==  ""){
        alert("Please enter your task!");
        return;
    }

    const li = document.createElement('li');
    li.textContent = task;

    document.getElementById('taskCon').appendChild(li);

    const del = document.createElement('button');
    del.textContent = "Del";

    del.onclick = function(){
        li.remove();
    }

    li.appendChild(del);
    input.value = "";
}

function timeNow() {
    let now = new Date();

    let hour = now.getHours();
    let minute = now.getMinutes();
    let sec = now.getSeconds();

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    sec = sec < 10 ? "0" + sec : sec;

    let time = hour + ":" + minute + ":" + sec;

    document.getElementById('oras').innerText = time;
}

setInterval(timeNow);

function pop(){
    const a = confirm("Are you sure!");

    if(a){
        alert("Confirmed!");
    }else{
        alert("Cancelled!");
    }
}

function pass(){
    let input = document.getElementById('password');

    if (input.type === "password"){
        input.type = "text";
    }else{
        input.type = "password";
    }
}

const qoutes = [
    {text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Success is not final, failure is not fatal.", author: "Winston Churchill" },
    { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
];

function generate(){
    let random = Math.floor(Math.random() * qoutes.length);

    document.getElementById('qoute').innerText  = qoutes[random].text;
    document.getElementById('author').innerText  = "- " + qoutes[random].author;
}

function change(color){
    document.body.style.background = color;
}