// Import
const bcrypt = require("bcrypt");

// My-code
async function hashData(data) {
     const salt = await bcrypt.genSalt(12);
     return await bcrypt.hash(data, salt);
}

async function compareData(enteredData, data) {
     return await bcrypt.compare(enteredData, data)
}

// exports
module.exports = { hashData, compareData }