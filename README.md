# EasyKashTask

A simple app to retrieve information about seller's transaction from a database and viewing them in a table with apgination<br/>
You can control the seller information, the number of rows in each page and the page number from query parameters of the endpoint link <br/>
This is a MEAN app which uses Angular and Bootstrap for the front end and Node JS (Express) and an AWS cloud MySQL database and sequlize as ORM for the backend

## Installation

Clone the Github repository and use npm to install dependencies at the server folder <br/>
```
$ git clone https://github.com/Zomaldinho/EasyKashTask
$ cd EasyKashTask
$ cd server
$ npm install
```
After installation run `$ npm start` to start the server at port 5000 and make sure that the following message are shown in the terminal `App is working on port 5000` and `Successfully connected to DB`. if not, restart the server by pressing CTRL+C and `$ npm start` again <br/>
Then open a new terminal window inside the **front-end** folder and run `$ npm install`.
Finally start the front end with `$ ng serve`

## Usage
Copy the following URL and paste it into the address bar to get the data <a>http://localhost:4200/transaction?page=1&per_page=10&seller_id=2</a> <br/>
You can modify query params as follows:
* **Page** : To go to a specific page of the result table
* **Per_Page** : To set the number of table rows in each page
* **Seller_Id** : To view a specific  seller data table, currently there are two users in the database with IDs 1 & 2 & 3


## More Information

## Backend

It is written in JS using express framework, an AWS cloud MySQL database is used to store data and communication between server and database is handeled by Sequelize

### Models
2 models are used to store data with one to many relationship
* **Seller model** : in which seller are stored and it has the following properties:<br/> =>**name** , **address** which are the main data of a seller, <br/> =>**createdAt** which cointain the date of creation, <br/>=>**id** which is the primary key of the table and used in Transaction model as the forign key
* **Transaction model** : in which transactions data are stored and it has the following properties: **title**, **fees**, **amount**, and **createdAt** for transaction creation time <br/>=>**id** which is the primary key of the table. <br/>=>**sellerId** which is the forign key of the table that creates the one to many relationship to the seller table.

### Endpoints
The server has 1 end points which is:
* **Transaction Endpoint** : recieves a get request and returns all the transactions that belongs to the desired seller from the MySQL table

### Testing

I have added an Unit test and an Integration test to test the endpoint to run them simply open a terminal and run this code `npm run test` <br/>
The tests were written with Mocha and Chai


## Frontend
It is written in TS using Angular framwork and Bootstrap is used for styling. <br/>
The app contains 3 components and 2 pages. <br/>
### Components
* **App Component**: The main component of the app. <br/>
* **Home Component**: The component which appear when you go to the root route of the app
* **Transaction Component**: Handels all the required fetching functions from back end and displays the coming info in a table


### Pages

* **Home Page**: The default page which contain some basic info about the app
* **Transaction Page**: You can reach it by typing this link <a>http://localhost:4200/transaction?page=1&per_page=10&seller_id=2</a> in the address bar to get information about the required user transaction

### Testing

I have added some Unit tests to test component behaviour to run them simply open a terminal inside front-end folder and run this code `ng test` <br/>
The tests were written with Karma
