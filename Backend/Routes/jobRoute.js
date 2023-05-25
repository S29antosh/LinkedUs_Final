import express from "express";
const router = express.Router();
import Job from "../models/jobSchema.js";

// getting all jobs
router.get("/", (req, res) => {
  Job.find()
    .then((jobs) => res.json(jobs))
    .catch((err) => res.status(400).json("Error: " + err));
});

// posting a job
router.post("/", (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const salary = req.body.salary;
  const date = req.body.date;

  const newJob = new Job({
    title,
    description,
    salary,
    date,
  });

  newJob
    .save()
    .then(() => res.json("Job posting added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// getting a specific job
router.get("/:id", (req, res) => {
  Job.findById(req.params.id)
    .then((job) => res.json(job))
    .catch((err) => res.status(400).json("Error: " + err));
});

// deleting a specific job
router.delete("/:id", (req, res) => {
  Job.findByIdAndDelete(req.params.id)

    .then(() => res.json("Job posting deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

export default router;
