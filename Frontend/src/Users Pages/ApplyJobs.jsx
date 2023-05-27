import React, { useState } from "react";
import axios from "axios";
import Navigation_Bar from "../Components/Navigation_Bar";

export default function ApplyJobs() {
  const [name, setFullName] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");
  const [education, setEducation] = useState("");
  const [email, setEmail] = useState("");
  const [jobTitle, setjobTitle] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const newApplicant = {
        name,
        experience,
        skills,
        education,
        email,
      };
      await axios.post("http://localhost:3000/api/applicants", newApplicant);
      alert("Applied Successfully");
      setEmail("");
      setFullName("");
      setExperience("");
      setSkills("");
      setEducation("");

    } catch (err) {
      alert("Error while applying for job");
    }
  };

  return (
    <div className="layout">
      <Navigation_Bar
      home="Home"
      profile="Profile"
      />
      <div className="Apply-Jobs">
        <h1 style={{ textAlign: "center", fontWeight:"300" }}>Apply For The <b>Job</b> </h1>
        <form onSubmit={submit}>
          <input type="text"
          placeholder="Job Title"
          value={jobTitle}
          onChange={(e) => setjobTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
          <input
            type="text"
            placeholder="Skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
          <input
            type="text"
            placeholder="Education"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="applyButtons"><button type="submit">Submit</button></div>
        </form>
      </div>
    </div>
  );
}
