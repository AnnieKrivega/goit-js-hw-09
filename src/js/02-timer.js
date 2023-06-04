import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
    console.log(selectedDates[0]);
    },
};

flatpickr("input#datetime-picker", options);


const refs = {
    inputEl: document.querySelector('input#datetime-picker'),
    startBtn: document.querySelector('button[data-start]'),
    daysEl: document.querySelector('span[data-days]'),
    hoursEl: document.querySelector('span[data-hours]'),
    minutesEl: document.querySelector('span[data-minutes]'),
    secondsEl: document.querySelector('span[data-seconds]')
}

refs.inputEl.value = '';

refs.startBtn.disabled = refs.inputEl.value === '';

refs.inputEl.addEventListener('input', () => {
    refs.startBtn.disabled = refs.inputEl.value === '';
});

refs.startBtn.addEventListener('click',onStartBtn );

function onStartBtn(){
let intervalOnStart = setInterval(onStartBtnInterval, 1000);
function onStartBtnInterval() {
    const selectedDate = refs.inputEl.value;
    const selectedDateTrns = new Date(selectedDate);
    const selectedDateMs = selectedDateTrns.getTime();
    let ourTime = new Date()
    let dateMs = ourTime.getTime()
    const date = convertMs(selectedDateMs - dateMs)
if(refs.inputEl.value && (selectedDateMs - dateMs) > 0){
    refs.daysEl.textContent = date.days;
    refs.hoursEl.textContent = date.hours;
    refs.minutesEl.textContent = date.minutes;
    refs.secondsEl.textContent = date.seconds;
    console.log(date)
}else{
    window.alert("Please choose a date in the future");
    clearInterval(intervalOnStart)
}
}
}

function addLeadingZero(value){
return String(value).padStart(2, '0')
}

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const days = addLeadingZero(Math.floor(ms / day));
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
    return { days, hours, minutes, seconds };
}
const updateTime = () => {
    if (timeRemained <= 0) {
    clearInterval(timer);
    Notiflix.Notify.success('Countdown finished!');
    return;
    }}
