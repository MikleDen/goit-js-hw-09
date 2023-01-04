import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';



const inputEl = document.querySelector('input[type = "text"]');
const btnStart = document.querySelector('button[data-start]');
const refs = {
  dataDaysEl: document.querySelector('[data-days]'),
  dataHoursEl: document.querySelector('[data-hours]'),
  dataMinutesEl: document.querySelector('[data-minutes]'),
  dataSecondsEl: document.querySelector('[data-seconds]'),
};
const {  dataDaysEl, dataHoursEl, dataMinutesEl, dataSecondsEl } = refs;

btnStart.disabled=true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        msSelected = selectedDates[0].getTime();
        if(msSelected<new Date){
            Notiflix.Notify.failure("Please choose a date in the future");
            btnStart.disabled=true;

        }else{
            btnStart.disabled=false;
        }
      
    },
  };
  flatpickr(inputEl, options);

  
 

  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }

  let object = {};

  const startTimer = () => {
      idInterval = setInterval(() => {
          const diff = msSelected - Date.now();
          if (diff <= 0) {
              clearTimeout(idInterval);
              return;
          };
      object = convertMs(diff);
      onChangeContent(addLeadingZero(object));
      }, 1000)
  }
  

function onChangeContent({ days, hours, minutes, seconds }) {
    dataDaysEl.textContent = days;
    dataHoursEl.textContent = hours;
    dataMinutesEl.textContent = minutes;
    dataSecondsEl.textContent = seconds;
}

  function addLeadingZero(values) {
      const newValues = { ...values };
      const keys = Object.keys(newValues)
      for (const key of keys) {
          newValues[key] = String(newValues[key]).padStart(2, 0)
      } 
      return newValues;
  };


  btnStart.addEventListener('click',startTimer);