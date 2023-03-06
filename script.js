const secondHand = document.querySelector('.sec');
const minuteHand = document.querySelector('.min');
const hourHand = document.querySelector('.hour');
setInterval(()=>{
// for second
const now = new Date();
const seconds = now.getSeconds();
const secondDegree = ((seconds/60)*360) + 90;
secondHand.style.transform = `rotate(${secondDegree}deg)`;

// for min
const minutes = now.getMinutes();
const minuteDegree = ((minutes/60)*360) + 90;
minuteHand.style.transform = `rotate(${minuteDegree}deg)`;

// for hours
const hours = now.getHours();
const hourDegree = ((hours/12)*360) + 90;
hourHand.style.transform = `rotate(${hourDegree}deg)`;
}, 1000);