const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/assassins', (_req, res, next) => {
    knex('assassins')
        .orderBy('Assassin_ID')
        .then((assassins) => {
            res.send(assassins);
        })
        .catch((err) => {
            next(err);
        });
});

router.get('/assassins/:Assassin_ID', (req, res, next) => {
    knex('assassins')
        .where('Assassin_ID', req.params.Assassin_ID)
        .first()
        .then((assassins) => {
            if (!assassins) {
                return next();
            }

            res.send(assassins);
        })
        .catch((err) => {
            next(err);
        });
});

router.post('/assassins', (req, res, next) => {
    knex('assassins')
        .insert({Assassin_Name: req.body.Assassin_Name, Code_Name: req.body.Code_Name, Weapon: req.body.Weapon, Age: req.body.Age, Min_Price: req.body.Min_Price, Rating: req.body.Rating, Kills: req.body.Kills}, '*')
        .then((assassins) => {
            res.send(assassins);
        })
        .catch((err) => {
            next(err);
        });
});

router.patch('/assassins/:Assassin_ID', (req, res, next) => {
    knex('assassins')
    .where('Assassin_ID', req.params.Assassin_ID)
    .first()
    .then((assassins) => {
        if (!assassins) {
            return next();
        }
        
        console.log(req.body, assassins);
        return knex('assassins')
        .where('Assassin_ID', '=', assassins.Assassin_ID)
                .update({Assassin_Name: req.body.Assassin_Name, Code_Name: req.body.Code_Name, Weapon: req.body.Weapon, Age: req.body.Age, Min_Price: req.body.Min_Price, Rating: req.body.Rating, Kills: req.body.Kills}, '*')
        })
        .then((assassins) => {
            res.send(assassins)
        })
        .catch((err) => {
            next(err);
        });
});

router.delete('/assassins/:Assassin_ID', (req, res, next) => {
    let assassins;
  
    knex('assassins')
      .where('Assassin_ID', req.params.Assassin_ID)
      .first()
      .then((row) => {
        if (!row) {
          return next();
        }
  
        assassins = row;
  
        return knex('assassins')
          .del()
          .where('Assassin_ID', req.params.Assassin_ID);
      })
      .then(() => {
        delete assassins.Assassin_ID;
        res.send(assassins);
      })
      .catch((err) => {
        next(err);
      });
  });

module.exports = router;