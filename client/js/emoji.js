//Emoji reacts
///////MAKE A DATA FILE ON THE SERVER WITH EMOJI
// let loveCount;
// let sadCount;


const loveReact = document.getElementById('love');
const sadReact = document.getElementById('sad');
const shockReact = document.getElementById('shock');
const reactButtons = document.getElementsByClassName('reactions')

function emojiReactions(type){
    function reactionCount() {
        let reactionType = button.id;
        switch (reactionType) {
            case 'love':
                loveCount +=;
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