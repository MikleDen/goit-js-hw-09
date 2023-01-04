const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }


function onChangeColor(event){
  btnStart.disabled=true;
  btnStop.disabled=false;
    timerId = setInterval(() => {
        body.style.backgroundColor= getRandomHexColor();
        
      }, 1000);
  
}
function onStopChangeColor(e){
  btnStart.disabled=false;
  btnStop.disabled=true;
    clearInterval(timerId);

}
btnStart.addEventListener("click", onChangeColor);
btnStop.addEventListener("click", onStopChangeColor);