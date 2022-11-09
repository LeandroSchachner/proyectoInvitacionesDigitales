const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
];

const semana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4")


let futureDate = new Date(2022,10,13,12,30,0);


const year = futureDate.getFullYear(); 
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();

const weekday = semana[futureDate.getDay()];


giveaway.textContent = `La espera termina el ${weekday}, ${date} de ${month} de ${year} a las ${hours}:${minutes}pm`;


const futureTime = futureDate.getTime();


function getRemainingTime() {
    const today = new Date().getTime();
    const t = futureTime - today;
    

    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;

    let days = t / oneDay
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    const values = [days,hours,minutes,seconds];

    function format(item) {
        if(item < 10){
            return item = `0${item}`
        }
        return item
    };

    items.forEach(function(item,index){
        item.innerHTML = format(values[index]);
    });



}

let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();