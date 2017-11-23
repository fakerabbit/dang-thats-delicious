const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  //res.send('Hey! It works!');
  const jsonObj = { name: 'DJ', age: 100, cool: true };
  //res.json(jsonObj);
  res.json(req.query);
});

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);
});

module.exports = router;
