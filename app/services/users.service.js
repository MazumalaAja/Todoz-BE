// Imports
const usersModel = require("../api/models/users.model");
const { BadRequest } = require("../errors");

// My-code
const userService = {
     // create user / register
     insert: async (req) => {
          const { username, email, password, password_confirmation } = req.body;
          const dataUser = { username, email, password }
          if (!username || !email || !password || !password_confirmation) throw new BadRequest("all columns are required to be filled in");
          if (password !== password_confirmation) throw new BadRequest("Password confirmation doesn't match");
          const newUser = await usersModel.create(dataUser);
          return newUser;
     }
}

// Exports
module.exports = { userService }