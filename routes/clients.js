const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/clients', (_req, res, next) => {
    knex('clients')
        .orderBy('Client_ID')
        .then((clients) => {
            res.send(clients);
        })
        .catch((err) => {
            next(err);
        });
});

router.get('/clients/:Client_ID', (req, res, next) => {
    knex('clients')
        .where('Client_ID', req.params.Client_ID)
        .first()
        .then((clients) => {
            if (!clients) {
                return next();
            }

            res.send(clients);
        })
        .catch((err) => {
            next(err);
        });
});

router.post('/clients', (req, res, next) => {
    knex('clients')
        .insert({Client_Name: req.body.Client_Name}, '*')
        .then((clients) => {
            res.send(clients);
        })
        .catch((err) => {
            next(err);
        });
});

router.patch('/clients/:Client_ID', (req, res, next) => {
    knex('clients')
    .where('Client_ID', req.params.Client_ID)
    .first()
    .then((clients) => {
        if (!clients) {
            return next();
        }
        
        console.log(req.body, clients);
        return knex('clients')
        .where('Client_ID', '=', clients.Client_ID)
                .update({Client_Name: req.body.Client_Name}, '*')
        })
        .then((clients) => {
            res.send(clients)
        })
        .catch((err) => {
            next(err);
        });
});

router.delete('/clients/:Client_ID', (req, res, next) => {
    let clients;
  
    knex('clients')
      .where('Client_ID', req.params.Client_ID)
      .first()
      .then((row) => {
        if (!row) {
          return next();
        }
  
        clients = row;
  
        return knex('clients')
          .del()
          .where('Client_ID', req.params.Client_ID);
      })
      .then(() => {
        delete clients.Client_ID;
        res.send(clients);
      })
      .catch((err) => {
        next(err);
      });
  });

module.exports = router;