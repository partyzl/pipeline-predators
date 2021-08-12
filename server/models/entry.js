const Comment = require('./comment');
// const db = require('../data/data.json');
const fs = require('fs');
const { error } = require('console');

class Entry {
    constructor(data) {
        this.id = data.id,
        this.entry = data.entry,
        this.comment = data.comment || [],
        this.gifUrl = data.gifUrl,

        this.love = parseInt(data.love),
        this.sad = parseInt(data.sad),
        this.shock = parseInt(data.shock)

    }

    //adding a comment function
    newComment(data){
        let comment = new Comment(data);
        this.comment.shift(comment);
        return comment;
    }

    //tegans emoji counter
    //reacting with emoji function???switch?

 
    emojiCount(reactionType){
        const reactButtons = document.getElementsByClassName('reactions');
        switch(reactionType){
            case 'love':
                this.love ++;
                break;
    
            case 'sad':
                this.sad ++;
                break;
    
            case 'shock':
                this.shock ++;
                break;
            }
          reactButtons.disabled = true; 
          }

  
    //definitely definitely need to do more reading of fs and its built in methods
    //get all the entries from db
    static getAllEntries = () => {
      //let data = fs.readFileSync('./server/data/data.json');

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
        let newEntry = new Entry(body);
        let entries = JSON.parse(fs.readFileSync('./server/data/data.json'));
        
        newEntry.id = entries.length + 1;
        entries.push(newEntry);
        
        fs.writeFile('./server/data/data.json', JSON.stringify(entries), (error)=>{
            if(error){
                return console.log('AHHHHH' + error);
            }
        })
        return newEntry;
    }
}


module.exports = Entry;

