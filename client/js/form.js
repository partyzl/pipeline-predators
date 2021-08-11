const entry = document.getElementById('entry');
const characters = document.querySelector('small > span');

function characterCount(){
    characters.textContent = 280 - entry.value.length;
}

entry.addEventListener('keyup', characterCount);
