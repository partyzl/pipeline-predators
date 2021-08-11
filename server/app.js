const express = require('express')
const cors = require('cors');
const fs = require('fs');
const router = express.Router();
//const bodyParser = require('body-parser')
//const { entryData } = JSON.parse(fs.readFileSync('./data.json'));

const app = express();
app.use(cors());
app.use(express.json());

router.get('/', (req, res)=>{
    res.send('Shh you shouldn\'t be here')
})

router.post('/', (req, res) => {
    res.send(405, 'Not allowd!');
});

router.post('/home', (req, res) =>{
    res.send(201, req.body);
})

router.get('/home/', (req,res) =>{
    res.send(JSON.stringify(entryData))
})


module.exports = app;
