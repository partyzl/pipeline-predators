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

app.post('/', (req, res) => {
    res.send(405, 'Not allowd!');
});

// app.use('/entries', entryRoute);

app.get('/entries', (req, res) => {
    res.send(JSON.stringify(entryData));
})

app.post('/entries', (req, res) => {
    res.send({name: 'werty', message: 'asdf message'});
})

module.exports = app;
