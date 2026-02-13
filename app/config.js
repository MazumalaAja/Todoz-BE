// Imports
const dotenv = require("dotenv");
dotenv.config();

// exports
module.exports = {
     PORT: process.env.PORT || "3000",
     DB_URL: process.env.DB_URL,
     GMAIL: process.env.GMAIL,
     APP_PASS_GMAIL: process.env.APP_PASS_GMAIL,
     PRIVATE_KEY_JWT: process.env.PRIVATE_KEY_JWT,
}