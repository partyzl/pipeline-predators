const Comment = require('./comment')
const db = require('../data/data.json')
const fs = require('fs')

class Entry {
    constructor(data) {
        this.id = data.id,
        this.entry = data.entry,
        this.comment = data.comment || [],
        this.gifUrl = data.gifUrl,
        this.likeEmoji = data.likeEmoji,
        this.cryEmoji = data.cryEmoji,
        this.shockEmoji = data.shockEmoji
    }

    //adding a comment function
    newComment(data){
        let comment = new Comment(data);
        this.comment.shift(comment);
    }

    //tegans emoji counter
    //reacting with emoji function???switch?
    emojiCounter(emoji){
        switch(emoji){
            case "likeEmoji":
                this.likeEmoji++;
                break;
            case "cryEmoji":
                this.cryEmoji++;
                break;
            case "shockEmoji":
                this.shockEmoji++;
                break;
            default:
                //do i even need this
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

