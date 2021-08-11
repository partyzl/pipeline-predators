//Emoji reacts
///////MAKE A DATA FILE ON THE SERVER WITH EMOJI
// let loveCount;
// let sadCount;

const { urlencoded } = require("express");


const loveReact = document.getElementById('love');
const sadReact = document.getElementById('sad');
const shockReact = document.getElementById('shock');
const reactButtons = document.getElementsByClassName('reactions')

function emojiCount(reactionType){
        switch (reactionType) {
            case 'love':
                fetch url(HERUKOURL)
                response.json().then(data => {
                    data.id[`${reactionType}`] =+;
                    
                    
                
                break;
            case 'sad':
                sadCount +=;
                break;
            case 'shock':
                shockCount +=;
                break;
            default:
                return false;
        reactButtons.disable = true;
    

            
            }
    }
}

function