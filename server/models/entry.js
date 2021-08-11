const Comment = require('./comment')

class Entry {
    constructor(data) {
        this.id = data.id,
        this.entry = data.entry,
        this.comment = data.comment || [],
        this.likeEmoji = data.likeEmoji,
        this.cryEmoji = data.cryEmoji,
        this.shockEmoji = data.shockEmoji
    }

    //adding a comment function
    newComment(data){
        let comment = new Comment(data);
        this.comment.shift(comment);
    }

    //reacting with emoji function???

}

module.exports = Entry;

