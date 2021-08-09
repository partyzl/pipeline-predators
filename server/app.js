const express = require('express')
const app = express();

const entryRoute = require('./controller/entryController');

app.use('/', entryRoute);

app.get('/', (req, res)=>{
    res.send('Shh you shouldn\'t be here')
})


module.exports = app;