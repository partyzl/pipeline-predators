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
        let entry = Entry.all
    } catch (error) {
        
    }
})


//need a post route for posting all journal entries
router.post('/home', (req, res)=> {
    try {
        
    } catch (error) {
        
    }
})