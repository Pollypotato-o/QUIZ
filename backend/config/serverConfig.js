const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const morgan = require('morgan');
const getUser = require('../middlewares/getUser');
const sessionConfig = require('./sessionConfig');

function config(app) {
    app.use(express.static('public'));
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(morgan('tiny'));
    app.use(cookieParser());
    app.use(session(sessionConfig));
    app.use(getUser);
}

module.exports = config;