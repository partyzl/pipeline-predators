const Comment = require('./comment')
const db = require('../data/data.json')
const fs = require('fs')

class Entry {
    constructor(data) {
        this.id = data.id,
        this.entry = data.entry,
        this.comment = data.comment || [],
        this.gifUrl = data.gifUrl,
        this.love = data.love,
        this.sad = data.sad,
        this.shock = data.shock
    }

    //adding a comment function
    newComment(data){
        let comment = new Comment(data);
        this.comment.shift(comment);
    }

    //tegans emoji counter
    //reacting with emoji function???switch?
    const reactButtons = document.getElementsByClassName('reactions')


    function emojiCount(reactionType){
        
        switch(reactionType){
          case 'love':
            fetch("http://localhost:4000/emoji")
                .then(resp => resp.json())
                })
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
                .then( data.shock => {
                  data.shock = data.shock+1;
                })
                .then(console.log(data[2]))
              response.statusCode = 200;
              break;
            }
          reactButtons.disabled = true; 
          }
    }
    //definitely definitely need to do more reading of fs and its built in methods
    //get all the entries from db
    static getAllEntries = () => {
        let data = fs.readFileSync(db, "utf-8", (err, data)=>{
            if(err){
                console.log('Error: ', err);
                return;
            }
        });
        let parsedData = JSON.parse(data);
        let entries = parsedData.map(p => new Entry(p));
        return entries;
    }
    //returning an array, need to add 'utf8' to change to string

    //create a new entry
    static newEntry = (body) => {
        fs.readFile(db, (err, data)=>{
            let entries = JSON.parse(data);
            let newEntry = new Entry(body);
            newEntry.id = `${entries.length}+1`
            entries.push(newEntry);
            fs.writeFile(db, JSON.stringify(entries), (error)=>{
                if(error){
                    console.log('AHHHHH' + error);
                }
            })
            return newEntry;
        })
    }
}

module.exports = Entry;

