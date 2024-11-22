// routes/profile.js
const express = require("express");
const Users = require("../models/userModel");
const authMiddleware = require("../middleware/authMiddleware"); // Ensures only authenticated users access

const router = express.Router();

// GET: Fetch user profile
router.get("/userinfo", authMiddleware, async (req, res) => {
  try {
    const user = await Users.findOne({ email: req.user.email }); // Assuming req.user contains authenticated user's email
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user info", error });
  }
});

// PUT: Update user profile
router.put("/updateProfile", authMiddleware, async (req, res) => {
  try {
    const user = await Users.findOneAndUpdate(
      { email: req.user.email },
      { $set: req.body },
      { new: true, upsert: true }
    );
    res.json({ message: "Profile updated successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Error updating profile", error });
  }
});

module.exports = router;
