const express = require('express');
const {Sequelize} = require('sequelize');

// connecting to an AWS cloud database
const db = new Sequelize('database_1', 'admin', 'test1234', {
  host: 'database-1.c9r58b2hlfa8.eu-central-1.rds.amazonaws.com',
  dialect: 'mysql',
  port: 3306,
});

app = express();
port = process.env.PORT || 5000;

app.listen(port, () => console.log(`App is running on port ${port}`));
