const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/contracts', (_req, res) => {
    knex('contracts')
    .join('targets', 'targets.Target_ID', 'contracts.Contract_ID')
    .join('clients', 'clients.Client_ID', 'contracts.Contract_ID')
    .orderBy('Contract_ID')
    .then((contracts) => {
        res.render('contracts/contracts', {title: 'Contracts Table', contracts});
    })
})

router.get('/contracts/:Contract_ID', (req, res, next) => {
    knex('contracts')
        .where('Contract_ID', req.params.Contract_ID)
        .first()
        .then((contracts) => {
            if (!contracts) {
                return next();
            }

            res.send(contracts);
        })
        .catch((err) => {
            next(err);
        });
});

router.post('/contracts', (req, res, next) => {
    knex('contracts')
        .insert({Targets_ID: req.body.Targets_ID, Client_ID: req.body.Client_ID, Budget: req.body.Budget, Completed: req.body.Completed, By_Whom: req.body.By_Whom}, '*')
        .then((contracts) => {
            res.send(contracts);
        })
        .catch((err) => {
            next(err);
        });
});

router.patch('/contracts/:Contract_ID', (req, res, next) => {
    knex('contracts')
    .where('Contract_ID', req.params.Contract_ID)
    .first()
    .then((contracts) => {
        if (!contracts) {
            return next();
        }
        
        console.log(req.body, contracts);
        return knex('contracts')
        .where('Contract_ID', '=', contracts.Contract_ID)
                .update({Targets_ID: req.body.Targets_ID, Client_ID: req.body.Client_ID, Budget: req.body.Budget, Completed: req.body.Completed, By_Whom: req.body.By_Whom}, '*')
        })
        .then((contracts) => {
            res.send(contracts)
        })
        .catch((err) => {
            next(err);
        });
});

router.delete('/contracts/:Contract_ID', (req, res, next) => {
    let contracts;
  
    knex('contracts')
      .where('Contract_ID', req.params.Contract_ID)
      .first()
      .then((row) => {
        if (!row) {
          return next();
        }
  
        contracts = row;
  
        return knex('contracts')
          .del()
          .where('Contract_ID', req.params.Contract_ID);
      })
      .then(() => {
        delete contracts.Contract_ID;
        res.send(contracts);
      })
      .catch((err) => {
        next(err);
      });
  });

module.exports = router;