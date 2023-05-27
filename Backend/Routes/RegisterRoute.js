import express from "express";
const router = express.Router();
// //DB
// import DB from '../database/app'

// //schema
import User from "../models/userSchema.js";


//to get the info fill by user
router.post("/", async (req, res) => {
  const { name, email, password, repassword,role } = req.body;
  console.log(41);

  //checking if user fill all the info
  if (!name || !email || !password || !repassword) {
    return res.status(422).json({ error: "Please fill all info" });
  }
  console.log(41);

  const userExist = await User.findOne({ email: email });
  if (userExist) {
      //checks whether the user has already made an account or not
      console.log(1);
      //if yes this executes
      return res.status(422).json({ error: "User already exists" });
  }


      //or else this one
      console.log(1);
      const newUser = new User({ name, email, password, repassword});
      console.log(newUser);
      console.log(1);
      try {
        // Save user to database
        newUser.save();
        res.status(201).json({ message: "User registered" });
        
      } catch (err) {
        res.status(500).json({ error: "Failed to register user" });
      }
    })
    
;




export default router ;