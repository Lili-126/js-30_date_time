const wrapper = document.querySelector('.wrapper');
let days = '';
let hours = '';
let minutes = '';
let seconds = '';

const title = document.createElement('h1');
title.classList.add('title');
wrapper.append(title);
title.textContent = 'Happy New Year';
title.style.fontSize = '6.5rem';

const myDate = document.createElement('div'); // текущая дата
myDate.classList.add('my-date');
wrapper.append(myDate);

const time = document.createElement('div'); // текущее время
time.classList.add('time');
wrapper.append(time);

function showTime() {    // счётчик, повторяет вывод функций каждую секунду
    setTimeout( () => {
        showTime(),
        setMyDate(),
        setTime(),
        calcTime()
    }, 1000);
};
showTime();

function setMyDate() {   // выводит текущую дату
    let date = new Date();
    let object = {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };
    myDate.textContent = date.toLocaleString('en-GB', object);
}
setMyDate();

function setTime() {          // выводит текущее время
    let date = new Date();
    time.textContent = date.toLocaleTimeString();
}
setTime();

const text = document.createElement('h2');
text.classList.add('text');
wrapper.append(text);
text.textContent = 'Before the New Year';

const timerDays = document.createElement('div');
timerDays.classList.add('timer-days');
wrapper.append(timerDays);

const timer = document.createElement('div');
timer.classList.add('timer');
wrapper.append(timer);

function calcTime() {    // расчитывает и выводит на экран обратный отсчёт до НГ
    let date = new Date();
    let endYear = new Date(2025, 11, 31, 23, 59, 59, 999);
    let result = (Date.parse(endYear) - Date.parse(date));  // разница в милисекундах

    days = Math.round(result / (24 * 60 * 60 * 1000));
    hours = Math.floor((result / (60 * 60 * 1000)) % 24);
    minutes = Math.floor((result / (60 * 1000)) % 60);
    seconds = Math.floor((result / 1000) % 60);

    let score = days + '   days';
    let temp = '' + (hours < 10? '0' + hours : hours);
        temp += (minutes < 10? ':0' : ':') + minutes;
        temp += (seconds < 10? ':0' : ':') + seconds;

        timerDays.textContent = score;
        timer.textContent = temp;
    }
    calcTime();

   





