const form = document.querySelector('#form');
const content = document.querySelector('#content');

const age = prompt('How old are you?');

if (age > 19) {
    // visa hemsidan inte gammal nog
    content.style.display = 'block';
    const name = prompt('What is your name?');
    document.querySelector('.message').innerText = 'Hello ' + name + ' this is my Portfolio! ';
    document.querySelector('#enter').className = 'granted';
} else {
    //inte gammal nog, visa något annat
    content.style.display = 'none';
    document.querySelector('.message').innerText = 'You have no permission. You are not old enough to enter.';
    document.querySelector('#enter').className = 'denied';
}
