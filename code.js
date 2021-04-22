const nowTime = new Date().getTime();
const endTime = new Date('2021-12-31 23:59:59').getTime();

const spanD = document.querySelector('span.d');
const spanH = document.querySelector('span.h');
const spanM = document.querySelector('span.m');
const spanS = document.querySelector('span.s');

setInterval(() => {
    const nowTime = new Date().getTime();
    // const time = Math.floor((endTime - nowTime) / 1000);
    const time = endTime - nowTime;
    const days = Math.floor((endTime / (1000 * 60 * 60 * 24)) - (nowTime / (1000 * 60 * 60 * 24)));
    let hours = Math.floor((endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60);
    // console.log(hours);
    let secs = Math.floor((endTime / 1000 - nowTime / 1000) % 60);
    // console.log(hours);
  
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    secs = secs < 10 ? `0${secs}` : secs;

    spanD.textContent = days;
    spanH.textContent = hours;
    spanM.textContent = minutes;
    spanS.textContent = secs;
}, 1000)
