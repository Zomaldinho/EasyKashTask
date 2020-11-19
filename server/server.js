const express = require('express');
const { Sequelize } = require('sequelize');
const Transaction = require('./Models/transaction')

// connecting to an AWS cloud MySql database
const db = new Sequelize('database_1', 'admin', 'test1234', {
  host: 'database-1.c9r58b2hlfa8.eu-central-1.rds.amazonaws.com',
  dialect: 'mysql',
  port: 3306,
});

//checking the connection is sucessfull
db.authenticate()
  .then(() => console.log('Successfully connected to DB'))
  .catch((e) => console.log(e)
);

//adding the table to the Database (if it's exists, it does nothing)
Transaction.sync();

//Below is the code I used to add the data inside the DB table

// Transaction.bulkCreate([
//   {
//     user_id: 2,
//     title: 'money transfer 23',
//     fees: 25,
//     amount: 350,
//   },
//   {
//     user_id: 2,
//     title: 'money transfer 24',
//     fees: 25,
//     amount: 2350,
//   }
// ])
//   .then(() => console.log('success'))
//   .catch(console.log);


app = express();
port = process.env.PORT || 5000;

app.listen(port, () => console.log(`App is running on port ${port}`));
