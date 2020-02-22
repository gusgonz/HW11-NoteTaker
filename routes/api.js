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
    let newNote = req.body;

    if (jsonData.length === 0) {
      newNote.id = 1;
    }
    else {
      let newID = jsonData[jsonData.length - 1].id + 1;
      newNote.id = newID;
    }

    jsonData.push(newNote);

    fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(jsonData), err => {
      if (err) throw err;
      console.log('New note added successfully');
    });

    res.json(newNote);
  });

  app.delete("/api/notes/:id", (req, res) => {
    let deleteID = req.params.id;

    let newjsonData = jsonData.filter(obj => obj.id != deleteID);

    fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(newjsonData), err => {
      if (err) throw err;
      console.log('Note deleted successfully');
    });

    res.send('DELETE request to homepage');

  });
}