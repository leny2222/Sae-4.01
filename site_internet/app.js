const express = require('express');
const app = express();

//const utilisateurs = require("./models/utilisateurs.js")

app.set('view engine', 'ejs');

app.use(express.static('public'));