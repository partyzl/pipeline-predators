const express = require('express')
const cors = require('cors');

const entryRoutes = require('./controller/routes')
app.use(express.static(__dirname + '../client/static'));

const bodyParser = require('body-parser')

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser());
// app.use('/home', entryRoutes);

app.get('/', (req, res)=>{
    res.send('Shh you shouldn\'t be here')
})

app.post('/', (req, res) => {
    res.send(405, 'Not allowd!');
});

app.get('/home/', (req,res) =>{
    res.send('hi');
})

app.post('/home', (req, res) => {
    res.send(201, req.body);
})

module.exports = app;
