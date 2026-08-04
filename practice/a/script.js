function addTask(){
    const input = document.getElementById('inputTask').value;

    if(input == ""){
        alert("Please enter your task!");
        return;
    }

    const li = document.createElement('li');
    li.textContent = input;

    document.getElementById('taskCon').appendChild(li);

    const del = document.createElement('button');
    del.textContent = 'X';

    del.onclick = function(){
        li.remove();
    }

    li.appendChild(del);
}    

let number = 0;

function inc(){
    number++;
    document.getElementById('num').innerText = number;
}
function dec(){
    number--;
    document.getElementById('num').innerText = number;
}
function reset(){
    number = 0;
    document.getElementById('num').innerText = number;
}

function timeNow(){
    let now = new Date();

    let hour = now.getHours();
    let minute = now.getMinutes();
    let sec = now.getSeconds();

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    sec = sec < 10 ? "10" + sec : sec;

    let time = hour + ":" + minute + ":" + sec;

    document.getElementById('time').innerText = time;
}
setInterval(timeNow);