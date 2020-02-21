// LOAD DATA
// Requiring json data file from the db folder 

const jsonData = require('../db/db.json');

console.log(jsonData);


// Routing

module.exports = (app) => {
    app.get("/api/notes", function(req, res) {
        res.json(jsonData);
      });
}