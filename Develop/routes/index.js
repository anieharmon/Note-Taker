//const router = require('express').Router();
//const fs = require('fs');
//router.get('/notes', (req, res) => {
    //fs.readFile('./db/db.json', 'utf8', (err, data) => {
       // if (err) {
           // console.error(err);
        //} else {
            //res.json(JSON.parse(data));
       // }
    //});
//})
//module.exports=router;

const fs = require('fs');
const path = require('path');

module.exports = app => {

    // Setup notes variable
    fs.readFile("db/db.json","utf8", (err, data) => {

        if (err) throw err;

        var notes = JSON.parse(data);