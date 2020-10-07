const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");


const bDay = "17 Dec 2020"; 

function countdown() {
    const bDayDate = new Date(bDay);
    const currentDate = new Date();

    const totalSeconds = ( bDayDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds /3600 / 24);
    const hours = Math.floor(totalSeconds /3600 ) % 24;
    const mins = Math.floor(totalSeconds / 60 ) % 60 ;
    const seconds = Math.floor(totalSeconds) % 60 ;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

}

function formatTime(time) { 
    return time < 10 ? `0${time}` : time;
}

function createHeart() { 
    const heart= document.createElement('div') ;
    heart.classList.add("heart");

    heart.style.left= Math.random() * 100 + "vw";
    heart.style.animationDuration= Math.random() * 2 + 3 + "s";
    heart.innerText = '💜';

    document.body.appendChild(heart);
    setTimeout( () => { 
        heart.remove();
    }, 5000);
}
setInterval(createHeart, 300);

countdown();

setInterval(countdown, 1000);
