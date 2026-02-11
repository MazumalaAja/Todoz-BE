// Imports
const router = require("express").Router();

// My-code
router.get("/", (req, res) => {
     res.status(200).json({
          status: "OK",
          code: "200",
          message: "WELCOME TO TODOZ API"
     })
});

// export
module.exports = router;