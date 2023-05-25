import express from "express";
const router = express.Router();
import User from "../models/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Login from "../models/userSchema.js";

//to get the info fill by user
router.post("/Register", (req, res) => {
  const { name, email, password, repassword, roles } = req.body;
  console.log(1);

  //checking if user fill all the info
  if (!name || !email || !password || !repassword || !roles) {
    return res.status(422).json({ error: "Please fill all info" });
  }
  console.log(1);

  Login.findOne({ email: email })
    .then((userExist) => {
      //checks whether the user has already made an account or not

      //if yes this executes
      if (userExist) {
        return res.status(422).json({ error: "already existed" });
      }

      //or else this one
      // password =bcrypt.hash(this.password, 12);
      // repassword =bcrypt.hash(this.repassword, 12);
      const newUser = new Login({ name, email, password, repassword, roles });
      console.log(newUser);

      newUser
        .save()
        .then(() => {
          res.status(201).json({ message: "user registered" });
        })
        .catch((err) => res.status(500).json({ error: "failewed" }));
    })
    .catch((err) => {
      console.log(err);
    });
});

// Login route

router.post("/Login", async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      console.log("password and email must be filled");
    }
    // Check if user with given email exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Create and sign a JWT token
    const token = jwt.sign({ userId: user._id }, "secret", { expiresIn: "1h" });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;