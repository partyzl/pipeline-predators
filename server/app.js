const express = require('express')
const cors = require('cors');
const fs = require('fs');

const { entryData } = JSON.parse(fs.readFileSync('./data.json'));

const app = express();
app.use(cors());

// const entryRoute = require('./controller/entryController');

app.get('/', (req, res)=>{
    res.send('Shh you shouldn\'t be here')
})

// app.use('/entries', entryRoute);

app.post('/entries', (req, res) => {
    res.send({name: 'werty', message: 'asdf message'});
})


app.get('/entries', (req, res) => {
    res.send(JSON.stringify(entryData));
})

module.exports = app;
