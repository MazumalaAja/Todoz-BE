// Imports
const mongoose = require("mongoose");
const { DB_URL } = require("../config");

// My-code
mongoose.connect(DB_URL)
     .then(() => console.log("MONGODB CONNECTION SUCCESS"))
     .catch(err => console.log(err));

const DB = mongoose.connection

// Exports
module.exports = DB;

