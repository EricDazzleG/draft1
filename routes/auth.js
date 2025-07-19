const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../models/User")
const router = express.Router()

// Register
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body

    let user = await User.findOne({ email })
    if (user) {
      return res.status(400).json({ message: "User already exists" })
    }

    user = new User({ name, email, password })

    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(password, salt)

    await user.save()

    const payload = { user: { id: user.id } }
    jwt.sign(payload, process.env.JWT_SECRET || "secret", { expiresIn: "1h" }, (err, token) => {
      if (err) throw err
      res.json({ token, user: { id: user.id, name: user.name, email: user.email } })
    })
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
})

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" })
    }

    const payload = { user: { id: user.id } }
    jwt.sign(payload, process.env.JWT_SECRET || "secret", { expiresIn: "1h" }, (err, token) => {
      if (err) throw err
      res.json({ token, user: { id: user.id, name: user.name, email: user.email } })
    })
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
})

module.exports = router
