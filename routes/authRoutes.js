const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController");
//import auth middleware
const { protect } = require("../middleware/authMiddleware");
//import admin middleware
const { onlyAdmin } = require("../middleware/adminMiddleware");


// register route
router.post("/register", registerUser);
// login route
router.post("/login", loginUser);

router.get("/me", protect, (req, res) => {
    res.json({

        message: "Protected route accessed successfully",
        user: req.user
    });
});

router.get("/admin", protect, onlyAdmin, (req, res) => {
    res.json({
        message: "Admin route accessed successfully",
        user: req.user
    });
});


module.exports = router;
