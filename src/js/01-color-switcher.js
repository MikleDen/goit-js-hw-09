const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }


function onChangeColor(e){
    timerId = setInterval(() => {
        body.style.backgroundColor= getRandomHexColor;
        
      }, 1000);

}
function onStopChangeColor(e){
    clearInterval(timerId);

}
btnStart.addEventListener("click", onChangeColor);
btnStop.addEventListener("click", onStopChangeColor);