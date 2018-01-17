const express = require('express');
const router = express.Router();
const jsonfile = require('jsonfile');
const filePath = 'jokes.json';

/* GET users listing. */
router.get('/best', function(req, res) {
  jsonfile.readFile(filePath, (err, obj) => {
    const jokes = [];
    for (const prop in obj) {
      jokes.push(obj[prop]);
    }
    jokes.sort((a, b) => (
      (a.upVotes || 0) < (b.upVotes || 0)
    ));

    res.status(200).json(jokes.slice(0, 5));
  });
});

router.get('/worst', function(req, res) {
  jsonfile.readFile(filePath, (err, obj) => {
    const jokes = [];
    for (const prop in obj) {
      jokes.push(obj[prop]);
    }
    jokes.sort((a, b) => (
      (a.upVotes || 0) > (b.upVotes || 0)
    ));

    res.status(200).json(jokes.slice(0, 5));
  });
});

router.post('/up-vote', function(req, res) {
  const joke = req.body;
  const id = joke.id;

  jsonfile.readFile(filePath, (err, obj) => {
    obj[id] = obj[id] || joke;
    obj[id].upVotes = obj[id].upVotes ? obj[id].upVotes + 1 : 1;

    jsonfile.writeFile(filePath, obj, (err) => {
      res.status(200).json({});
    });
  });
});

router.post('/down-vote', function(req, res) {
  const joke = req.body;
  const id = joke.id;

  jsonfile.readFile(filePath, (err, obj) => {
    obj[id] = obj[id] || joke;
    obj[id].downVotes = obj[id].downVotes ? obj[id].downVotes + 1 : 1;

    jsonfile.writeFile(filePath, obj, (err) => {
      res.status(200).json({});
    });
  });
});

module.exports = router;
