import express from "express";
import jwt from "jsonwebtoken";
import multer from "multer";
import path from "path";
import User from "../models/userSchema.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

let image = "";

const router = express.Router();
const SECRET_KEY = "asdfghjklqwertyuiopzxcvbnmqwerrttyuioasdfghjjkl";

// Define storage for images in db
const storage = multer.diskStorage({
  destination: "upload",
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 2 },
  fileFilter: (req, file, callback) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpeg"  ) {
      callback(null, true);
    } else {
      console.log("Only jpg and png files are supported");
      callback(null, false);
    }
  },
}).single("image");

// Define route to get user details
router.get("/", async (req, res) => {
  try {
    //authorization is a request header with token in it token is base63 encoded 
    // Get token from headers and verify
    // token is generally with bearer (static string )which is nedded to be removed so replace
    const token = req.headers.authorization.replace("Bearer ", "");
    const decoded = jwt.verify(token, SECRET_KEY);
    const userId = decoded._id;

    // Find user by id
    const user = await User.findById(userId, "name email image");

    if (!user) {
      console.log("User not found");
      return res.status(404).json({ error: "User not found" });
    }

    const { name, email, image } = user;

    console.log(user.image);
    const imageUrl = `/api/Profile/image/${user.image.data}`

    
    console.log("this is image url");
    console.log(imageUrl)
    res.status(200).json({ name, email, imageUrl});

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});

// Define route to add image to an existing user
router.post("/", upload, async (req, res) => {
  try {
    console.log("ffn");
    // Get token from headers and verify
    const token = req.headers.authorization.replace("Bearer ", "");
    const decoded = jwt.verify(token, SECRET_KEY);
    const userId = decoded._id;
    console.log("ffn");

    // Find user by id
    const user = await User.findById(userId);
    console.log("ffn");

    if (!user) {
      console.log("User not found");
      return res.status(404).json({ error: "User not found yet" });
    }

    if (!req.file) {
      return res.status(400).json({ message: "No file received" });
    }

    // Update the user with the image
    user.image = {
      data: req.file.filename,
      contentType: req.file.mimetype,
    };
    const image = {
      data: req.file.filename,
      contentType: req.file.mimetype,
    };
    console.log(image);
    await user.save();

    res
      .status(200)
      .json({ message: "Image uploaded successfully", image: image });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});




// Serve user image
router.get("/image/:imageName", async (req, res) => {
  try {
    //console.log("api/Profile/image/:imageName");
    const imageName = req.params.imageName;
    const imagePath = fileURLToPath(import.meta.url);
    const directoryPath = dirname(imagePath);
    const filePath = path.join(directoryPath, "../","upload", imageName);
    //console.log("heheh")
    //console.log(filePath);
    res.sendFile(filePath)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});

// Define route to update image URL in the user's data
router.put("/", async (req, res) => {
  try {
    // Get token from headers and verify
    const token = req.headers.authorization.replace("Bearer ", "");
    const decoded = jwt.verify(token, SECRET_KEY);
    const userId = decoded._id;

    // Find user by id
    const user = await User.findById(userId);

    if (!user) {
      console.log("User not found");
      return res.status(404).json({ error: "User not found" });
    }

    // Update the user's image URL
    console.log("imp")
    console.log(user.image)
    console.log(req.body)
    user.image.data = req.body.image;
    // user.image.contentType = req.body.image.contentType;
    await user.save();
    console.log(user.image)

    //console.log(user.image)
    //console.log(user)

    res.status(200).json({ message: "Image URL updated successfully", image: user.image });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});



export default router;