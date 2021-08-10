const express = require('express')
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser')

const { entryData } = JSON.parse(fs.readFileSync('./data.json'));

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send('Shh you shouldn\'t be here')
})

app.post('/', (req, res) => {
    res.send(405, 'Not allowd!');
});


app.get('/home', (req,res) =>{
    res.send(JSON.stringify(entryData))
})

app.post('/create', (req, res) =>{
    res.send(201, req.body);
})

module.exports = app;
