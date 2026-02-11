// Imports
const { userService } = require("../../services/users.service");

// My-code
async function insert(req, res, next) {
     try {
          const data = await userService.insert(req);
          res.status(201).json({
               status: "CREATED",
               code: "201",
               message: "SUCCESS TO CREATE A NEW USER",
               data: data
          })
     } catch (err) {
          return next(err);
     }
}

// Exports
module.exports = { insert }