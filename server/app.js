const express = require('express')
const app = express();

const entryRoute = require('./controller/entryController');

app.get('/', (req, res)=>{
    res.send('Shh you shouldn\'t be here')
})

app.use('/entries', entryRoute);

module.exports = app;
