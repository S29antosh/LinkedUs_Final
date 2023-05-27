import React from "react";
import "../CSS files/JobPosting.css";
import AdminNavbar from "../Components/AdminNavbar";
import axios from "axios";


export default function JobPosting() {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [salary, setSalary] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [jobType, setJobType] = React.useState("");
  const [date, setDate] = React.useState(new Date().toISOString().slice(0, 10));

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: title,
      description: description,
      salary: salary,
      date: date,
      location: location,
      jobType: jobType,
      
    };
    axios
      .post("http://localhost:3000/api/jobs", data)
      .then((res) => {
        console.log(res);
        alert("Job Posted Successfully");
        setTitle("");
        setDescription("");
        setSalary("");
        setDate("");
        setLocation("");
        setJobType("");

      })
      .catch((err) => {
        console.log(err);
        alert("Job Posting Failed");
      });
  };

  return (
    <>
      <AdminNavbar />
    <div className="layout">
      <div
        className="Job-post"
        
      >
        <h1
          style={{
            textAlign: "center",
          }}
        >
          Post A Job
        </h1>
        <form action="none">
          <input
            type="text"
            placeholder="Enter Job Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter Job Salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
          <section>
          <input type="text" placeholder="Job Type" 
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
          /> 
          <input type="text" placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          />

           
            
            
           
          </section>
          <input
            type="text"
            placeholder="Enter Job Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{
              height: "10rem",
            }}
          />
          <input
            type="date"
            placeholder="Enter Job Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <button type="submit" onClick={handleSubmit}>
            Post
          </button>
        </form>
        
      </div>
    </div>
    </>
  );
}
