function orasNgayon(){
    let now = new Date();

    let hours = now.getHours();
    let minute = now.getMinutes();
    let seconds = now.getSeconds();
    let period = hours >= 12 ? "pm" : "am";
    let date = now.toDateString();

    hours = hours < 10 ? "0" + hours : hours;
    minute = minute < 10 ? "0" + minute : minute
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let time = hours + ":" + minute + ":" + seconds + period + date;

    document.getElementById("clock").innerText = time;
}

setInterval(orasNgayon);