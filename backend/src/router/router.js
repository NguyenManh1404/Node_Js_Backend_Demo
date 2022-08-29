const express = require('express'); //import
const router = express.Router(); //import
const PostController = require('../app/controllers/PostController')
const uploadCloud = require('../../config/cloudinary');

router.post('/api/upload', uploadCloud.single('file'), PostController.store);

module.exports = router;
