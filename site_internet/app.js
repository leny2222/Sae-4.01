const express = require('express');
const app = express();

//const utilisateurs = require("./models/utilisateurs.js")

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', async (req, res) => {
    return res.render('index');
});

app.get('/prestations', async (req, res) => {
    return res.render('prestation');
});

app.get('/partenaires', async (req, res) => {
    return res.render('partenaires');
});

app.get('/projets', async (req, res) => {
    return res.render('projets');
});

app.get('/rendez-vous', async (req, res) => {
    return res.render('rdv');
});

app.get('/contact', async (req, res) => {
    return res.render('contact');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
}
)