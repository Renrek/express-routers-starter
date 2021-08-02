const express = require('express');
// Make a router
const router = express.Router();

router.get('/book', (req, res) => {
    res.send(bookList);
});

router.post('/book', (req, res) => {
    bookList.push(req.body);
    res.sendStatus(200);
});

module.exports = router;