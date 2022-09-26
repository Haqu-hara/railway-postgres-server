const { Sequelize } = require('sequelize');
const dotenv = require('dotenv').config();

const { DB_URL } = process.env

const db = new Sequelize(DB_URL, {
  dialect: 'postgres'
})

module.exports = db;
