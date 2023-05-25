import mongoose from "mongoose";
const { Schema } = mongoose;


// schema

// const Schema = mongoose.Schema;


const jobSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const Job = mongoose.model("Job", jobSchema);

export default Job;