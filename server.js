const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 8000;
const path = require('path');
const ejs = require('ejs');
const knex = require('./db/knex');

const assassins = require('./routes/assassins');
const targets = require('./routes/targets');
const clients = require('./routes/clients');
const contracts = require('./routes/contracts');

app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(express.static(path.join('public')));
app.set('view engine', 'ejs');

app.get('/', (_req, res) => {
    res.render('index', {title: 'Kill Base'});
})

app.get('/assassins', (_req, res) => {
    knex('assassins')
    .orderBy('Assassin_ID', 'asc')
    .then((assassins) => {
        res.render('assassins/assassins', {title: 'Assassins Table', assassins});
    })
})

app.use(assassins);
app.use(targets);
app.use(clients);
app.use(contracts);

app.use(function (_req, res) {
    res.sendStatus(404)
})

app.use((err, _req, res, _next) => {
    if (err.status) {
        return res 
            .status(err.status)
            .set('Content-Type', 'text/plain')
            .send(err.message);
    }

    console.error(err.stack);
    res.sendStatus(500);
});

app.listen(PORT, () => {
    console.log('This is port', PORT);
})
