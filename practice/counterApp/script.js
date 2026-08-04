let count = 0;

function plus(){
  count++;
  document.getElementById("bilang").innerText = count;
}

function minus(){
  count--;
  document.getElementById("bilang").innerText = count;
}

function reset(){
  count = 0;
  document.getElementById("bilang").innerText = count;
}