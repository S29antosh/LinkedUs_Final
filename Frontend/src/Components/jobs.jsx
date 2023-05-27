import React from "react";
import { useNavigate } from "react-router-dom";
import "../CSS files/JobPage.css";

export default function Jobs(props) {
  const navigate = useNavigate();

  return (
    <div className="Job__page">
      <div className="image__section">
        <img src="./public/Images/job_icon.png" alt="" />
      </div>
      <div className="job__section">
        <div className="job__title">
          <h1>{props.title}</h1>
        </div>
        <div className="job_details">
          <ul>
            <li>
               {props.salary}
            </li>
            <li>
                {props.location}
            </li>
            <li>
               {props.jobtype}
            </li>
          </ul>
          </div>
        <div className="job__description">
          <p>{props.description}</p>
        </div>
       
      </div>
      <div className="job__button">
          <button

            onClick={() => {
              navigate("/applyJobs");
            }}
          >
            Apply
          </button>
        </div>
    </div>
  );
}
