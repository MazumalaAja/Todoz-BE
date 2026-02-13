// Imports
const jsonWebToken = require("jsonwebtoken");
const { PRIVATE_KEY_JWT } = require("../config");

// My-code
function createToken(data, expire = "1d") {
     return jsonWebToken.sign(data, PRIVATE_KEY_JWT, { expiresIn: expire })
}

function verifyToken(token) {
     return jsonWebToken.verify(token, PRIVATE_KEY_JWT)
}

// Exports
module.exports = { createToken, verifyToken }