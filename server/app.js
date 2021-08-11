const express = require('express')
const app = express()
const cors = require('cors');

app.use(cors());
app.use(express.json());


app.get('/', (req, res)=>{
    res.send('Shh you shouldn\'t be here')
})

app.post('/', (req, res) => {
    res.send(405, 'Not allowd!');
});

app.post('/home', (req, res) =>{
    res.send(201, req.body);
})

app.get('/home/', (req,res) =>{
    res.send('hi')
})


module.exports = app;
