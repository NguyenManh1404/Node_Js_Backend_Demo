const express = require('express'); //import
const router = express.Router(); //import

router.get('/api/home', (req, res) => {
  res.status(200).send({ message: "Hello word" });
});


module.exports = router;