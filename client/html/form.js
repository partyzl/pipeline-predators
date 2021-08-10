const entry = document.getElementById('entry');
const characters = document.querySelector('small > span');

function characterCount(){
    characters.textContent = 280 - entry.value.length - 1;
}

entry.addEventListener('keypress', characterCount);
