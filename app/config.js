// Imports
const dotenv = require("dotenv");
dotenv.config();

// exports
module.exports = {
     PORT: process.env.PORT || "3000",
     DB_URL: process.env.DB_URL,
}