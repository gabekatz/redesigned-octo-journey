const express = require('express');

const app = express();
const helloController = require('./helloController');

app.get('/hello', helloController);

app.get('/', (req, res) => res.json({ hello: 'How are you?' }));

console.log("have you been alright?")

app.listen(3000);
