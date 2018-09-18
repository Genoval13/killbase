const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/targets', (_req, res, next) => {
    knex('targets')
        .orderBy('Target_ID')
        .then((targets) => {
            res.send(targets);
        })
        .catch((err) => {
            next(err);
        });
});

router.get('/targets/:Target_ID', (req, res, next) => {
    knex('targets')
        .where('Target_ID', req.params.Target_ID)
        .first()
        .then((targets) => {
            if (!targets) {
                return next();
            }

            res.send(targets);
        })
        .catch((err) => {
            next(err);
        });
});

router.post('/targets', (req, res, next) => {
    knex('targets')
        .insert({Target_Name: req.body.Target_Name, Target_Location: req.body.Target_Location, Target_Img: req.body.Target_Img, Target_Security: req.body.Target_Security}, '*')
        .then((targets) => {
            res.send(targets);
        })
        .catch((err) => {
            next(err);
        });
});

router.patch('/targets/:Target_ID', (req, res, next) => {
    knex('targets')
    .where('Target_ID', req.params.Target_ID)
    .first()
    .then((targets) => {
        if (!targets) {
            return next();
        }
        
        console.log(req.body, targets);
        return knex('targets')
        .where('Target_ID', '=', targets.Target_ID)
                .update({Target_Name: req.body.Target_Name, Target_Location: req.body.Target_Location, Target_Img: req.body.Target_Img, Target_Security: req.body.Target_Security}, '*')
        })
        .then((targets) => {
            res.send(targets)
        })
        .catch((err) => {
            next(err);
        });
});

router.delete('/targets/:Target_ID', (req, res, next) => {
    let targets;
  
    knex('targets')
      .where('Target_ID', req.params.Target_ID)
      .first()
      .then((row) => {
        if (!row) {
          return next();
        }
  
        targets = row;
  
        return knex('targets')
          .del()
          .where('Target_ID', req.params.Target_ID);
      })
      .then(() => {
        delete targets.Target_ID;
        res.send(targets);
      })
      .catch((err) => {
        next(err);
      });
  });

module.exports = router;