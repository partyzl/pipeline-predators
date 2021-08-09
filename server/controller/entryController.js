const { SUPPRESS } = require('argparse');
const express = require('express');
const router = express.Router();
const entryData = require('../data/entryData.json')

router.get('/home', (req, res)=>{
    res.send(JSON.stringify(entryData))
})

//I don't think we need
// router.post('/update/:id', (req, res)=>{
//     res.send("hmm not sure")
// })

module.exports = router;