import React from "react";

export default function Applicants(props) {
  return (
    <div className="Applicants_List">
      <div className="Applicants_List_Container">
        <h1
          style={{
            textAlign: "center",
            color: "#006097",
          }}
        >
          {props.job}
        </h1>
        <div className="Applicants_info">
          <img src="./Images/Applicants.png" alt="Profile" />
          <p>
            <section>
              <b>Name:</b> {props.name}
            </section>
            <section>
              <b>Email:</b> {props.email}
            </section>
            <section>
              <b>Experience:</b> {props.Experience}
            </section>
            <section>
              <b>Skills:</b> {props.Skills}
            </section>
            <section>
              <b>Education:</b> {props.Education}
            </section>
          </p>
        </div>
      </div>
    </div>
  );
}
