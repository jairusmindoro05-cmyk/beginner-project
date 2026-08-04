let exp = "";

function press(value){
    exp += value;
    document.getElementById("result").value = exp;

}

function add(value){
    exp += value;
    document.getElementById("result").value = exp;
}

function minus(value){
    exp += value;
    document.getElementById("result").value = exp;
}

function multiply(value){
    exp += value;
    document.getElementById("result").value = exp;
}

function devide(value){
    exp += value;
    document.getElementById("result").value = exp;
}

function calculate(){
    document.getElementById("result").value = eval(exp);
}

function clearResult(){
    exp = "";
    document.getElementById("result").value = "";
}