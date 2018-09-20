document.addEventListener('DOMContentLoaded', (ev) => {

    const homeButton = document.getElementById('home');
    const assButton = document.getElementById('ass');
    const conButton = document.getElementById('con');

    console.log('Booyah')

    homeButton.addEventListener('click', (ev) => {
        app.get('/', (_req, res) => {
            res.render('index', {title: 'Kill Base'});
        })
    })

    assButton.addEventListener('click', (ev) => {
        app.get('/assassins', (_req, res) => {
            knex('assassins')
            .orderBy('Assassin_ID', 'asc')
            .then((assassins) => {
                res.render('assassins/assassins', {title: 'Assassins Table', assassins});
            })
        })
    })

    conButton.addEventListener('click', (ev) => {
        console.log('kill')
    })
})