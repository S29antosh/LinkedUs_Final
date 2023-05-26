import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navigation_Bar(props) {
  const [showText, setShowText] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  function handleLogo() {
    setShowText(!showText);
  }
  function toggleMenu() {
    setShowMenu(!showMenu);
  }
  const toggle = {
    display: showMenu ? "block" : "none",
  };

  return (
    <div>
      <header>
        <div className="navbar">
          <div className="logo">
            <img
              onClick={handleLogo}
              src="/Images/LinkedUs1.png"
              alt=""
              id="MainLogo"
            />
            {showText && (
              <h1
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "cursive",
                }}
              >
                LinkedUs
              </h1>
            )}
          </div>
          <div className="nav-links">
            <div className="toggleScreen" style={toggle}>
              <ul>
                
                <li>
                  <Link to="/homepage">{props.home}</Link>{" "}
                </li>
                <li>
                  <Link to="/Profile">{props.profile} </Link>{" "}
                </li>

                <li>
                  <Link to="/Contactus">Contact</Link>
                </li>
                <li>
                  <Link to="/Aboutus">About Us</Link>{" "}
                </li>
              </ul>
            </div>
            <section
              onClick={toggleMenu}
              style={{
                cursor: "pointer",
              }}
            >
              <svg
                width="42"
                height="35"
                viewBox="0 0 42 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M42 34.6023H21V28.8352H42V34.6023ZM42 20.1847H0V14.4176H42V20.1847ZM42 5.76705H0V0H42V5.76705Z"
                  fill="#414141"
                />
              </svg>
            </section>
          </div>
        </div>
      </header>
    </div>
  );
}
