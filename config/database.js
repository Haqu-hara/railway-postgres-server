const { Sequelize } = require('sequelize');
const dotenv = require('dotenv').config();

const { 
  DB_USER_NAME,
  DB_HOST,
  DB_PASSWORD,
  DB_TABLE
} = process.env

const db = new Sequelize(DB_TABLE, DB_USER_NAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres'
});

module.exports = db;
