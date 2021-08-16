const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var timer = [0,0,0,0];

function leadingZero(time){
    if(time <= 9){
        time = "0" + time;
    }
    return time;

}


function runTimer(){

    let currentTimer = leadingZero(timer[0]) +":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTimer;
    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100)-(timer[0]*60));
    timer[2] = Math.floor(timer[3] - (timer[1]*100)- (timer[0]*6000));
}




function spellCheck(){
    let textEntered = testArea.value;
    let originTextMatch = originText.substring(0, textEntered.length); 
    
    if(textEntered == originText){
        testWrapper.

    }
    console.log(textEntered);
}


function start(){
    let textEnteredLength = testArea.value.length;
    if(textEnteredLength === 0){
        setInterval(runTimer, 10);
    }
    console.log(textEnteredLength);
}

function reset(){
    console.log("reset button has been pressed !.")
}


testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup",spellCheck , false);
resetButton.addEventListener("click", reset, false);
