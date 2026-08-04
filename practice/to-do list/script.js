function addList(){
    const input = document.getElementById('inputTask');
    const task = input.value;

    if (task == ""){
        alert("Please enter your task!");
        return;
    }

    const li = document.createElement('li');
    li.textContent = task;

    document.getElementById('taskCon').appendChild(li);

    const del = document.createElement('button');
    del.textContent = "Remove";

    del.onclick = function(){
        li.remove();
    }
    
    li.appendChild(del);

}