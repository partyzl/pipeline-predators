const express = require('express')
const app = express();

const entryData = require('./data/entryData')
// const entryRoute = require('./controller/entryController');


app.get('/', (req, res)=>{
    res.send('Shh you shouldn\'t be here')
})

app.use('/home', entryRoute);

// app.get('/home', (req,res) =>{
//     res.send(JSON.stringify(entryData))
// })

app.post('/home', (req, res) =>{
    console.log(request.body);
})

module.exports = app;