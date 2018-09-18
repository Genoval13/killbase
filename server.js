const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 8000;


app.use(function (req, res) {
    res.send()
})

app.listen(PORT, () => {
    console.log('This is port', PORT);
})