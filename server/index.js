const express = require('express');

const app = express();

const connectDB = require('./config/db')

var cors = require('cors');

var bodyParser = require('body-parser')

const books = require('./routes/api/books');

app.use('/image', express.static('image')); 

connectDB()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors({ origin: true, credentials: true})); 
    
app.use('/api/books', books);

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Hello world!!')
})

app.listen(port,()=>console.log(`Server running on ${port}`))