const express = require('express'); //import
const router = express.Router(); //import
const PostController = require('../app/controllers/PostController')

const cloudinary = require('../../config/cloudinary');

router.post('/api/upload', PostController.store);

module.exports = router;
