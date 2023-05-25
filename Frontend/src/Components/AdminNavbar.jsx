import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminNavbar() {
  return (
    <div>
        <ul style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            listStyle: "none",
            backgroundColor: "#000",
            color: "#fff",
            height: "5vh",
        }}
        >
            <li> <Link to="/Jobposting">Create a Job</Link></li>
            <li> <Link to="/jobAppliedList">Applicants</Link></li>
            <li> <Link to ="/jobPosted">Your Jobs</Link></li>
           
        </ul>

    </div>
  )
}
