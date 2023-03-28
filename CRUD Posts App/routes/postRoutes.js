let express = require('express');
const Post = require('../models/postModel');

let router = express.Router();

// SHOW ALL POSTS
router.get('/posts', async (req, res) => {
    const posts = await Post.find();
    res.render('posts/index', { posts });
});

// CREATE NEW POST
router.get('/posts/create', (req, res) => {
    res.render('posts/create');
});
router.post('/posts', async (req, res) => {
    const { title, description } = req.body;
    await Post.create({ title, description });
    res.redirect('/posts');
});

// SHOW SINGLE POST
router.get('/posts/:id', async (req, res) => {
    const { id } = req.params;
    const post = await Post.findById(id);
    res.render('posts/show', { post });
});

// EDIT POST
router.get('/posts/:id/edit', async (req, res) => {
    const { id } = req.params;
    const post = await Post.findById(id);
    res.render('posts/edit', { post });
});
router.patch('/posts/:id', async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    await Post.findByIdAndUpdate(id, { title, description });
    res.redirect(`/posts/${id}`);
});

// DELETE POST
router.delete('/posts/:id', async (req, res) => {
    const { id } = req.params;
    await Post.findByIdAndDelete(id);
    res.redirect('/posts');
});

module.exports = router;