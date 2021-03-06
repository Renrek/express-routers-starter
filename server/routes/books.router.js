
const express = require('express');
// Make a router
const router = express.Router();

const bookList = [];

router.get('/', (req, res) => {
    res.send(bookList);
});

router.post('/', (req, res) => {
    bookList.push(req.body);
    res.sendStatus(200);
});

module.exports = router;