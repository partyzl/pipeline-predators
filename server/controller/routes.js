const express = require('express')
const router = express.Router();

const Entry = require('../models/entry')
const Comment = require('../models/comment')
const data = require('../data/data.json')
const fs = require('fs');
//wrap them in try catches
//need a get route for getting all journal entries
router.get('/home', (req, res)=>{
    try {
        let entry = Entry.getAllEntries;
        res.status(200)
        .send("entry")
    } catch (error) {
        console.error(err);
        res.status(404)
        .send('you made a boo boo')
    }
})


//need a route to send entries
router.post('/home', (req, res)=> {
    try {
       Entry.newEntry(req.body);
       res.status(201)
       .send("Yay") 
    } catch (error) {
        console.error('AHHHH', err);
        res.status(404)
        .send('you made a boo boo')
    }
})