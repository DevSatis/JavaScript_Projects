const hourHand = document.querySelector("#hour");
const minuteHand = document.querySelector("#minute");
const secondHand = document.querySelector("#second");


var date = new Date();
console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hour: " + hr + " Minute: " + min + " Second: "+ sec);

let hrPosition = (hr*360/12) + (min*(360/60)/12);
let minPosition = (min*360/60) + (sec*(360/60)/60);
let secPosition = sec*360/60;



function runTheClock(){
        
    hrPosition = hrPosition + (3/360);
    minPosition = minPosition + (6/60);
    secPosition = secPosition + 6;

    hourHand.getElementsByClassName.transform = "rotate(" + hrPosition + "deg)";
    minuteHand.getElementsByClassName.transform = "rotate(" + minPosition + "deg)";
    secondHand.getElementsByClassName.transform = "rotate(" + secPosition + "deg)";

}


var interval = setInterval(runTheClock,1000);
