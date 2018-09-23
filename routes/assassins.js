const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/assassins', (_req, res) => {
    knex('assassins')
    .orderBy('Assassin_ID', 'asc')
    .then((assassins) => {
        res.render('assassins/assassins', {title: 'Assassins Table', assassins});
    })
})

router.get('/assassins/:Assassin_ID', (req, res, next) => {
    knex('assassins')
        .where('Assassin_ID', req.params.Assassin_ID)
        .first()
        .then((assassins) => {
            if (!assassins) {
                return next();
            }

            res.render(`assassins/assassin_profile`, {title: `${assassins.Assassin_Name} Profile`, assassins});
        })
        .catch((err) => {
            next(err);
        });
});

router.get('/assassins_post', (_req, res, _next) => {
    res.render('assassins/assassins_post', {title: `Create New Assassin`});
})

router.post('/assassins/add', (req, res, next) => {
    knex('assassins')
        .insert({Assassin_Name: req.body.Assassin_Name, 
            Code_Name: req.body.Code_Name, 
            Weapon: req.body.Weapon, 
            Age: req.body.Age, 
            Min_Price: req.body.Min_Price, 
            Rating: req.body.Rating, 
            Kills: req.body.Kills}, '*')
        .then(() => {
            knex('assassins')
            .orderBy('Assassin_ID', 'asc')
            .then((assassins) => {
                res.render('assassins/assassins', {title: 'Assassins Table', assassins});
            })
        })
        .catch((err) => {
            next(err);
        });
});

router.get('/assassins/patch/:Assassin_ID', (req, res, _next) => {
    knex('assassins')
    .where('Assassin_ID', req.params.Assassin_ID)
    .then((assassins) => {
        res.render('assassins/assassins_edit', {title: `Edit ${assassins[0].Assassin_Name}`, assassins})
    })
})

router.post('/assassins/edit/:Assassin_ID', (req, res, next) => {
    knex('assassins')
    .where('Assassin_ID', req.params.Assassin_ID)
    .first()
    .then((assassins) => {
        if (!assassins) {
            return next();
        }
        
        return knex('assassins')
        .where('Assassin_ID', '=', assassins.Assassin_ID)
        .update({Assassin_Name: req.body.Assassin_Name, 
            Code_Name: req.body.Code_Name, 
            Weapon: req.body.Weapon, 
            Age: req.body.Age, 
            Min_Price: req.body.Min_Price, 
            Rating: req.body.Rating, 
            Kills: req.body.Kills}, '*')
        })
        .then(() => {
            knex('assassins')
            .orderBy('Assassin_ID', 'asc')
            .then((assassins) => {
                res.render('assassins/assassins', {title: 'Assassins Table', assassins});
            })
        })
        .catch((err) => {
            next(err);
        });
});

router.post('/assassins/delete/:Assassin_ID', (req, res, next) => {
    let ass;
    knex('assassins')
        .where('Assassin_ID', req.params.Assassin_ID)
        .first()
        .then((row) => {
            if (!row) {
            return next();
            }
    
            ass = row;

            return knex('assassins')
                .where('Assassin_ID', '=', ass.Assassin_ID)
                .del();
        })
        .then(() => {
            delete ass.Assassin_ID;
            knex('assassins')
            .orderBy('Assassin_ID', 'asc')
            .then((assassins) => {
                res.render('assassins/assassins', {title: 'Assassins Table', assassins});
            })
        })
        .catch((err) => {
        next(err);
        });
});

module.exports = router;