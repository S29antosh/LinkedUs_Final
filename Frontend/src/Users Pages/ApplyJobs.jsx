import React, { useState } from "react";
import axios from "axios";
import Navigation_Bar from "../Components/Navigation_Bar";

export default function ApplyJobs() {
  const [name, setFullName] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");
  const [education, setEducation] = useState("");
  const [email, setEmail] = useState("");

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
        <h1 style={{ textAlign: "center" }}>Apply For Jobs</h1>
        <form onSubmit={submit}>
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

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
