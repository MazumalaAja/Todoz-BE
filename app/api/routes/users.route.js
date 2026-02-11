// Imports
const { insert } = require("../controllers/users.controller");
const router = require("express").Router();

// My-code
router.post("/users", insert);

// Exports
module.exports = router;