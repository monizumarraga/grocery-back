const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const items = require ('./controllers/items');

var connection= {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'postgres',
    database : 'grocery'
  }

var db = require('knex')({
  client: 'pg',
  connection: connection
});

app.use(bodyParser.json());
app.use(cors());
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
   res.header("Access-Control-Allow-Origin", "http://localhost:3006");
   res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

app.get('/', items.handleItem(db))

app.listen(3000, () => {
	console.log('app is running on port 3000')
})