const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./config/database');
const dotenv = require('dotenv');

dotenv.config();

db.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.log('error')) 

const app = express();
app.get('/', (req, res) => res.send('running...'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log('app running'))
