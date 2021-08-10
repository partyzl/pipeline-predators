const characters = document.querySelector('small');
const entry = document.querySelector('entry');

function characterCount(){
    let textEntered;
    let counter;
    textEntered = document.getElementById('entry').textContent.split("");
    characters.textContent = characters.length;
    if (characters.length > 280) {
        textEntered.value = textEntered.value.substring(0, 280);
    }
    
    counter = (280 - (textEntered.length));

    document.getElementById('entryHelp').textContent = `${counter}`;

    console.log(counter);
}

characters.addEventListener('keyup', characterCount);

