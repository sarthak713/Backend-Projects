const mongoose = require('mongoose');
const Post = require('./models/postModel');

const posts = [
    {
        title: "My Dog",
        description: "My lovely dog is a German Shepherd."
    },
    {
        title: "College Days",
        description: "I learn from youtube and play with friends."
    },
    {
        title: "Home",
        description: "Home has people you love."
    }
];

async function seedDB() {
    await Post.insertMany(posts);
    console.log("DB seeded");
}
module.exports = seedDB;