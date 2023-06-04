// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }
import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmit);

function onSubmit(event){
  event.preventDefault();

  const delay = parseInt(form.elements.delay.value);
  const step = parseInt(form.elements.step.value);
  const amount = parseInt(form.elements.amount.value);

}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  })
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}
const validateInput = event => {
  const target = event.target;
  const inputValue = parseInt(target.value);

  if ((target.name === 'step' || target.name === 'delay') && inputValue < 0) {
    Notiflix.Notify.failure(
      `❌ You cannot enter negative values in this field`
    );
    target.value = 0;
  } else if (target.getAttribute('name') === 'amount' && inputValue <= 0) {
    Notiflix.Notify.failure(
      '❌ Only positive values can be entered in this field'
    );
    target.value = 1;
  }
};
const promiseGenerator = event => {
  event.preventDefault();
  const firstDelay = parseInt(delayInput.value);
  const step = parseInt(stepInput.value);
  const amount = parseInt(amountInput.value);

  for (let i = 0; i < amount; i++) {
    const position = i;
    const delay = firstDelay + (i - 1) * step;

    createPromise(position, delay);
  }
};