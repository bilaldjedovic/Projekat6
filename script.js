const daniEl = document.getElementById("dani");
const satiEl = document.getElementById("sati");
const minuteEl = document.getElementById("minute");
const sekundeEl = document.getElementById("sekunde");

const novagodina = "1 Jan 2022";

function countdown() {
    const datumnovegodine = new Date(novagodina);
    const danasnjidatum = new Date();

    const ukupnosec = (datumnovegodine - danasnjidatum) / 1000;

    const dani = Math.floor(ukupnosec / 3600 / 24);
    const stai = Math.floor(ukupnosec / 3600) % 24;
    const minute = Math.floor(ukupnosec / 60) % 60;
    const sekunde = Math.floor(ukupnosec) % 60;

    daniEl.innerHTML = dani;
    satiEl.innerHTML = formatTime(sati);
    minuteEl.innerHTML = formatTime(minute);
    sekundeEl.innerHTML = formatTime(sekunde);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);