const express = require('express');
const { addPost, getPost, updatePosts, deletePost } = require('../controllers/postControllers');

const router = express.Router();


router.post('/api/addPost', addPost);

router.get('/api/getAllPost', getPost);

router.put('/api/updatePost/:id', updatePosts);

router.delete('/api/deletePost/:id', deletePost);

module.exports = router;


