import React from "react";
import Navigation_Bar from "../Components/Navigation_Bar";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";

export default function Landing_page() {
  const [bodyStyle, setBodyStyle] = React.useState("none");
  const [SplashStyle, setSplashStyle] = React.useState("flex");
  const navigate = useNavigate();

  setTimeout(() => {
    setBodyStyle("block");
    setSplashStyle("none");
  }, 2000);

 

  return (
    <>
      <div className="welcome"
      style={{
        display: SplashStyle,

      }}
      
      >
        <img src="./Images/LinkedUs1.png" alt="" />
        <h1>Welcome to LinkedUS</h1>
      
      </div>
    <div
      className="body"
      style={{
        display: bodyStyle,
      }}
    >
      <div className="layout">
        <Navigation_Bar />
        <main>
          <div className="main-content">
            <div className="left-section">
              <h1>Get Job And Internship With Just One Click</h1>
              <p>
                The jobs and internship opportunity of your field of interest in
                your fingertips.
              </p>
              <div
                className="user-roles"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <div
                  className="userButtons"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    // border:"solid",
                    width: "30vw",

                    gap: "1em",
                  }}
                >
                  <button onClick={() => navigate("/Login")}>User</button>
                  <button onClick={() => navigate("/portal")}>Admin</button>
                </div>
              </div>
            </div>

            <div className="right-section">
              {/* random image from unsplash */}
              {/* <img
                src="https://source.unsplash.com/random/400x400"
                alt="random image"
              /> */}
              <img src="\Images\Scene - 1.png" alt="img" />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
    </>
  );
}
