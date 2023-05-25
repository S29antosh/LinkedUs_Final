import React from "react";
import { useNavigate } from "react-router-dom";

export default function Jobs(props) {
  const navigate = useNavigate();
  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    margin: "1rem",
    backgroundColor: "#f5f5f5",
    borderRadius: "1rem",
    width: "60%",
    padding: "1rem",
    boxShadow: "2px 2px 10px 0 rgba(0,0,0,0.2)",
  };
  return (
    <div style={style}>
      <h1>{props.title}</h1>
      <ul
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <li>Dhulikhel</li>
        <li>{props.salary}</li>
        <li>Full Time</li>
      </ul>
      <p>{props.description}</p>
      <p>{props.date}</p>
      <button
        onClick={() => {
          navigate("/ApplyJobs");
        }}
      >
        Apply
      </button>
    </div>
  );
}
