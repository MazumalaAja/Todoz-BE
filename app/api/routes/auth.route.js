// Imports
const { register, login } = require("../controllers/auth.controller");
const router = require("express").Router();

// My-code
router.post("/auth/register", register);
router.post("/auth/login", login);

// Exports
module.exports = router;