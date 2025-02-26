const express = require('express');
const md5 = require('md5')
const app = express();

//const utilisateurs = require("./models/utilisateurs.js")

app.set('view engine', 'ejs');

app.use(express.static('public'));