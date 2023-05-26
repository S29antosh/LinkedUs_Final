import React from "react";
import "../CSS files/footer.css";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <div>
      <footer
        style={{
          backgroundColor: "#021624",
          color: "#aeb5ba",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",

          gap: "1rem",
        }}
      >
        <div
          className="footer-head"
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
            margin: "1rem",
          }}
        >
          <div
            className="left-foot"
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "4rem",
              margin: "1rem",
            }}
          >
            <ul>
              <h1>Overview</h1>
              <li>Home</li>
              <li>Jobs</li>
              <li>Company Reviews</li>
              <li>Salaries</li>
              <li>Interviews</li>
              <li>Account Settings</li>
            </ul>
            <ul>
              <h1>Jobs</h1>
              <li>Job Search</li>
              <li>Job Seekers</li>
              <li>Employers</li>
              <li>Jobs Salaries</li>
              <li>Interviews</li>
              <li>Write a Review</li>
            </ul>
          </div>
          <div className="right-footer">
            <ul
              style={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
                gap: "1rem",
                margin: "1rem",
              }}
            >
              <h1>Get Started</h1>
              <p style={{}}>
                Ready to apply? Get started
                <br />
                with the information you'll
                <br />
                need to apply to your dream job.
              </p>
              <div
                className="footer-buttons"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "row",
                  justifyContent: "start",
                  alignItems: "start",
                  gap: "1rem",
                }}
              >
                <button
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Sign In
                </button
                >
                <button
                 onClick={() => {
                  navigate("/register");
                }}>Sign Up</button>
              </div>
            </ul>
          </div>
        </div>
        <div
          className="footer-main"
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
            margin: "1rem",
          }}
        >
          <div
            className="footer-main-left"
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "column",
              justifyContent: "start",
              gap: "0.5rem",
              width: "50%",
            }}
          >
            <h1>Linked Us</h1>
            <p>
              LinkedUs is a job search engine that helps job seekers find jobs
              and employers find talent. We are a one-stop-shop for job seekers,
              providing them career advice, job opportunities, and the latest
              insights into the job market.
            </p>
          </div>
          <div className="footer-main-right">
            <h1
              style={{
                textAlign: "start",
                fontSize: "1.5rem",
                fontWeight: "bold",
                padding: "1rem",
              }}
            >
              Follow Us
            </h1>
            <div
              className="social-media"
              style={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "start",
                alignItems: "center",
                gap: "1rem",
                margin: "1rem",
              }}
            >
              <img src="\Images\facebook.svg" alt="facebook" />
              <img src="\Images\instagram.svg" alt="instagram" />
              <img src="\Images\twitter.svg" alt="twitter" />
              <img src="\Images\linkedin.svg" alt="linkedin" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
