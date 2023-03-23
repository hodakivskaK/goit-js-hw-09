// const flatpickr = require("flatpickr");

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const datetimePickerEl = document.querySelector("#datetime-picker");
const startButtonEl = document.querySelector('[data-start]');
const daysElementEl = document.querySelector('[data-days]');
const hoursElementEl = document.querySelector('[data-hours]');
const minutesElementEl = document.querySelector('[data-minutes]');
const secondsElementEl = document.querySelector('[data-seconds]');


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

flatpickr(datetimePickerEl, options);


startButtonEl.addEventListener('click', () => {
  const selectedDate = datetimePickerEl.value;
  const currentDate = new Date();
  const endDate = new Date(selectedDate);


  if (endDate < currentDate) {
    window.alert('Please choose a date in the future');
    startButtonEl.setAttribute("disabled", true);
    return;
  }

  startButtonEl.setAttribute("disabled", false);

  const timeDifferent = endDate - currentDate;
  const time = convertMs(timeDifferent);

  daysElementEl.innerText = addLeadingZero(time.days);
  hoursElementEl.innerText = addLeadingZero(time.hours);
  minutesElementEl.innerText = addLeadingZero(time.minutes);
  secondsElementEl.innerText = addLeadingZero(time.seconds);


  const interval = setInterval(() => {
    const timeDifferent = endDate - new Date();
    const time = convertMs(timeDifferent);

    if (timeDifferent <= 0) {
      false;
    }
    
    daysElementEl.innerText = addLeadingZero(time.days);
    hoursElementEl.innerText = addLeadingZero(time.hours);
    minutesElementEl.innerText = addLeadingZero(time.minutes);
    secondsElementEl.innerText = addLeadingZero(time.seconds);

    if (timeDifferent < 1000) {
      clearInterval(interval);
      return
    }
  }, 1000);
});


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}