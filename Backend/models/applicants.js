import { Schema, model } from "mongoose";

const applicantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  skills: {
    type: String,
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
});

export default model("Applicant", applicantSchema);
