const express = require('express')
const mongoose = require('mongoose')
const app = express();
const routes = require('./routers/routes');
const bodyParser = require('body-parser');
const cors = require('cors');
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/QuizAppDB");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
routes(app)

module.exports = app;
