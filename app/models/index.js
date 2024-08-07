const dbConfig = require("../config/db.config.js"); // Importing db.config.js file.
const mongoose = require("mongoose"); // Importing mongoose module.

mongoose.Promise = global.Promise; // Setting mongoose's promise to global promise.

const db = {}; // Creating an empty object.
db.mongoose = mongoose; // Adding mongoose to the object.
db.url = dbConfig.url; // Adding the URL to the object.
db.comments = require("./comment.model.js")(mongoose); // Adding the comments model to the object.

module.exports = db; // Exporting the object.
/*
app
    config
      db.config.js
    models
      index.js  
*/