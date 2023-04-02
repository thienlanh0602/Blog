const express = require('express')

const app = express();

app.get('/register', (req, res) => {
    res.json('test register ok');
})

app.listen(4000);


