const express = require('express');
const gateway = express();

gateway.get('/', (req, res) => {
    res.send('Hello from gateway');
})

module.exports = gateway;