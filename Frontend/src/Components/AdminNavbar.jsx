import React from "react";
import { Link } from "react-router-dom";
import "../CSS files/Applicants_List.css";

export default function AdminNavbar() {
  return (
    <div className="Admin_navbar">
      <ul>
        <li>
          {" "}
          <Link to="/Jobposting">Create a Job</Link>
        </li>
        <li>
          {" "}
          <Link to="/jobAppliedList">Applicants</Link>
        </li>
        <li>
          {" "}
          <Link to="/jobPosted">Your Jobs</Link>
        </li>
      </ul>
    </div>
  );
}
