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
    fs.readFile("db/db.json", "utf8", (err, data) => {

        if (err) throw err;

        var notes = JSON.parse(data);

        // API ROUTES
        // ========================================================

        // Setup the /api/notes get route
        app.get("/api/notes", function (req, res) {
            // Read the db.json file and return all saved notes as JSON.
            res.json(notes);
        });

        // Setup the /api/notes post route
        app.post("/api/notes", function (req, res) {
            // Receives a new note, adds it to db.json, then returns the new note
            let newNote = req.body;
            notes.push(newNote);
            updateDb();
            return console.log("Added new note: " + newNote.title);
        });

          // Retrieves a note with specific id
          app.get("/api/notes/:id", function(req,res) {
            // display json for the notes array indices of the provided id
            res.json(notes[req.params.id]);
        });
        