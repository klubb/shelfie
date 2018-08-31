const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive');
require('dotenv').config()
const controller = require('./controller')
const app = express()


app.use(bodyParser.json())

massive('postgres://barstjalkwbudz:61e90ebcd978c2870e83df6ce5cb91c44c4a0430ff35f537774e2309c06e8a73@ec2-50-16-196-57.compute-1.amazonaws.com:5432/d7onjkq17cq10u?ssl=true').then( dbInstance => {
    app.set('db', dbInstance)
  }).catch( err => console.log(err) );

app.get('/api/inventory', controller.get)
app.post( '/api/product', controller.post)
app.delete('/api/product/:id', controller.delete)

const PORT = 7398

app.listen(PORT, console.log(`listening on port ${PORT}`))