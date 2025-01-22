const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'one.html'));
});

router.get('/two', (req, res) => {
    res.sendFile(path.join(__dirname, 'two.html'));
});

router.get('/three', (req, res) => {
    res.sendFile(path.join(__dirname, 'three.html'));
});

module.exports = router;
