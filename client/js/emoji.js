

// function emojiToggle(e){
//     if 
/// emoji has clicked status and toggles other reactions to disabled
const reactButtons = document.getElementsByClassName('reactions')


function emojiCount(reactionType){
    
    switch(reactionType){
      case 'love':
        fetch("http://localhost:4000/emoji")
            .then(resp => resp.text())
            })
        //   .then(resp => resp.json())
        
          .then( data => {
            data.love = data.love +1;
          })
          .then()
        response.statusCode = 200;
        break;

        case 'sad':
          fetch("http://localhost:4000/emoji")
            .then(resp => resp.json())
            .then( data.sad => {
              data.sad = data.sad +1;
            })
            .then(console.log(data[1]))
          response.statusCode = 200;
          break;

        case 'shock':
          fetch("http://localhost:4000/emoji")
            .then(resp => resp.json())
            .then( data.shockEmoji => {
              data.shock = data.shock+1;
            })
            .then(console.log(data[2]))
          response.statusCode = 200;
          break;
        }
      reactButtons.disabled = true; 
      }

// document.getElementById('love').addEventListener('click', emojiCount(this.id))


module.exports = { emojiCount };