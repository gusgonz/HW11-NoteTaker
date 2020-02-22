// LOAD DATA
// Requiring json data file from the db folder 

const path = require('path');
const jsonData = require("../db/db.json");
const fs = require('fs');

console.log(jsonData);

// Routing
module.exports = (app) => {

  // GET db data
  app.get("/api/notes", (req, res) => {
    res.json(jsonData);
  });

  // POST new note
  app.post("/api/notes", (req, res) => {

    if (jsonData.length === 0) {
      newNote.id = 1;
    }
    else {
      let newID = jsonData[jsonData.length - 1].id + 1;
      let newNote = req.body;
      newNote.id = newID;
    }

    jsonData.push(newNote);

    fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(jsonData), err => {
      if (err) throw err;
      console.log('New note added successfully')
    });

    res.json(newNote);
  });
}