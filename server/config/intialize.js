// Here is the code I used to initialize the data base
const Seller = require('../Models/seller')
const Transaction = require('../Models/transaction')


//adding the table to the Database
Seller.sync();
Transaction.sync();

//Below is the code I used to add the data inside the DB tables

Seller.Create([
  {
    name: 'Mahmoud Hassan',
    adress: 'Cairo, Egypt',
  },
])
  .then(() => console.log('success'))
  .catch(console.log);

Transaction.bulkCreate([
  {
    sellerId: 1,
    title: 'money transfer 21',
    fees: 5,
    amount: 350,
  },
  {
    sellerId: 2,
    title: 'online purchase 22',
    fees: 25,
    amount: 2350,
  },
])
  .then(() => console.log('success'))
  .catch(console.log);