const express = require("express");
const { getUserProfile, updateUserProfile } = require("../controllers/userController");
const router = express.Router();

router.get("/:id", getUserProfile); // GET user profile
router.put("/:id", updateUserProfile); // UPDATE user profile

module.exports = router;
