const util = require("util");
const date = new Date();
const currentDate = date.getUTCDay();
const days = [
"Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday"];
const currentDay = days[currentDate];

document.getElementById("day").innerHTML = '<b> Day Of The Week:</b> ${currentDay}';

function milliseconds() {
    const date = new Date();
    const currentTime = date.getTime();
    document.getElementById("time").innerHTML = '<b> UTC Time:</b> ${currentTime}'   
}
setInterval(milliseconds, 1000);