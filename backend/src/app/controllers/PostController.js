const Post = require('../../models/Post');

const PostController = {
  // [POST] /api/post
  async store(req, res) {
    try {
      const {
        imagePost,
        contentPost,
        likePost,
        lovePost,
        commentsPost,
        statusPost
      } = req.body;
      const newPost = await new Post({
        imagePost: imagePost,
        contentPost: contentPost,
        likePost: likePost,
        lovePost: lovePost,
        commentsPost: commentsPost,
        statusPost: statusPost
      });
      await newPost.save();
      res.status(200).json({ msg: 'Post was created successfully' });

    } catch (error) {
      return res.status(500).json({ errors: [{ msg: error }] });
    }
  }

}

module.exports = PostController;