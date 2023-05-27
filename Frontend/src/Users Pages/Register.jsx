import React from "react";
import "../CSS files/Register.css";
import Navigation_Bar from "../Components/Navigation_Bar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";

export default function Register() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [repassword, setrePassword] = React.useState("");
  
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    console.log("jj");
    if (password !== repassword) {
      alert("password and repassword do not match");
      return;
    }
    
    const requestData = {
      name: name,
      email: email,
      password: password,
      repassword: repassword,
    };
   
    axios
      .post("http://localhost:3000/api/Register", requestData)
      .then((res) => {
        alert("User Registered");
        navigate("/login");
      })
      .catch((err) => {
        alert("User Not Registered");
        console.log(err);
      });
  };

  return (
    <div>
      <div className="layout">
        <Navigation_Bar name="Login" />
        <div className="Register_page">
          <h1>Sign Up</h1>
          <form onSubmit={submit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <input
              type="email"
              name="email"
              placeholder=" Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
            <input
              type="password"
              name="repassword"
              placeholder="Re-enter Password"
              value={repassword}
              onChange={(e) => {
                setrePassword(e.target.value);
              }}
            ></input>
            
            <button
              style={{
                marginBottom: "20px",
              }}
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
