const start = document.querySelector('.start');
const number = document.querySelector('.number');
const check = document.querySelector('.check');
const guess = document.querySelector('.guess');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const container = document.querySelector('.container');

let secretNumber = Math.trunc(Math.random() * 50) + 1;
//number.textContent = secretNumber;
let scored = 50;
let highestScore = 0;

check.addEventListener('click', function () {
    const guess =Number(document.querySelector('.guess').value);
    if(!guess) {
        message.textContent = 'No Number!';
    } else if (guess === secretNumber) {
        message.textContent = 'You got it right';
        message.style.fontSize = '2.5rem';
        number.style.transition = '1s';
        number.textContent = secretNumber;
        container.style.backgroundColor =  '#60b347';
        number.style.width = '12rem';
    } else if (guess > secretNumber) {
        message.textContent = 'Your guess is too high';
        scored --;
        score.textContent = scored;
    } else if (guess < secretNumber) {
        message.textContent = 'Your guess is too low';
        scored --;
        score.textContent = scored;
    };

});

start.addEventListener('click', function () {
    document.location.reload(true);
});