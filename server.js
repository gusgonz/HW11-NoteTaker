// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

const express = require("express");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 6969;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

// Using this so my server also sends the css and js
app.use(express.static("public"));

require("./routes/api")(app);
require("./routes/html")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================


// API GET requests
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});

// API POST request

