const mongoose = require('mongoose');

let postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
});

let Post = mongoose.model('Post', postSchema);
module.exports = Post;