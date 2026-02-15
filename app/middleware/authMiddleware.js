const { Unauthorized } = require("../errors/unauthorized");
const { verifyToken } = require("../utils/jsonwebtoken");

// My-code
async function authMiddleware(req, res, next) {
     try {
          // Request Headers
          const { authorization } = req.headers;

          // Valudation
          if (!authorization) throw new Unauthorized("Invalid athorization");

          // Data Users
          const token = authorization.split(" ")[1];
          const userData = await verifyToken(token);
          req.userEmail = userData.email;
          next();
     } catch (err) {
          next(err);
     }
}

// Exports
module.exports = authMiddleware;