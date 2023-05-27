import React from "react";
import AdminNavbar from "../Components/AdminNavbar";
import axios from "axios";
import { useEffect, useState } from "react";

export default function JobPosted() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make a GET request to the server
    axios
      .get("http://localhost:3000/api/jobs")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id) => {
    // Make a DELETE request to the server with the job ID
    axios
      .delete(`http://localhost:3000/api/jobs/${id}`)
      .then(() => {
        // Remove the job from the state
        setData((prevData) => prevData.filter((item) => item._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <AdminNavbar />
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Jobs
      </h1>
      <hr />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        {data.map((item) => {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "1rem",
                margin: "1rem",
                backgroundColor: "#f5f5f5",
                borderRadius: "1rem",
                width: "60%",
                padding: "1rem",
                boxShadow: "2px 2px 10px 0 rgba(0,0,0,0.2)",
              }}
            >
              <h1>{item.title}</h1>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <li>{item.location}</li>
                <li>{item.salary}</li>
                
              </ul>
              <p>{item.description}</p>
              <button onClick={() => handleDelete(item._id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
