import express from "express";
const router = express.Router();
import bcrypt from "bcrypt";

// //DB


// //schema
import Login from "../models/userSchema.js";



//login checking

router.post("/", async (req, res) => {
  try {
    
    const { email, password } = req.body;

    // Check if the user exists in the database
    if (!email || !password) {
      console.log("password and email must be filled");
    }
    const userLogin = await Login.findOne({ email: email });
    if (!userLogin) {
      console.log("Please fill correct information");
    } else {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      if (!isMatch) {
        console.log("Please fill correct information");
      }
      else {
        const token = await userLogin.generateAuthToken();
           // Construct the user object to send in the response
    const userData = {
      _id: userLogin._id,
      name: userLogin.name,
      email: userLogin.email,
      image: userLogin.image,
    };
        // Send the token and user data in the response
    res.status(200).json({ token, userLogin: userData });
      }
    }
  } catch (err) {
    console.log(err);
  }
});

export default router ;