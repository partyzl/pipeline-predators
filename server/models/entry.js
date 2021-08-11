const Comment = require('./comment')

class Entry {
    constructor(data) {
        this.id = data.id,
        this.entry = data.entry,
        this.comment = data.comment || [],
        this.giphy = data.giphy || null,
        this.likeEmoji = data.likeEmoji,
        this.cryEmoji = data.cryEmoji,
        this.shockEmoji = data.shockEmoji
    }

    //adding a comment function
    newComment(data){
        let comment = new Comment(data);
        this.comment.shift(comment);
    }

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
}

module.exports = Entry;

