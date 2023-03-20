import Notiflix from 'notiflix';

const buttonSubmitEl = document.querySelector(".form")
const inputFistDelayEl = document.querySelectorAll("input")
// console.log(inputFistDelayEl)

buttonSubmitEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  Notiflix.Notify.info('Please wait');

  const {
    elements: { delay, step, amount }
  } = event.currentTarget;

  let timeCurrentPromise = Number(delay.value);

  for (let position = 1; position <= amount.value; position += 1){
    timeCurrentPromise += Number(step.value);
    createPromise(position, timeCurrentPromise);
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
    return new Promise(() =>
        setTimeout(() => {
          if (shouldResolve) { 
            Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
            console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
          } else {
            Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
             console.log(`❌ Rejected promise ${position} in ${delay}ms`);
          }
    }, delay))
  }

