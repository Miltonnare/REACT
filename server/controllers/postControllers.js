const poster = require('../models/Post');

// Kuweka Posts
const addPost = async function(req, res) {
    try {
        const { title, content } = req.body;
        const newPost = await poster.create({ title, content });
        console.log("Post Added",req.body)
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const getPost = async function(req, res) {
    try {
        const posts = await poster.find();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const deletePost = async function(req, res) {
    try {
        const { id } = req.params;
        const deleted = await poster.findByIdAndDelete(id);
        if (!deleted) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json({ message: 'The Post has been deleted successfully.' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const updatePosts = async function(req, res) {
    try {
        const { id } = req.params;
        const { title, content } = req.body;
        const updated = await poster.findByIdAndUpdate(
            id,
            { title, content },
            { new: true }
        );
        if (!updated) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json(updated);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { addPost, getPost, deletePost, updatePosts };
