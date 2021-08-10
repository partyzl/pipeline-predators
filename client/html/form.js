// Characters remaining for user input
const characters = document.querySelector('span');
const entry = document.getElementById('entry');

function characterCount() {
//     document.getElementById()
    let counter;
    let textEntered = entry.textContent;
    counter = (280 - (textEntered.length));
    characters.textContent = `${counter}`;
    console.log(counter);
} 

characters.addEventListener('onkeypress', characterCount);


//Emoji buttons

// let 


