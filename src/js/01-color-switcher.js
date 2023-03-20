
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const startBtnEl = document.querySelector('button[data-start]');
const stopBtnEl = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');

// 1
let timerId = null;

startBtnEl.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
    timerId = setInterval(() => {
         bodyEl.style.backgroundColor = getRandomHexColor()
    }, 1000)
    startBtnEl.setAttribute("disabled", true);
}

// 2
stopBtnEl.addEventListener("click", stopChangeColor);

function stopChangeColor() {
    clearInterval(timerId);
    startBtnEl.removeAttribute("disabled", true);
}