// Anuja Portion

import express from "express";
const router = express.Router();

import Applicant from "../models/applicants.js";

// get request to get all the applicants
router.get("/", async (req, res) => {
  try {
    const applicants = await Applicant.find();
    res.json(applicants);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});


// post request to submit the application
router.post("/", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  // const job = req.body.job;
  // const phone = req.body.phone;
  const experience = req.body.experience;
  const skills = req.body.skills;
  const education = req.body.education;
  // const date = req.body.date;

  const newApplicant = new Applicant({
    name,
    email,
    // job,
    // phone,
    experience,
    skills,
    education,
    // date,
  });

  try {
    await newApplicant.save();
    res.json("Application submitted successfully!");
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});


// Delete all the applicants
router.delete("/", async (req, res) => {
  try {
    await Applicant.deleteMany();
    res.json("All applicants deleted successfully!");
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});



export default router;
