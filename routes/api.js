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

    jsonData.push(req.body);

    fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(jsonData), err => {
      if (err) throw err;
      console.log('New note added successfully')
    });

    res.json(req.body);
  });
}