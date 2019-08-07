const express = require('express');
const path = require('path');
const indexRoutes = require('./routes/index');

// initial express
const app = express();

// config
app.use(express.static('./src/public'));
app.set('view engine', 'pug');
app.set('views',path.join(__dirname,'./views'));


// middlewares

// define routes
app.use('/',indexRoutes) ;


module.exports = app;